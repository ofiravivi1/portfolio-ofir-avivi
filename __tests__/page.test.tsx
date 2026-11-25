import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("the home page shows my title", () => {
  render(<Page />);
  const title = screen.getByRole("heading", { level: 1 });
  expect(title.textContent).toContain("Ofir");
});
