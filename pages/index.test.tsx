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
    mockedGetAssets.mockImplementation(() => ({ isLoading: true }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(<Card />);
  });

  it("Fetches the assets details into card", () => {
    render(<Home />);
    expect(getAllAsset).toBeCalled();
  });

  it("Fetches the assets details into card", () => {
    render(<Home />);
    expect(screen.getByTestId("loading")).toBeTruthy();
  });
});
