import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import theme from "../../global/theme";

export const BoxView = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const TextBtn = styled.Text`
  font-size: ${ms(15)}px;
  color: ${theme.colors.white};
`;

export const Content = styled.View` 
  justify-content: center;
  align-items: center;
  margin-bottom: ${ms(40)}px;
`;

export const BTTT = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: ${ms(10)}px;
  background-color: ${theme.colors.azul_2};
  height: ${ms(42)}px;
  width: ${ms(200)}px;

  margin-bottom: ${ms(200)}px;
`;

