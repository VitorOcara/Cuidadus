import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import theme from "./theme";

export const Container = styled.View`
  margin: 0;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextBody = styled.Text`
  font-size: 20px;
  color: ${theme.colors.azul_2};
`;

export const Background = styled.ImageBackground`
  flex: 1;

  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.Button`
  justify-content: center;
  background-color: ${theme.colors.azul_3};
  height: 42px;
  width: 200px;
`;
export const Title = styled.Text`
  font-size: ${ms(19)}px;
  color: ${theme.colors.azul_2};
  font-family: ${theme.fonts.medium};
  letter-spacing: ${ms(1)}px;
  margin-top: ${ms(20)}px;
`;

export const SubTitle = styled.Text`
  font-size: ${ms(16)}px;
  color: ${theme.colors.azul_2};
  font-family: ${theme.fonts.medium};
`;

export const Picture = styled.Image``;

export const TextBox = styled.TextInput`
  text-align: center;
  background-color: ${theme.colors.ligth_gray};
  height: ${ms(40)}px;
  width: ${ms(300)}px;
  border-radius: ${ms(10)}px;
  font-size: ${ms(15)}px;
  color: black;
  border: 2px solid ${theme.colors.dark_light};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
`;
