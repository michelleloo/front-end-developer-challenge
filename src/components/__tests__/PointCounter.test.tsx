import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PointCounter, { PointCounterProps } from "../PointCounter";

describe("PointCounter", () => {
  const renderPoints = (props: PointCounterProps) => {
    render(<PointCounter {...props} />);
  };

  it("renders the correct points text", () => {
    const freePoints = 5;
    const maxPoints = 10;
    renderPoints({ freePoints, maxPoints });

    const pointsText = screen.getByText(`${freePoints}/${maxPoints}`);
    expect(pointsText).toBeInTheDocument();
  });

  it("displays the 'Points Spent' label", () => {
    renderPoints({ freePoints: 0, maxPoints: 10 });

    const label = screen.getByText("Points Spent");
    expect(label).toBeInTheDocument();
  });
});
