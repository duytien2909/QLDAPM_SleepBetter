import React, { useState, useRef } from "react";
import {
  Modal,
  Button,
  Text,
  VStack,
  HStack,
  ScrollView,
  Box,
  Pressable,
} from "native-base";

const TimerMusicScreen = ({
  isOpen,
  onClose,
  onSelectDuration,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelectDuration: (duration: number) => void;
}) => {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);

  const hourScrollRef = useRef(null);
  const minuteScrollRef = useRef(null);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const boxHeight = 50;

  const handleSelectHourOnScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / boxHeight);
    setSelectedHours(hours[Math.max(0, Math.min(index, hours.length - 1))]);
  };

  const handleSelectMinuteOnScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / boxHeight);
    setSelectedMinutes(
      minutes[Math.max(0, Math.min(index, minutes.length - 1))]
    );
  };

  const handleSelectDuration = () => {
    onSelectDuration(selectedHours * 60 + selectedMinutes);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Select Duration</Modal.Header>
        <Modal.Body>
          <HStack space={6} justifyContent="center">
            <VStack>
              <Text fontSize="md" bold>
                Hours
              </Text>
              <ScrollView
                ref={hourScrollRef}
                height={50}
                onMomentumScrollEnd={handleSelectHourOnScroll}
              >
                {hours.map((hour) => (
                  <Box key={hour} p={2} height={50} justifyContent="center">
                    <Text textAlign="center">{hour}</Text>
                  </Box>
                ))}
              </ScrollView>
            </VStack>
            <VStack>
              <Text fontSize="md" bold>
                Minutes
              </Text>
              <ScrollView
                ref={minuteScrollRef}
                height={50}
                onMomentumScrollEnd={handleSelectMinuteOnScroll}
              >
                {minutes.map((minute) => (
                  <Box key={minute} p={2} height={50} justifyContent="center">
                    <Text textAlign="center">{minute}</Text>
                  </Box>
                ))}
              </ScrollView>
            </VStack>
          </HStack>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="solid"
            colorScheme="primary"
            onPress={handleSelectDuration}
          >
            Set Timer
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default TimerMusicScreen;
