import React from "react";
import { Link } from "@reach/router";

const cardStyle = {
  boxShadow: "0.2rem 0.2rem 0.2rem rgba(0,0,0,.35)",
  width: "95%",
  padding: "0.8rem",
  margin: "1rem",
  backgroundColor: "#fafafa"
};

class RepoCard extends React.Component {
  render() {
    const { name, id, owner, description, stargazers, forks } = this.props.repo;
    return (
      <div className="item" style={cardStyle} id={id} key={id}>
        <div className="ui small image">
          <img
            src={`${owner.avatar_url}.jpg`}
            id="repo-img"
            alt="Repo avatar"
          />
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
      </div>
    );
  }
}

export default RepoCard;
