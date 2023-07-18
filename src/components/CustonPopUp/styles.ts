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
  height: 2px;
`;

export const PopUpBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PopupContainer = styled.View`
  width: 100%;
  min-height: ${ms(200)}px;

  padding: ${ms(20)}px;
`;

export const Message = styled.Text`
  margin: ${ms(5)}px;
  color: white;
  font-size: ${ms(18)}px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const CloseButtonIcon = styled(Ionicons)`
  font-size: ${ms(35)}px;
`;
