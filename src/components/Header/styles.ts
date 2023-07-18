import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import theme from "../../global/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export const HeaderContent = styled.View<{
  background: "Blue" | "Gray";
}>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  height: ${ms(80)}px;
  padding: 0 ${ms(20)}px;
  justify-content: space-between;
  background-color: ${({ background }) =>
    background === "Blue" ? theme.colors.azul_2 : "#FFFCF9"};
  border-bottom-width: 0.8px;
`;
export const HeaderButton = styled.TouchableOpacity``;

export const Icon = styled(Ionicons)<{ background: "Blue" | "Gray" }>`
  color: ${({ background }) =>
    background === "Blue" ? theme.colors.white : theme.colors.dark_light};
  font-size: ${ms(30)}px;
`;
