import React from "react";
import UserCard from "./UserCard";
import Loader from "./Loader";

class DisplayUsersList extends React.Component {
	render() {
		let userComponents;
		const sortBy = this.props.sortBy;
		if (!this.props.users) {
			userComponents = <Loader />;
		} else {
			const users = this.props.users.sort((a, b) => b[sortBy] - a[sortBy]);
			userComponents = users.map((user) => (
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
