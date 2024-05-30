import React from "react";

const SearchBar = ({ setQuery }: { setQuery: any }) => {
  const handleInputChange = (event: any) => {
    setQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for movies..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
