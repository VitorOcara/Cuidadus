import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import theme from "../../../global/theme";
import { Card } from "react-native-shadow-cards";

const widthScreen = Dimensions.get("screen").width;

export const Content = styled.View`
  justify-content: space-between;
  align-items: center;
`;


export const ContentBox = styled(Card)`
  align-items: center;
  background-color: #effbfa;
  height: ${ms(500)}px;
  width: ${widthScreen / 1.2};
  border-radius: ${ms(20)}px;
`;

export const ContentText = styled.View`
  margin: ${ms(10)}px 0;
  justify-content: center;
  align-items: center;
  padding: ${ms(10)}px ${ms(20)}px ;
`;

export const ContentItem = styled.TouchableOpacity`
  padding: ${ms(5)}px;
  border-radius: ${ms(10)}px;
  justify-content: center;
  align-items: center;
  width: ${ms(300)}px;
  height: ${ms(80)}px;
  margin: ${ms(10)}px;
`;


export const ItemText = styled.Text`
  color: white;
  font-size: ${ms(14)}px;
`;

export const ContentDesc = styled.Text`
  margin: ${ms(10)}px 0;
  font-size: ${ms(12)}px;
`;

export const BtnConfirm = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: ${ms(10)}px;
  background-color: ${theme.colors.azul_2};
  height: ${ms(42)}px;
  width: ${ms(200)}px;
  margin-top: ${ms(20)}px;
`;
export const BtnText = styled.Text`
  color: white;
  font-size: ${ms(14)}px;
`;
