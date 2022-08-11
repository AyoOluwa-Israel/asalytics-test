import React from "react";
import { render, screen } from "@testing-library/react";
import { getAllAsset } from "../src/services/assetService";
import Card from "../src/components/card";
import Home from ".";

// Solves TypeScript Errors
const mockedGetAssets = getAllAsset as jest.Mock<any>;

jest.mock("../src/services/assetService");

describe("getAllAsset", () => {
  beforeEach(() => {
    mockedGetAssets.mockImplementation(() => ({}));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(<Card />);
  });

  it("Fetches the assets details into Card Components", () => {
    render(<Home />);
    expect(getAllAsset).toBeCalled();
  });

  it("Render when asset is fetching", () => {
    mockedGetAssets.mockImplementation(() => ({
      isLoading: true,
    }));
    render(<Home />);
    expect(screen.getByTestId("loading")).toBeTruthy();
  });

  it("renders an error message", () => {
    mockedGetAssets.mockImplementation(() => ({
      isError: true,
      error: { message: "Something went wrong" },
    }));

    render(<Home />);
    expect(screen.getByTestId("error-screen")).toBeTruthy();
  });
});
