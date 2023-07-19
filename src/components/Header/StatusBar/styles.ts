import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import theme from "../../../global/theme";
import { Dimensions } from "react-native";

const widthScreen = Dimensions.get("screen").width;

export const Container = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.dark_gray};
  border-radius: ${ms(20)}px;
  height: ${ms(20)}px;
  text-align: center;
`;

export const Partition = styled.View<{
  explored: boolean;
  first?: boolean;
  last?: boolean;
}>`
  width: ${ms(25)}px;
  background-color: ${({ explored }) => (explored ? "#028B4C" : "transparent")};
  align-items: center;
  ${({ first, last }) =>
    first
      ? `border-top-left-radius: ${ms(20)}px; border-bottom-left-radius: ${ms(
          20
        )}px;`
      : ""}
  ${({ last, first }) =>
    last
      ? `border-top-right-radius: ${ms(20)}px; border-bottom-right-radius: ${ms(
          20
        )}px;`
      : ""}
`;

export const TextBar = styled.Text`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  border-radius: ${ms(20)}px;
`;

export const BarContainer = styled.View`
  flex-direction: row;
`;
