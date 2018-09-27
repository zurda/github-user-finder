import React from "react";
import { Link } from "@reach/router";

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
      reposCount,
      click
    } = this.props;
    return (
      <div className="item" id={username} key={id}>
        <div className="ui small image">
          <img src={avatarUrl} alt="User avatar" />
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
          <div className="extra">
            <span style={{ color: "#A0A0A0" }}>Location:</span>
            {location}
            <p style={{ color: "#A0A0A0" }}>
              {hireable ? "Availble for job offers" : null}
            </p>
          </div>
          <div className="extra content">
            <span>
              <i className="star icon" />
              {stargazers} Stargazers
            </span>
            <span>
              <i className="users icon" />
              {followers} Followers
            </span>
            <span>
              <i className="file code outline icon" />
              {reposCount} Repos
            </span>
            <div className="ui right floated">
              <Link to={`/details/${username}`}>
                <button className="ui primary button">More Info</button>
              </Link>
              <button className="ui button" onClick={() => click(username)}>
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
