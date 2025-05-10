import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders headline", () => {
    render(<App />);
    const headline = screen.getByText("Fail-Fast Error Detectionss");
    expect(headline).toBeInTheDocument();
  });

  it("renders navbar with correct links", () => {
    render(<App />);
    expect(screen.getByText("Homes")).toBeInTheDocument();
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders footer with copyright", () => {
    render(<App />);
    expect(screen.getByText(/DevOps Research Project/)).toBeInTheDocument();
  });
});
