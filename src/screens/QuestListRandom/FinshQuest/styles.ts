import styled from "styled-components/native";
import theme from "../../../global/theme";
import { ms } from "react-native-size-matters";

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentBox = styled.View`
  justify-content: center;
  align-items: center;
`;
export const ViewTextBox = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const TextBox = styled.Text`
  color: ${theme.colors.azul_2};
  font-size: ${ms(14)}px;
`;


export const BtnSkip = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: ${ms(10)}px;
  background-color: ${theme.colors.azul_2};
  height: ${ms(30)}px;
  width: ${ms(100)}px;
  margin-top: ${ms(20)}px;
`;
