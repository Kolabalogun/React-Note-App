import React from "react";
import { useGContext } from "./Context";

const Search = () => {
  const { search, onChangeSearch } = useGContext();
  return (
    <div className="search">
      <img src="3.svg" alt="" />
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={onChangeSearch}
      />
    </div>
  );
};

export default Search;
