import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TimerMusicScreen from "../components/Music/TimerMusic";
import { NativeBaseProvider } from "native-base";

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe("<TimerMusicScreen />", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <TimerMusicScreen
          isOpen={true}
          onClose={() => {}}
          onSelectDuration={() => {}}
        />
      </NativeBaseProvider>
    );
    expect(getByText("Timer to turn off music")).toBeTruthy();
  });

  it("modal visibility should correspond to isOpen prop", () => {
    const { rerender, queryByText } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <TimerMusicScreen
          isOpen={false}
          onClose={() => {}}
          onSelectDuration={() => {}}
        />
      </NativeBaseProvider>
    );

    // Initially, the modal should not be visible
    expect(queryByText("Timer to turn off music")).toBeNull();

    // Re-render with modal open
    rerender(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <TimerMusicScreen
          isOpen={true}
          onClose={() => {}}
          onSelectDuration={() => {}}
        />
      </NativeBaseProvider>
    );

    expect(queryByText("Timer to turn off music")).toBeTruthy();
  });

  it("should call onSelectDuration with correct duration after scrolling and pressing Save", () => {
    const mockOnSelectDuration = jest.fn();
    const { getByTestId, getByText } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <TimerMusicScreen
          isOpen={true}
          onClose={() => {}}
          onSelectDuration={mockOnSelectDuration}
        />
      </NativeBaseProvider>
    );

    // Mock scroll events
    const hourScrollEvent = { nativeEvent: { contentOffset: { y: 150 } } }; // 3 hours
    const minuteScrollEvent = { nativeEvent: { contentOffset: { y: 100 } } }; // 2 minutes

    // Simulate scrolling
    fireEvent(
      getByTestId("hourScrollView"),
      "onMomentumScrollEnd",
      hourScrollEvent
    );
    fireEvent(
      getByTestId("minuteScrollView"),
      "onMomentumScrollEnd",
      minuteScrollEvent
    );

    // Simulate pressing Save
    fireEvent.press(getByText("Save"));

    expect(mockOnSelectDuration).toHaveBeenCalledWith(182); // 3 hours * 60 + 2 minutes
  });
  it("should close the modal and not call onSelectDuration when Cancel is pressed", () => {
    const mockOnClose = jest.fn();
    const mockOnSelectDuration = jest.fn();

    const { getByText } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <TimerMusicScreen
          isOpen={true}
          onClose={mockOnClose}
          onSelectDuration={mockOnSelectDuration}
        />
      </NativeBaseProvider>
    );

    fireEvent.press(getByText("Cancel"));

    expect(mockOnClose).toHaveBeenCalled();
    expect(mockOnSelectDuration).not.toHaveBeenCalled();
  });
  it('should handle boundary conditions for hour and minute selection', () => {
    const mockOnSelectDuration = jest.fn();
    const { getByTestId, getByText } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <TimerMusicScreen
          isOpen={true}
          onClose={() => {}}
          onSelectDuration={mockOnSelectDuration}
        />
      </NativeBaseProvider>
    );
  
    // Mock scroll events for maximum hour (23) and minute (59)
    const hourScrollEventMax = { nativeEvent: { contentOffset: { y: 1150 } } }; // 23 hours
    const minuteScrollEventMax = { nativeEvent: { contentOffset: { y: 2950 } } }; // 59 minutes
  
    // Simulate scrolling to maximum values
    fireEvent(getByTestId('hourScrollView'), 'onMomentumScrollEnd', hourScrollEventMax);
    fireEvent(getByTestId('minuteScrollView'), 'onMomentumScrollEnd', minuteScrollEventMax);
  
    fireEvent.press(getByText('Save'));
  
    expect(mockOnSelectDuration).toHaveBeenCalledWith(1439); // 23 hours * 60 + 59 minutes
  });
  
});
