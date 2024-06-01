import React, { useEffect, useState } from "react";
export const FilterListWithTag = ({
  items,
  title,
  setFilterValues,
  filterValues,
  keyValue,
}: {
  items: { id: string; name: string }[];
  title: string;
  setFilterValues: any;
  filterValues: {
    language: string;
    availabilities: any;
    genres: any;
  };
  keyValue: keyof { genres: string };
}) => {
  const [checkedItems, setCheckedItems] = useState(filterValues.genres);
  const handleCheckboxChange = (id: string) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(
        checkedItems.filter((checkedItem: any) => checkedItem !== id)
      );
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  useEffect(() => {
    setFilterValues({ ...filterValues, [keyValue]: checkedItems });
  }, [checkedItems]);
  useEffect(() => {
    setCheckedItems(filterValues.genres);
  }, [filterValues.genres]);
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <hr className="mb-4" />
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={checkedItems.includes(item?.id)}
              onChange={() => handleCheckboxChange(item.id)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-0 dark:focus:ring-blue-0 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={`checkbox-${index}`} className="ms-2 text-xs">
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export const FilterListWithCheckbox = ({
  items,
  title,
  setFilterValues,
  filterValues,
  keyValue,
}: {
  items: string[];
  title: string;
  setFilterValues: any;
  filterValues: {
    language: string;
    availabilities: any;
  };
  keyValue: keyof { availabilities: string };
}) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (item: string) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(
        checkedItems.filter((checkedItem) => checkedItem !== item)
      );
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  useEffect(() => {
    setFilterValues({ ...filterValues, [keyValue]: checkedItems });
  }, [checkedItems]);
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <hr className="mb-4" />
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={checkedItems.includes(item)}
              onChange={() => handleCheckboxChange(item)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-0 dark:focus:ring-blue-0 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="link-checkbox" className="ms-2 text-xs">
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
