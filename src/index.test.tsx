import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "./components/header";
import { Dates } from "./components/dates";

describe("teste de componente", () => {
  it("componente Header é renderizado ?", () => {
    render(<Header />);
    expect(screen.getByText("Sair")).toBeInTheDocument();
  });
});
describe("teste de componente", () => {
  it("componente Dates é renderizado?", () => {
    render(<Dates />);
    expect(screen.getByText("Time")).toBeInTheDocument();
  });
});
