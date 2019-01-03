import React from "react";
import RepoCard from "./RepoCard";

class DisplayReposList extends React.Component {
  render() {
    let repoComponents;
    if (!this.props.repos) {
      repoComponents = null;
    } else {
      const repos = this.props.repos;
      console.log(repos);

      repoComponents = repos.map(repo => (
        <RepoCard
          key={repo.name}
          repo={repo}
          handleDelete={this.props.handleDelete}
        />
      ));
    }
    return <div className="ui items">{repoComponents}</div>;
  }
}

export default DisplayReposList;
