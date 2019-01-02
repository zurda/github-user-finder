import React from "react";
import Main from "../src/Main";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";
import axiosMock from "axios";
jest.mock("axios");

afterEach(cleanup);

describe("Main: Jest is working", () => {
  it("First test", () => {
    expect(1).toEqual(1);
  });

  it("An API call is made displayed when button is clicked", () => {
    const resp = {
      data: {
        stargazers: 0,
        username: "Zurd",
        id: 2153082,
        key: 2153082,
        avatarUrl: "https://avatars1.githubusercontent.com/u/2153082?v=4",
        title: null,
        location: "Earth",
        bio: null,
        followers: 0,
        repos: 0,
        hireable: null
      }
    };
    axiosMock.get.mockImplementation(() => Promise.resolve(resp));
    const { getByText, getByTestId, container, asFragment } = render(<Main />);
    const usernameInputElement = getByTestId("username-input");
    fireEvent.change(usernameInputElement, { target: { value: "zurda" } });
    const usernameBtnElement = getByTestId("search-btn");
    fireEvent.click(usernameBtnElement);
  });
});
