import { Button, Center, HStack, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, ImageBackground } from "react-native";
import BackgroundUrl from "../../assets/background.png";
import dayjs from "dayjs";
import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { filterData } from "../services/AudioVisualizer";
import { Buffer } from "buffer";
import _ from "lodash";
import { LineChart } from "react-native-chart-kit";

const SleepReportScreen = () => {
  const navigation = useNavigation();
  const {
    params: { recordUri, startTime, endTime },
  } = useRoute<any>();

  const [recordBuffer, setRecordBuffer] = useState<ArrayBuffer>();
  const [recordInfo, setRecordInfo] = useState<number[]>();

  useEffect(() => {
    const fetchRecord = async () => {
      const response = await fetch(recordUri);
      const responseBuffer = await response.arrayBuffer();
      setRecordBuffer(responseBuffer);
      const audioBuffer = Buffer.from(responseBuffer);
      const exportedData = filterData(audioBuffer as any);
      setRecordInfo(exportedData);
    };

    fetchRecord();
  }, []);

  return (
    <ImageBackground
      source={BackgroundUrl}
      style={{ flex: 1, display: "flex", justifyContent: "center" }}
    >
      <VStack space={3}>
        <VStack flex={1}>
          <Center>
            <Text fontSize={45} fontWeight={700} color={"white"}>
              Sleep Report
            </Text>
            <Text fontSize={16} fontWeight={600} color={"white"}>
              Quality report of your sleep
            </Text>
          </Center>
        </VStack>
        <VStack p={5} bg={"white"} roundedTopRight={60} space={2.5}>
          <HStack
            alignItems={"center"}
            w={"full"}
            justifyContent={"space-evenly"}
          >
            <VStack>
              <Text fontSize={64} fontWeight={700}>
                80
              </Text>
              <Text fontSize={20} fontWeight={700}>
                Sleep Score
              </Text>
            </VStack>
            <Text opacity={0.5} fontWeight={700}>
              {dayjs().format("DD/MM/YYYY")}
            </Text>
          </HStack>
          {!!recordInfo && (
            <LineChart
              data={{
                labels: recordInfo.map((_, index) => "") || [],
                datasets: [
                  {
                    data: recordInfo,
                  },
                ],
              }}
              width={Dimensions.get("window").width - 40} // from react-native
              height={220}
              yAxisSuffix="Db"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(143, 111, 245, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(143, 111, 245, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "1",
                  strokeWidth: "1",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          )}
          {/* <VStack bg={"#C6C3DC"} py={2.5} alignItems={"center"}>
            <Text>How do you feel?</Text>
            <Text>Do you have nightmares?</Text>
            <HStack space={8}>
              <Text>Yes</Text>
              <Text>No</Text>
            </HStack>
          </VStack> */}
          <VStack w={"full"} maxW={"none"} space={5}>
            <HStack w={"full"}>
              <HStack flex={1} space={1}>
                <Text fontWeight={600}>Sleep Time</Text>
                <Text color={"#3828B7"} fontWeight={600}>
                  {dayjs(startTime * 1000).format("HH : mm")}
                </Text>
              </HStack>
              <HStack flex={1} space={1}>
                <Text fontWeight={600}>Wake-up time</Text>
                <Text color={"#3828B7"} fontWeight={600}>
                  {dayjs(endTime * 1000).format("HH : mm")}
                </Text>
              </HStack>
            </HStack>
            <HStack w={"full"}>
              <HStack flex={1} space={1}>
                <Text fontWeight={600}>Sleep duration</Text>
                <Text color={"#3828B7"} fontWeight={600}>
                  {dayjs(endTime).diff(dayjs(startTime), "hours")} h
                </Text>
              </HStack>
              <HStack flex={1} space={1}>
                <Text fontWeight={600}>Average Db</Text>
                <Text color={"#3828B7"} fontWeight={600}>
                  {_.round(_.mean(recordInfo), 2)}
                </Text>
              </HStack>
            </HStack>
            <HStack w={"full"}>
              <HStack flex={1} space={1}>
                <Text fontWeight={600}>Highest Db</Text>
                <Text color={"#3828B7"} fontWeight={600}>
                  {_.round(_.max(recordInfo) || 0, 2)}
                </Text>
              </HStack>
              <HStack flex={1} space={1}>
                <Text fontWeight={600}>Lowest Db</Text>
                <Text color={"#3828B7"} fontWeight={600}>
                  {_.round(_.min(recordInfo) || 0, 2)}
                </Text>
              </HStack>
            </HStack>
          </VStack>
        </VStack>
        <Button
          onPress={() => {
            navigation.dispatch(StackActions.popToTop());
            navigation.navigate("Home" as never);
          }}
          mx={6}
          mt={7}
        >
          <Text color={"white"} fontWeight={700} fontSize={18}>
            SKIP TO MAIN SCREEN
          </Text>
        </Button>
      </VStack>
    </ImageBackground>
  );
};

export default SleepReportScreen;
