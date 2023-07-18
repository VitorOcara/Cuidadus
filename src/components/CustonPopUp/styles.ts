import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../global/theme";

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;

export const Overlay = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* width: ${widthScreen}; */
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
export const VoidPopUp = styled.View`
justify-content: center;
width: 100%;
`;

export const PopUpBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PopUpBoxText = styled.View`
    width: 100%;
  flex-direction: row;
`;
export const PopupContainer = styled.View`
  width: 100%;
  min-height: ${ms(200)}px;
    align-items: center;
  padding: ${ms(20)}px ${ms(20)}px ${ms(50)}px ${ms(20)}px;
`;

export const Message = styled.Text`
  margin: ${ms(5)}px;
  font-size: ${ms(18)}px;
`;
export const MessageCorrecao = styled.Text`
  margin: ${ms(5)}px;
  font-size: ${ms(15)}px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const Icon = styled(Ionicons)`
  font-size: ${ms(35)}px;
`;

export const BtnNext = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: ${ms(10)}px;
  height: ${ms(42)}px;
  width: ${ms(200)}px;
  margin: ${ms(20)}px;
`;
