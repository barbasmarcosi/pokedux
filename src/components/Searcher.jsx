import React, { useState, useRef } from "react";
import { Input } from "antd";

const Searcher = () => {
  const [search, setSearch] = useState("");
  const searchInput = useRef();
  const onChangeInput = () => {
    setSearch(searchInput.current.value);
  };
  
  return (
    <>
      <input
        ref={searchInput}
        value={search}
        onChange={onChangeInput}
        placeholder="Search"
        type="text"
        className="Searcher"
      />
      {<Input.Search
      ref={searchInput}
        value={search}
        onChange={onChangeInput}
        placeholder="Search"
        type="text"
        className="Searcher"
  />}
    </>
  );
};

export default Searcher;
