import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Toggle } from "./toggle";

test("Change state when toggle button is clicked", () => {
  const { getByText } = render(<Toggle />);
  const toggleButton = getByText(/toggle state/i);
  expect(getByText("The State is: false")).toBeInTheDocument();
  fireEvent.click(toggleButton);
  expect(getByText("The State is: true")).toBeInTheDocument();
  fireEvent.click(toggleButton);
  expect(getByText("The State is: false")).toBeInTheDocument();
});
