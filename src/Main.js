import React from "react";
import githubUsernameRegex from "github-username-regex";
import api from "./api";
import DisplayUsersList from "./DisplayUsersList";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      currentApiCall: false,
      usersData: [],
      sortBy: "stargazers"
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  deleteUser(event) {
    const id = event.target.parentNode.parentNode.parentNode.id;
    const usersData = this.state.usersData.filter(obj => {
      return obj.username !== id;
    });
    this.setState({ usersData });
  }
  handleOptionChange(event) {
    const newState = event.target.value;
    this.setState({
      sortBy: newState
    });
  }
  inputHandler(event) {
    const input = event.target.value;
    this.setState({ input });
  }
  keyDownHandler(event) {
    if (event.keyCode === 13) {
      document.getElementById("searchBtn").click();
    }
  }
  clickHandler() {
    let currentUsers = this.state.usersData.map(user => user.username);
    const currentInput = this.state.input;
    if (
      githubUsernameRegex.test(currentInput) &&
      currentUsers.indexOf(currentInput) === -1 &&
      !this.state.currentApiCall
    ) {
      this.setState({ currentApiCall: true });
      api.getData(currentInput).then(userData => {
        if (userData !== null) {
          const joined = this.state.usersData.concat(userData);
          this.setState({
            input: "",
            usersData: joined,
            currentApiCall: false
          });
        }
      });
    }
  }
  render() {
    return (
      <div className="main">
        <div className="ui action input left icon center">
          <input
            type="text"
            placeholder="Search users..."
            value={this.state.input}
            onChange={this.inputHandler}
            onKeyDown={this.keyDownHandler}
          />
          <i className="users icon" />
          <button
            className="ui button"
            id="searchBtn"
            onClick={this.clickHandler}
          >
            Search
          </button>
        </div>
        <form className="ui form">
          <div className="inline fields">
            <label htmlFor="sorting">Sort results by: </label>
            <div className="field" id="sorting">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="sort by"
                  value="stargazers"
                  id="stargazers"
                  checked={this.state.sortBy === "stargazers"}
                  onChange={this.handleOptionChange}
                />
                <label htmlFor="stargazers">Stargazers</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="sort by"
                  value="followers"
                  id="followers"
                  checked={this.state.sortBy === "followers"}
                  onChange={this.handleOptionChange}
                />
                <label htmlFor="followers">Followers</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="sort by"
                  value="repos"
                  id="repos"
                  checked={this.state.sortBy === "repos"}
                  onChange={this.handleOptionChange}
                />
                <label htmlFor="repos" onChange={this.handleOptionChange}>
                  Repos
                </label>
              </div>
            </div>
          </div>
        </form>
        <DisplayUsersList
          sortBy={this.state.sortBy}
          users={this.state.usersData}
          click={this.deleteUser}
        />
      </div>
    );
  }
}
export default Main;
