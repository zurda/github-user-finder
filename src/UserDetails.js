import React from "react";
import githubUsernameRegex from "github-username-regex";
import api from "./api";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.userName,
      currentApiCall: false,
      userData: null
    };
  }

  componentDidMount() {
    const username = this.state.username;
    console.log(username);
    if (githubUsernameRegex.test(username) && !this.state.currentApiCall) {
      this.setState({ currentApiCall: true });
      api.getData(username).then(userData => {
        if (userData !== null) {
          this.setState({
            userData,
            currentApiCall: false
          });
        }
      });
    }
  }
  render() {
    if (!this.state.userData) {
      return <div>Loading</div>;
    }
    return (
      <div className="main">
        <div className="image">
          <img
            src={this.state.userData.avatarUrl}
            alt="User avatar"
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className="left aligned content">
          <div className="header">
            <a
              style={{ cursor: "default" }}
              href={`https://github.com/${this.state.userData.username}`}
            >
              <i className="star icon" title="Stargazers" />
            </a>
            <span>{this.state.userData.stargazers}</span>
            <a
              href={`https://github.com/${
                this.state.userData.username
              }?tab=followers`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="users icon" title="Followers" />
            </a>
            <span>{this.state.userData.followers}</span>
            <a
              href={`https://github.com/${
                this.state.userData.username
              }?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="file code outline icon" title="Repositories" />
            </a>
            <span>{this.state.userData.repos}</span>
            <i
              className="icon delete ui right"
              style={{ color: "lightgrey" }}
              title="Remove from list"
            />
          </div>
          <div className="description">
            <h4>
              {this.state.userData.title}
              <br />
              <a
                href={`https://github.com/${this.state.userData.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.state.userData.username}
              </a>
            </h4>
            <p>{this.state.userData.bio}</p>
          </div>
          <div className="extra">
            <span>Location this:</span>
            {this.state.userData.location}
            <span style={{ display: "block", color: "green" }}>
              {this.state.userData.hireable ? "Availble for job offers" : null}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
