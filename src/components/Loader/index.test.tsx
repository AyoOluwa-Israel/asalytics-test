import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from ".";

test("should render a Loader Screen Correctly", async () => {
  render(<Loader />);
  expect(screen.getByTestId("loader")).toBeTruthy();
});

test("should render a Text Correctly", async () => {
  render(<Loader />);
  expect(screen.getByTestId("loader-text")).toHaveTextContent("Loading Assets");
});

test("should render a Loader Correctly", async () => {
  render(<Loader />);
  expect(screen.getByTestId("loader")).toHaveClass("bg-primary");
});
