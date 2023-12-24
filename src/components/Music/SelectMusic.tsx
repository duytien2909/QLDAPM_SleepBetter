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
  timerFinished,
}: {
  isOpen: boolean;
  onClose: () => void;
  timerFinished: boolean;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [music, setMusic] = useState(musicList);
  const [playingMusic, setPlayingMusic] = useState<{
    id: string;
    title: string;
    uri: string;
    imageUri: object;
  } | null>(null);

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
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
    setIsMusicPlaying(true);
  };

  const play = async () => {
    if (sound) {
      await sound.playAsync();
      setIsMusicPlaying(true);
    }
  };

  const pause = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsMusicPlaying(false);
    }
  };

  const stopMusic = async () => {
    if (sound) {
      await sound.stopAsync();
    }
    setPlayingMusic(null);
    setIsMusicPlaying(false);
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
        bg: "#04020d",
        opacity: 0.6,
      }}
    >
      <Modal.Content maxWidth="400px" maxHeight="full" bg="transparent">
        <Modal.CloseButton marginTop={5} />

        <Modal.Body>
          <VStack space={4} marginTop={12} paddingX={3}>
            <Input
              placeholder="Search music"
              width="100%"
              borderRadius="25"
              bg="#727272"
              py="3"
              px="1"
              fontSize="14"
              InputLeftElement={
                <Icon
                  as={<Feather name="search" />}
                  size="md"
                  m="2"
                  color="#fff"
                />
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
                      <Text color="#fff" bold>
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
          <Box p={5} bg="#304FFE" rounded="md" shadow={2}>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              space={3}
            >
              <HStack alignItems="center" space={3}>
                <Image
                  source={playingMusic.imageUri}
                  alt={playingMusic.title}
                  size="md"
                  borderRadius="full"
                />
                <VStack>
                  <Text color="white" bold fontSize="lg">
                    {playingMusic.title}
                  </Text>
                  <Text color="gray.200" fontSize="sm">
                    Artist Name
                  </Text>
                </VStack>
              </HStack>
              <HStack space={2}>
                <Button
                  onPress={isMusicPlaying ? pause : play}
                  variant="unstyled"
                >
                  <Feather
                    name={isMusicPlaying ? "pause-circle" : "play-circle"}
                    size={30}
                    color="white"
                  />
                </Button>
                <Button onPress={stopMusic} variant="unstyled">
                  <AntDesign name="closecircle" size={24} color="white" />
                </Button>
              </HStack>
            </HStack>
          </Box>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default SelectMusicScreen;
