import { useNavigation } from "@react-navigation/native";
import { Container, Pressable, Text } from "native-base";
import React from "react";
import DoubleChevron from "../../../assets/double-chevron-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

type BackButtonProps = {
  isCloseIcon?: boolean;
};

const BackButton = ({ isCloseIcon }: BackButtonProps) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      {isCloseIcon ? (
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          w={50}
          h={50}
          background={"white"}
          rounded={"full"}
        >
          <FontAwesomeIcon icon={faClose} size={27} />
        </Container>
      ) : (
        <>
          {/* <DoubleChevron height={36} width={43} /> */}
          <Text fontSize={20} fontWeight={500} color={"white"}>
            Back
          </Text>
        </>
      )}
    </Pressable>
  );
};

export default BackButton;
