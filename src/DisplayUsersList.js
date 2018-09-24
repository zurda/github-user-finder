import React from "react";

function addCommas(int) {
  return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class DisplayUsersList extends React.Component {
  render() {
    let userComponents;
    const sortBy = this.props.sortBy;
    if (!this.props.users) {
      userComponents = null;
    } else {
      const users = this.props.users.sort((a, b) => b[sortBy] - a[sortBy]);
      userComponents = users.map(user => (
        <User
          key={user.id}
          id={user.id}
          title={user.title}
          location={user.location}
          username={user.username}
          bio={user.bio}
          stargazers={addCommas(user.stargazers)}
          avatarUrl={user.avatarUrl}
          topLang={user.topLang}
          url={user.url}
          followers={user.followers}
          repos={user.repos}
          hireable={user.hireable}
          click={this.props.click}
        />
      ));
    }
    return <div className="ui unstackable items">{userComponents}</div>;
  }
}

class User extends React.Component {
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
            <a style={{ cursor: "default" }}>
              <i className="star icon" title="Stargazers" />
            </a>
            <span>{this.props.stargazers}</span>
            <a
              href={`https://github.com/${this.props.username}?tab=followers`}
              target="_blank"
            >
              <i className="users icon" title="Followers" />
            </a>
            <span>{this.props.followers}</span>
            <a
              href={`https://github.com/${
                this.props.username
              }?tab=repositories`}
              target="_blank"
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
              >
                {this.props.username}
              </a>
            </h4>
            <p>{this.props.bio}</p>
          </div>
          <div className="extra">
            <span>Location:</span>
            {this.props.location}
            <span style={{ display: "block", color: "green" }}>
              {this.props.hireable ? "Availble for job offers" : null}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayUsersList;
