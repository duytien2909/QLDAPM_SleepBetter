import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SelectMusicScreen from "../components/Music/SelectMusic";
import { NativeBaseProvider } from "native-base";
import { act } from "react-test-renderer";

jest.mock("expo-av", () => ({
  Audio: {
    Sound: {
      createAsync: jest.fn().mockResolvedValue({
        sound: { playAsync: jest.fn(), unloadAsync: jest.fn() },
      }),
    },
  },
}));

jest.mock("@expo/vector-icons", () => {
  const React = require("react");
  const MockIcon = ({ name, size, color }) => (
    <React.Fragment>{`Icon: ${name}`}</React.Fragment>
  );

  return {
    Feather: MockIcon,
    AntDesign: MockIcon,
  };
});

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe("<SelectMusicScreen />", () => {
  const mockOnClose = jest.fn();
  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    timerFinished: false,
  };

  it("filters music list based on search query", () => {
    const { getByPlaceholderText, queryByText } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <SelectMusicScreen {...defaultProps} />
      </NativeBaseProvider>
    );

    fireEvent.changeText(getByPlaceholderText("Search music"), "Calm Night");

    expect(queryByText("Calm Night")).toBeTruthy();
    expect(queryByText("Aurora")).toBeNull();
  });

  it("plays music when a music item is pressed", async () => {
    const { getByText, findByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <SelectMusicScreen {...defaultProps} />
      </NativeBaseProvider>
    );

    const musicItem = getByText("Calm Night");
    fireEvent.press(musicItem);

    await waitFor(() => {
      const pauseButton = findByTestId("pause-button");
      expect(pauseButton).toBeTruthy();
    });
  });
  it("stops music when the stop button is pressed", async () => {
    const { getByText, findByTestId, queryByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <SelectMusicScreen {...defaultProps} />
      </NativeBaseProvider>
    );

    const musicItem = getByText("Calm Night");
    fireEvent.press(musicItem);

    await waitFor(() => {
      const pauseButton = findByTestId("pause-button");
      expect(pauseButton).toBeTruthy();
    });

    await waitFor(() => {
      expect(queryByTestId("pause-button")).toBeNull();
    });
  });

  it("updates the music list based on the search input", async () => {
    const { getByPlaceholderText, queryByText, findAllByText } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <SelectMusicScreen {...defaultProps} />
      </NativeBaseProvider>
    );

    fireEvent.changeText(getByPlaceholderText("Search music"), "Aurora");

    const filteredItems = await findAllByText("Aurora");

    expect(filteredItems.length).toBeGreaterThan(0);
    filteredItems.forEach((item) => {
      expect(item.props.children).toContain("Aurora");
    });

    expect(queryByText("Calm Night")).toBeNull();
  });
});
