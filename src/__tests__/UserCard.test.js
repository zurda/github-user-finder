import React from "react";
import { create } from "react-test-renderer";
import UserCard from "../UserCard";

test("snapshot", () => {
  const user = {
    title: "String",
    username: "String",
    id: 0,
    avatarUrl: "string",
    bio: "string",
    location: "string",
    hireable: true,
    stargazers: 2000,
    followers: 2000,
    repos: 2000
  };
  const c = create(<UserCard user={user} />);
  expect(c.toJSON()).toMatchSnapshot();
});
