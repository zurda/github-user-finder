import React from "react";
import githubUsernameRegex from "github-username-regex";
import api from "./api";
import DisplayUsersList from "./DisplayUsersList";
import Sorting from "./Sorting";
import Search from "./Search";

class Main extends React.Component {
  state = {
    input: "",
    currentApiCall: false,
    usersData: [],
    sortBy: "stargazers"
  };
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
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

  clickHandler() {
    let currentUsers = this.state.usersData.map(user => user.username);
    const currentInput = this.state.input.trim();
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
    let displaySort = this.state.usersData.length > 1 ? "visible" : "hidden";
    return (
      <div className="Main">
        <Search
          value={this.state.input}
          change={this.inputHandler}
          click={this.clickHandler}
          keyDown={this.keyDownHandler}
        />
        <Sorting
          onOptionChange={this.handleOptionChange}
          display={displaySort}
          sortBy={this.state.sortBy}
        />
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
