import React from "react";
import UserCard from "./UserCard";

class DisplayUsersList extends React.Component {
  render() {
    console.log("user data", this.props.users);
    let userComponents;
    const sortBy = this.props.sortBy;
    if (!this.props.users) {
      userComponents = null;
    } else {
      const users = this.props.users.sort((a, b) => b[sortBy] - a[sortBy]);
      userComponents = users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          handleDelete={this.props.handleDelete}
        />
      ));
    }
    return <div className="ui items">{userComponents}</div>;
  }
}

export default DisplayUsersList;
