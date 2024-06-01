import React, { useState } from "react";

const FilterItem = ({
  items,
  title,
  setFilterValues,
  filterValues,
  keyValue,
}: {
  items: string[];
  title: string;
  setFilterValues: any;
  filterValues: { language: string };
  keyValue: keyof { language: string };
}) => {
  const handleCheckboxChange = (item: string) => {
    setFilterValues({
      ...filterValues,
      [keyValue]: item?.toLowerCase().replace(/-/g, ""),
    });
  };

  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <hr className="mb-4" />
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="radio"
              name={title}
              checked={
                filterValues[keyValue] === item?.toLowerCase().replace(/-/g, "")
              }
              onChange={() => handleCheckboxChange(item)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:border-gray-600"
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

export default FilterItem;
