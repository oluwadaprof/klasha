import "./search.scss";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="search">
      <input type="text" name=""  placeholder="Search" onChange={handleSearch}  />
      <FiSearch className="search_icon"/>
    </div>
  );
};

export default Search;
