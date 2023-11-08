import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Rect, Text as SvgText } from "react-native-svg";

const TabContent = () => {
  const fakePercentageData = [80, 60, 45, 75, 90, 70, 85];
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const barWidth = 40;
  const barHeight = (percentage) => percentage * 3;
  const barSpacing = 10;

  const bars = fakePercentageData.map((percentage, index) => {
    const x = index * (barWidth + barSpacing) + barWidth / 2 - barWidth / 2;
    const y = 300 - barHeight(percentage);

    return (
      <Rect
        key={index}
        x={x}
        y={y}
        width={barWidth}
        height={barHeight(percentage)}
        fill="blue"
      />
    );
  });

  const xAxisLabels = weekdays.map((weekday, index) => {
    const x = index * (barWidth + barSpacing) + barWidth / 2;
    const y = 300 + 10;

    return (
      <SvgText
        key={index}
        x={x}
        y={y}
        fontSize="9"
        fill="black"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        {weekday}
      </SvgText>
    );
  });

  const percentageLabels = fakePercentageData.map((percentage, index) => {
    const x = index * (barWidth + barSpacing) + barWidth / 2;
    const y = 300 - barHeight(percentage) - 10;

    return (
      <SvgText
        key={index}
        x={x}
        y={y}
        fontSize="12"
        fill="black"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        {percentage}%
      </SvgText>
    );
  });

  return (
    <View style={styles.tabContent}>
      <Svg width="100%" height="320">
        {bars}
        {xAxisLabels}
        {percentageLabels}
      </Svg>
      <View style={styles.analyst}>
        <View style={styles.textBox}>
          <View style={styles.borderContainer}>
            <Text style={styles.percentageText}>15%</Text>
          </View>
          <Text style={styles.statusText}>Wake up</Text>
        </View>
        <View style={styles.textBox}>
          <View style={styles.borderContainer}>
            <Text style={styles.percentageText}>70%</Text>
          </View>
          <Text style={styles.statusText}>Shallow sleep</Text>
        </View>
        <View style={styles.textBox}>
          <View style={styles.borderContainer}>
            <Text style={styles.percentageText}>15%</Text>
          </View>
          <Text style={styles.statusText}>Deep sleep</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContent: {
    width: "100%",
    height: 400,
  },

  analyst: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  borderContainer: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    marginRight: 5,
  },
  percentageText: {
    fontSize: 12,
  },
  statusText: {
    fontSize: 12,
  },
});

export default TabContent;
