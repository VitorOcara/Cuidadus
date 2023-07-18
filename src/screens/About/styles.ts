import { ms } from "react-native-size-matters";
import styled from "styled-components/native";

import theme from "../../global/theme";

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;
export const ContentBox = styled.ScrollView`
  padding: ${ms(20)}px;
`;

export const TitleText = styled.Text`
  font-size: ${ms(18)}px;
  letter-spacing: ${ms(0.8)}px;
  margin-top: ${ms(20)}px;
  color: ${theme.colors.dark};
`;
export const ContentText = styled.Text`
  color: ${theme.colors.dark_light};
  text-align: justify;
  font-size: ${ms(14)}px;
  font-family: ${theme.fonts.medium};
  margin-top: ${ms(10)}px;
`;
