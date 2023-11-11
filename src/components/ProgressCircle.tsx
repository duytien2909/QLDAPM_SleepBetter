import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle, Text as SvgText } from "react-native-svg";

interface ProgressCircleProps {
  radius: number;
  progress: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  radius,
  progress,
}) => {
  const circumference = 2 * Math.PI * (radius - 5);
  const progressStrokeDashoffset = (1 - progress / 100) * circumference;

  return (
    <View>
      <Svg height={radius * 2} width={radius * 2}>
        <Circle cx={radius} cy={radius} r={radius - 5} />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - 5}
          stroke="#fff"
          strokeWidth={5}
          strokeDasharray={circumference}
          strokeDashoffset={progressStrokeDashoffset}
          fill="#8f6ff5"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <SvgText
          x={radius}
          y={radius + 5}
          fontSize={20}
          fontWeight="bold"
          textAnchor="middle"
          fill="#fff"
        >
          {`${progress}%`}
        </SvgText>
      </Svg>
    </View>
  );
};

export default ProgressCircle;
