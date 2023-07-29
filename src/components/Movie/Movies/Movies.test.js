import React from "react";
import { render, screen } from "@testing-library/react";
import Movie from "./Movie";

test("renders movie row", () => {
  render(<Movie />);
  const movieRow = screen.getByTestId("movie-row");
  expect(movieRow).toBeInTheDocument();
});

test("renders movie columns", () => {
  render(<Movie />);
  const movieColumns = screen.getAllByTestId("movie-col-6");
  expect(movieColumns.length).toBe(6);
});
