import React from "react";
import { render } from "@testing-library/react-native";
import SleepAnalyticsScreen from "../screens/SleepAnalyticsScreen";

jest.mock("../components/ProgressCircle", () => "ProgressCircle");
jest.mock("../components/BottomNav", () => "BottomNav");

describe("SleepAnalyticsScreen", () => {
  it("renders correctly", () => {
    const { getByText } = render(<SleepAnalyticsScreen />);
    expect(getByText("Sleep Analytics")).toBeTruthy();
    expect(getByText("Based on our Data")).toBeTruthy();
    expect(getByText("You almost reach a perfect month of sleep")).toBeTruthy();
    expect(getByText("Weekly Overview")).toBeTruthy();
  });
});
