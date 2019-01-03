import React from "react";
import githubUsernameRegex from "github-username-regex";
import api from "./api";
import DisplayUsersList from "./DisplayUsersList";
import DisplayReposList from "./DisplayReposList";
import Sorting from "./Sorting";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      currentApiCall: false,
      usersData: [],
      sortBy: "stargazers",
      error: false
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onSearchKeyDown = this.onSearchKeyDown.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(username) {
    const usersData = this.state.usersData.filter(obj => {
      return obj.username !== username;
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
  onSearchKeyDown(event) {
    if (event.keyCode === 13) {
      this.onSubmitHandler();
    }
  }
  onSubmitHandler() {
    const currentUsers = this.state.usersData.map(user => user.username);
    const currentInput = this.state.input.trim();
    if (
      githubUsernameRegex.test(currentInput) &&
      currentUsers.indexOf(currentInput) === -1 &&
      !this.state.currentApiCall
    ) {
      this.setState({ currentApiCall: true });
      api.getData(currentInput).then(userData => {
        var newState = {
          input: "",
          currentApiCall: false
        };
        if (userData !== null) {
          newState.usersData = this.state.usersData.concat(userData);
          newState.error = false;
        } else {
          newState.error = true;
        }
        this.setState(newState);
      });
    }
  }
  render() {
    const showSorting = this.state.usersData.length > 1;
    return (
      <div className="main">
        <div className="ui action input left icon center">
          <input
            data-testid="username-input"
            type="text"
            placeholder="Search users..."
            value={this.state.input}
            onChange={this.inputHandler}
            onKeyDown={this.onSearchKeyDown}
          />
          <i className="users icon" />
          <button
            data-testid="search-btn"
            className="ui button"
            id="searchBtn"
            onClick={this.onSubmitHandler}
          >
            Search
          </button>
        </div>

        {this.state.error && (
          <div className="flash-message message-error">
            <strong> Username not Found</strong>
          </div>
        )}

        {showSorting && (
          <Sorting
            sortBy={this.state.sortBy}
            change={this.handleOptionChange}
          />
        )}
        <DisplayUsersList
          sortBy={this.state.sortBy}
          users={this.state.usersData}
          handleDelete={this.deleteUser}
        />
        <DisplayReposList />
      </div>
    );
  }
}
export default Main;
