import React from "react";

const Sorting = props => {
  return (
    <form className="ui form" style={{ visibility: props.display }}>
      <div className="inline fields">
        <label htmlFor="sorting">Sort results by: </label>
        <div className="field" id="sorting">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="sort by"
              value="stargazers"
              id="stargazers"
              checked={props.sortBy === "stargazers"}
              onChange={props.onOptionChange}
            />
            <label htmlFor="stargazers">Stargazers</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="sort by"
              value="followers"
              id="followers"
              checked={props.sortBy === "followers"}
              onChange={props.onOptionChange}
            />
            <label htmlFor="followers">Followers</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="sort by"
              value="repos"
              id="repos"
              checked={props.sortBy === "repos"}
              onChange={props.onOptionChange}
            />
            <label htmlFor="repos" onChange={props.onOptionChange}>
              Repos
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Sorting;
