import React, { useEffect, useState } from "react";
import {
  Modal,
  FlatList,
  Input,
  Icon,
  Button,
  Text,
  Image,
  VStack,
  Box,
  HStack,
  ScrollView,
} from "native-base";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import dayjs from "dayjs";

const musicList = [
  {
    id: "1",
    title: "Calm Night",
    uri: require("../../../assets/music/calm_night.mp3"),
    imageUri: require("../../../assets/musicImage/calm_night.jpg"),
  },
  {
    id: "2",
    title: "Aurora",
    uri: require("../../../assets/music/aurora.mp3"),
    imageUri: require("../../../assets/musicImage/aurora.jpg"),
  },
  {
    id: "3",
    title: "Don't Forget Me",
    uri: require("../../../assets/music/dont_forget_me.mp3"),
    imageUri: require("../../../assets/musicImage/dont_forget_me.jpg"),
  },
  {
    id: "4",
    title: "Evening Improvisation",
    uri: require("../../../assets/music/evening_improvisation.mp3"),
    imageUri: require("../../../assets/musicImage/evening_improvisation.jpg"),
  },
  {
    id: "5",
    title: "Hymn To The Dawn",
    uri: require("../../../assets/music/hymn_to_the_dawn.mp3"),
    imageUri: require("../../../assets/musicImage/hymn_to_the_dawn.jpg"),
  },
  {
    id: "6",
    title: "Mantron",
    uri: require("../../../assets/music/mantron.mp3"),
    imageUri: require("../../../assets/musicImage/mantron.jpg"),
  },
  {
    id: "7",
    title: "Otjanbird",
    uri: require("../../../assets/music/otjanbird.mp3"),
    imageUri: require("../../../assets/musicImage/otjanbird.jpg"),
  },
  {
    id: "8",
    title: "Reverie",
    uri: require("../../../assets/music/reverie.mp3"),
    imageUri: require("../../../assets/musicImage/reverie.jpg"),
  },
  {
    id: "9",
    title: "Sunset Landscape",
    uri: require("../../../assets/music/sunset_landscape.mp3"),
    imageUri: require("../../../assets/musicImage/sunset_landscape.jpg"),
  },
];

const SelectMusicScreen = ({
  isOpen,
  onClose,
  shouldStartTimer,
  startTimer,
  timerFinished,
}: {
  isOpen: boolean;
  onClose: () => void;
  shouldStartTimer: boolean;
  startTimer: () => void;
  timerFinished: boolean;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [music, setMusic] = useState(musicList);
  const [playingMusic, setPlayingMusic] = useState<{
    id: string;
    title: string;
    uri: string;
    imageUri: string;
  } | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filteredMusic = musicList.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setMusic(filteredMusic);
  };

  const playMusic = async (item: any) => {
    console.log("Playing Music:", item.uri);
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }
    const { sound: newSound } = await Audio.Sound.createAsync(item.uri);
    setSound(newSound);
    await newSound.playAsync();
    setPlayingMusic(item);
    if (shouldStartTimer) {
      startTimer();
    }
  };

  const stopMusic = async () => {
    if (sound) {
      await sound.stopAsync();
    }
    setPlayingMusic(null);
  };

  useEffect(() => {
    if (timerFinished) {
      stopMusic();
    }
  }, [timerFinished]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      size="full"
      _backdrop={{
        //   _dark: { bg: "coolGray.800", opacity: 0.8 },
        _light: { bg: "warmGray.50", opacity: 0.4 },
      }}
    >
      <Modal.Content
        maxWidth="400px"
        maxHeight="full"
        bg="transparent"
        _dark={{ bg: "coolGray.900" }}
        _light={{ bg: "warmGray.50" }}
      >
        <Modal.CloseButton />
        <Modal.Header
          _dark={{ bg: "coolGray.900" }}
          _light={{ bg: "warmGray.50" }}
        >
          <Text>Select Music</Text>
        </Modal.Header>
        <Modal.Body
          _dark={{ bg: "coolGray.900" }}
          _light={{ bg: "warmGray.50" }}
        >
          <VStack space={4}>
            <Input
              placeholder="Search music"
              width="100%"
              borderRadius="4"
              py="3"
              px="1"
              fontSize="14"
              InputLeftElement={
                <Icon as={<Feather name="search" />} size="md" m="2" />
              }
              onChangeText={handleSearch}
              value={searchQuery}
              autoCapitalize="none"
            />
            <ScrollView>
              <FlatList
                scrollEnabled={false}
                data={music}
                renderItem={({ item }) => (
                  <Button
                    onPress={() => playMusic(item)}
                    variant="unstyled"
                    justifyContent="flex-start"
                  >
                    <HStack alignItems="center" space={3}>
                      <Image
                        source={item.imageUri}
                        alt={item.title}
                        size="sm"
                      />
                      <Text color="coolGray.800" bold>
                        {item.title}
                      </Text>
                    </HStack>
                  </Button>
                )}
                keyExtractor={(item) => item.id}
              />
            </ScrollView>
          </VStack>
        </Modal.Body>
        {playingMusic && (
          <Box p={5} bg="primary.500">
            <HStack justifyContent="space-between" alignItems="center">
              <Text color="white" fontSize="md">
                Now Playing: {playingMusic.title}
              </Text>
              <Button onPress={stopMusic} variant="unstyled">
                <AntDesign name="closecircle" size={24} color="white" />
              </Button>
            </HStack>
          </Box>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default SelectMusicScreen;
