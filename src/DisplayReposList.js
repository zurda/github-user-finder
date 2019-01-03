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
    if (this.state.reposData.length === 0) {
      api.getRepos().then(reposData => {
        const newState = {};
        if (reposData !== null) {
          newState.reposData = reposData;
        } else {
          newState.error = false;
        }
        this.setState(newState);
      });
    }
  }

  render() {
    let repoComponents;
    if (!this.state.reposData) {
      repoComponents = null;
    } else {
      const repos = this.state.reposData;
      repoComponents = repos.map(repo => (
        <RepoCard key={repo.name} repo={repo} />
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
