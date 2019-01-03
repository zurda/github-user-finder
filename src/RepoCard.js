import React from "react";
import { Link } from "@reach/router";

class RepoCard extends React.Component {
  render() {
    const { name, id, owner, description, stargazers, forks } = this.props.repo;
    return (
      <div className="item" id={id} key={id}>
        <div className="ui small image">
          <img src={`${owner.avatar_url}.jpg`} alt="User avatar" />
        </div>
        <div className="middle aligned content">
          <div className="header">{name}</div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
        <Link to={`/details/${name}`}>
          <button className="ui primary button">More Info</button>
        </Link>
        <button
          className="ui button"
          onClick={() => this.props.handleDelete(name)}
        >
          Discard
        </button>
      </div>
    );
  }
}

export default RepoCard;
