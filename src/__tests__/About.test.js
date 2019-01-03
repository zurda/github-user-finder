import React from "react";
import { create } from "react-test-renderer";
import About from "../About";

test("snapshot", () => {
  const c = create(<About />);
  expect(c.toJSON()).toMatchSnapshot();
});
