import React from "react";
import { Link } from "@reach/router";

class UserCard extends React.Component {
  render() {
    return (
      <div
        className="item"
        id={this.props.username}
        key={this.props.id}
        style={{ border: "none" }}
      >
        <div className="image">
          <img
            src={this.props.avatarUrl}
            alt="User avatar"
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className="left aligned content">
          <div className="header">
            <a
              style={{ cursor: "default" }}
              href={`https://github.com/${this.props.username}`}
            >
              <i className="star icon" title="Stargazers" />
            </a>
            <span>{this.props.stargazers}</span>
            <a
              href={`https://github.com/${this.props.username}?tab=followers`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="users icon" title="Followers" />
            </a>
            <span>{this.props.followers}</span>
            <a
              href={`https://github.com/${
                this.props.username
              }?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="file code outline icon" title="Repositories" />
            </a>
            <span>{this.props.repos}</span>
            <i
              className="icon delete ui right"
              onClick={this.props.click}
              style={{ color: "lightgrey" }}
              title="Remove from list"
            />
          </div>
          <div className="description">
            <h4>
              {this.props.title}
              <br />
              <a
                href={`https://github.com/${this.props.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.username}
              </a>
            </h4>
            <p>{this.props.bio}</p>
          </div>
          <div className="extra">
            <span>Location this:</span>
            {this.props.location}
            <span style={{ display: "block", color: "green" }}>
              {this.props.hireable ? "Availble for job offers" : null}
            </span>
            <Link to={`/details/${this.props.username}`}>
              <button className="ui black button">More info</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
