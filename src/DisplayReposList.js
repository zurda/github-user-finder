import React from "react";
import RepoCard from "./RepoCard";
import api from "./api";

class DisplayReposList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reposData: []
    };
  }

  componentDidMount() {
    console.log("state", this.state.reposData);
    if (this.state.reposData.length === 0) {
      api.getRepos().then(reposData => {
        console.log("repos in promise", reposData);
        const newState = {};
        if (reposData !== null) {
          newState.reposData = reposData[0];
        } else {
          newState.error = false;
        }
        this.setState(newState);
      });
    }
  }

  render() {
    let repoComponents;
    if (this.state.reposData.length === 0) {
      repoComponents = null;
    } else {
      const repos = this.state.reposData;
      repoComponents = repos.map(repo => (
        <RepoCard key={repo.id} repo={repo} />
      ));
    }
    return (
      <div className="ui items">
        <h2>Popular Javascript Repos</h2>
        {repoComponents}
      </div>
    );
  }
}

export default DisplayReposList;
