import React from "react";
import { addCommas } from "./helpers";
import { Link, redirectTo } from "@reach/router";

const cardStyle = {
  boxShadow: "0.2rem 0.2rem 0.2rem rgba(0,0,0,.35)",
  width: "95%",
  padding: "0.8rem",
  margin: "1rem",
  backgroundColor: "#fafafa"
};

class UserCard extends React.Component {
  render() {
    const {
      title,
      username,
      id,
      avatarUrl,
      bio,
      location,
      hireable,
      stargazers,
      followers,
      repos
    } = this.props.user;
    return (
      <div className="item" style={cardStyle} id={username} key={id}>
        <div className="ui small image">
          <img src={avatarUrl} className="user-img" alt="User avatar" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            {title}
            <br />
            {username}
          </div>
          <div className="description">
            <p>{bio}</p>
          </div>
          <div className="extra" style={{ color: "#A0A0A0" }}>
            <span>Location:</span>
            {location}
            <p style={{ color: "#FF1493" }}>
              {hireable ? "Availble for job offers" : null}
            </p>
          </div>
          <div className="extra content">
            <span>
              <i className="star icon" />
              {addCommas(stargazers)} Stargazers
            </span>
            <span>
              <i className="users icon" />
              {addCommas(followers)} Followers
            </span>
            <span>
              <i className="file code outline icon" />
              {addCommas(repos)} Repos
            </span>
            <div className="ui right floated">
              <Link to={`/details/${username}`}>
                <button className="ui primary button">More Info</button>
              </Link>
              <button
                className="ui button"
                onClick={() => this.props.handleDelete(username)}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
