import Slider from "@react-native-community/slider"; // Importe corretamente o Slider
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import theme from "../../global/theme";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { ms } from "react-native-size-matters";

export const widthScreen = Dimensions.get("screen").width;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  padding-bottom: ${ms(40)}px;
`;
export const ContentBox = styled.View`
  width: 100%;
`;

export const ElementBox = styled.View`
  flex-direction: row;
  padding: 0 0 ${ms(20)}px 0;
`;

export const SliderContainer = styled.View`
  width: ${widthScreen / 1.5};
  margin-top: ${ms(10)}px;
`;

export const StyledSlider = styled(Slider).attrs({
  minimumTrackTintColor: theme.colors.azul_2,
  maximumTrackTintColor: "#000000",
  thumbTintColor: theme.colors.azul_2,
})``;

export const TextBox = styled.Text`
  font-family: ${theme.fonts.comfortaa_Bold};
  font-size: ${ms(15)}px;
`;

export const Icon = styled(AntDesign)`
  font-size: ${ms(30)}px;
  color: ${theme.colors.azul_2};
  margin: 0 ${ms(5)}px;
`;

export const Ionicon = styled(Ionicons)`
  font-size: ${ms(30)}px;
  color: ${theme.colors.azul_2};
  margin: 0 ${ms(5)}px;
`;

export const ProfileImage = styled.View`
  height: ${ms(80)}px;
  width: ${ms(80)}px;
  border-radius: ${ms(40)}px;
  border: ${theme.colors.azul_2} solid ${ms(2)}px;
`;

export const ProfileImageView = styled.View`
  justify-content: center;
  align-items: center;
`;
