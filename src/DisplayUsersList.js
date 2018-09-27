import React from "react";
import UserCard from "./UserCard";

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
        <UserCard
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

export default DisplayUsersList;
