import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";

import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { loadGreeting as mockLoadGreeting } from "./api";
import { GreetingLoader } from "./greetingLoader";

jest.mock("./api", () => {
  return {
    loadGreeting: jest.fn(subject =>
      Promise.resolve({ data: { greeting: `Hi ${subject}` } })
    )
  };
});

test("loads greetings on click", async () => {
  const { getByLabelText, getByText, getByTestId } = render(<GreetingLoader />);
  const nameInput = getByLabelText(/name/i);
  const loadButton = getByText(/load/i);

  fireEvent.change(nameInput, { target: { value: "Mary" } });
  fireEvent.click(loadButton);

  await wait(() => {
    expect(mockLoadGreeting).toHaveBeenCalledTimes(1);
    expect(mockLoadGreeting).toHaveBeenCalledWith("Mary");
    expect(getByTestId("greeting")).toHaveTextContent(`Hi Mary`);
  });
});
