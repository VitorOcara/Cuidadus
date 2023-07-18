import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import theme from "../../global/theme";

export const Content = styled.View`
  flex: 1;

  justify-content: space-around;
  align-items: center;
  padding-top: ${ms(40)}px;
`;
export const BoxContent = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BoxSlider = styled.View`
  justify-content: center;
  align-items: center;
`;

export const BtnInit = styled.TouchableOpacity`
align-items: center;
  justify-content: center;
  border-radius: ${ms(10)}px;
  background-color: ${theme.colors.azul_2};
  height: ${ms(42)}px;
  width: ${ms(200)}px;
  margin-bottom: ${ms(100)}px;
`

export const TextBtn = styled.Text`
  font-size: ${ms(15)}px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.medium};
`;