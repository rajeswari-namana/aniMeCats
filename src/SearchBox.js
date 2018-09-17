import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--orange bg-near-white"
        type="search"
        placeholder="Search Cats"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
