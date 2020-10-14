import React from "react";
import RepoCard from "./RepoCard";
import api from "./api";
import Loader from "./Loader";

class DisplayReposList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			topic: "",
			reposData: [],
			currentApiCall: false,
			error: false,
		};

		this.onIconClick = this.onIconClick.bind(this);
	}

	onIconClick(topic) {
		this.setState({ topic });
		if (!this.state.currentApiCall) {
			this.setState({ currentApiCall: true });
			api.getRepos(topic).then((reposData) => {
				const newState = {};
				if (reposData !== null) {
					newState.reposData = reposData.repos;
				} else {
					newState.error = false;
				}
				newState.currentApiCall = false;
				this.setState(newState);
			});
		}
	}

	render() {
		let repoComponents;
		if (this.state.currentApiCall) {
			repoComponents = <Loader />;
		} else {
			const repos = this.state.reposData;
			repoComponents = repos.map((repo) => (
				<RepoCard key={repo.id} repo={repo} />
			));
		}
		return (
			<div className="repos-list">
				<div className="ui items">
					<h2 style={{ textAlign: "center" }}>Popular repos in:</h2>
					<div style={{ textAlign: "center" }} className="topics">
						<i
							style={{
								color: this.state.topic === "javascript" && "white",
								backgroundColor: this.state.topic === "javascript" && "grey",
							}}
							className="fab fa-js-square fa-4x"
							onClick={() => this.onIconClick("javascript")}
						/>
						<i
							style={{
								color: this.state.topic === "java" && "white",
								backgroundColor: this.state.topic === "java" && "grey",
							}}
							className="fab fa-java fa-4x"
							onClick={() => this.onIconClick("java")}
						/>
						<i
							style={{
								color: this.state.topic === "kotlin" && "white",
								backgroundColor: this.state.topic === "kotlin" && "grey",
							}}
							className="fab fa-android fa-4x"
							onClick={() => this.onIconClick("kotlin")}
						/>
						<i
							style={{
								color: this.state.topic === "php" && "white",
								backgroundColor: this.state.topic === "php" && "grey",
							}}
							className="fab fa-php fa-4x"
							onClick={() => this.onIconClick("php")}
						/>
						<i
							style={{
								color: this.state.topic === "node" && "white",
								backgroundColor: this.state.topic === "node" && "grey",
							}}
							className="fab fa-node fa-4x"
							onClick={() => this.onIconClick("node")}
						/>
						<i
							style={{
								color: this.state.topic === "python" && "white",
								backgroundColor: this.state.topic === "python" && "grey",
							}}
							className="fab fa-python fa-4x"
							onClick={() => this.onIconClick("python")}
						/>
					</div>
					{this.state.topic && repoComponents}
				</div>
			</div>
		);
	}
}

export default DisplayReposList;
