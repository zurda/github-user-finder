import React from "react";
import githubUsernameRegex from "github-username-regex";
import api from "./api";
import Loader from "./Loader";

class UserDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: this.props.userName,
			currentApiCall: false,
			userData: null,
		};
	}

	componentDidMount() {
		const username = this.state.username;
		if (githubUsernameRegex.test(username) && !this.state.currentApiCall) {
			this.setState({ currentApiCall: true });
			api.getData(username).then((userData) => {
				if (userData !== null) {
					this.setState({
						userData,
						currentApiCall: false,
					});
				}
			});
		}
	}
	render() {
		if (!this.state.userData) {
			return <Loader />;
		}
		return (
			<div className="main" style={{ padding: "0 1rem", textAlign: "center" }}>
				<div className="ui small image">
					<img
						src={this.state.userData.avatarUrl}
						alt="User avatar"
						style={{ borderRadius: "5px", marginBottom: "10px" }}
					/>
				</div>
				<div className="left aligned content">
					<div className="header">
						<a
							style={{ cursor: "pointer" }}
							href={`https://github.com/${this.state.userData.username}`}
						>
							<i className="star icon massi" title="Stargazers" />
						</a>
						<span style={{ padding: "5px" }}>
							{this.state.userData.stargazers}
						</span>
						<a
							href={`https://github.com/${this.state.userData.username}?tab=followers`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="users icon" title="Followers" />
						</a>
						<span style={{ padding: "5px" }}>
							{this.state.userData.followers}
						</span>
						<a
							href={`https://github.com/${this.state.userData.username}?tab=repositories`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="file code outline icon" title="Repositories" />
						</a>
						<span style={{ padding: "5px" }}>{this.state.userData.repos}</span>
						<i
							className="icon delete ui right"
							style={{ color: "lightgrey", cursor: "pointer" }}
							title="Remove from list"
						/>
					</div>
					<div className="description">
						<h4 style={{ fontSize: "2.4rem" }}>
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
						<p style={{ fontSize: "1.4rem" }}>{this.state.userData.bio}</p>
					</div>
					<div
						className="extra"
						style={{ fontSize: "1.4rem", padding: "1rem" }}
					>
						<span>Location : </span>
						{this.state.userData.location}
						<span style={{ display: "block", color: "green", padding: "1rem" }}>
							{this.state.userData.hireable ? "Availble for job offers" : null}
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default UserDetails;
