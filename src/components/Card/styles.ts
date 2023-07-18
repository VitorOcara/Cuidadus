import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import theme from "../../global/theme";
import { Card } from "react-native-shadow-cards";

const widthScreen = Dimensions.get("screen").width;

export const CardContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  height: ${ms(90)}px;
  border-radius: ${ms(20)}px;
  background-color: ${theme.colors.azul_3};
  
`;
export const CardContent = styled.View`
  height: ${ms(90)}px;
  width: 95%;
  background-color: #effbfa;
  border-top-right-radius: ${ms(20)}px;
  border-bottom-right-radius: ${ms(20)}px;
  justify-content: center;
  padding-left: ${ms(10)}px;
`;
export const CardTitle = styled.Text`
  font-size: ${ms(16)}px;
`;

export const CardSubtitle = styled.Text`
  font-size: ${ms(14)}px;
`;
export const Teste = styled(Card)`

  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${widthScreen / 1.2};
  height: ${ms(90)}px;
  border-radius: ${ms(22)}px;
  margin: ${ms(7)}px 20px;

`;
