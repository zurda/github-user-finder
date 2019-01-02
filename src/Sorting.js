import React from "react";

const Sorting = props => {
  return (
    <form className="ui form">
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
              onChange={props.change}
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
              onChange={props.change}
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
              onChange={props.change}
            />
            <label htmlFor="repos" onChange={props.change}>
              Repos
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Sorting;
