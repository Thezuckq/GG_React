import React from "react";
import { useState } from "react";
import Button from "../button";
import Input from "../input";

const SearchBarComp = (props) => {
  const [inputQuery, setinputQuery] = useState("");
  const handleChangeInput = (e) => {
    setinputQuery(e.target.value);
  };

  const handleSubmitGiphy = (e) => {
    e.preventDefault();
    props.handleQuery(inputQuery);
  };

  return (
    <div className="StyleSearchBar">
      <form onSubmit={handleSubmitGiphy}>
        <Input type="text" name="inputText" onChange={handleChangeInput} placeholder="Search Gifs..." />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};
export default SearchBarComp;
