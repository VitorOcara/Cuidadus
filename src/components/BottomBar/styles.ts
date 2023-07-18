import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../global/theme";

const widthScreen = Dimensions.get("screen").width;

export const BottonBarContainer = styled.View`
  height: ${ms(63)}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: ${ms(10)}px;

  border: 1px solid ${theme.colors.dark_light};
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
`;

export const Divider = styled.View`
  width: 1px;
  background-color: ${theme.colors.dark_light};
  height: ${ms(50)}px;
`;

export const SubViewConfig = styled.View<{
  screen: "Tematica" | "Config" | "Cuidadus";
}>`
  margin-top: ${ms(8)}px;
  height: 2px;
  background-color: ${({ screen }) =>
    screen === "Config" ? theme.colors.azul_2 : theme.colors.dark_gray};
  width: ${ms(50)}px;
`;
export const SubViewCuidadus = styled.View<{
  screen: "Tematica" | "Config" | "Cuidadus";
}>`
  margin-top: ${ms(8)}px;
  height: 2px;
  background-color: ${({ screen }) =>
    screen === "Cuidadus" ? theme.colors.azul_2 : theme.colors.dark_gray};
  width: ${ms(50)}px;
`;


export const SubView = styled.View<{
  screen: "Tematica" | "Config" | "Cuidadus";
}>`
  margin-top: ${ms(8)}px;
  height: 2px;
  background-color: ${({ screen }) =>
    screen === "Tematica" ? theme.colors.azul_2 : theme.colors.dark_gray};
  width: ${ms(50)}px;
`;
export const Icon = styled(Ionicons)<{
  screen: "Tematica" | "Config" | "Cuidadus";
}>`
  color: ${({ screen }) =>
    screen === "Config" ? theme.colors.azul_2 : theme.colors.dark_gray};
  font-size: ${ms(30)}px;
`;
export const IconAntd = styled(MaterialCommunityIcons)<{
  screen: "Tematica" | "Config" | "Cuidadus";
}>`
  color: ${({ screen }) =>
    screen === "Tematica" ? theme.colors.azul_2 : theme.colors.dark_gray};
  font-size: ${ms(30)}px;
`;

export const IconBtn = styled.TouchableOpacity`
  width: ${widthScreen / 3};
  justify-content: center;
  align-items: center;
`;
