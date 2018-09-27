import React from "react";

const keyDownHandler = event => {
  if (event.keyCode === 13) {
    document.getElementById("searchBtn").click();
  }
};

const Search = props => {
  return (
    <div id="search-input-btn" className="ui action input left icon">
      <input
        type="text"
        placeholder="Search users..."
        value={props.value}
        onChange={props.change}
        onKeyDown={keyDownHandler}
      />
      <i className="users icon" />
      <button className="ui button" id="searchBtn" onClick={props.click}>
        Search
      </button>
    </div>
  );
};

export default Search;
