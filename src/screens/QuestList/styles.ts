import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../global/theme";

export const Content = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const SeachView = styled.View`
  width: 100%;
  margin-top: 5px;
  height: ${ms(80)}px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 0.8px;
  border-top-width: 0px;
`;
export const BttCard  = styled.TouchableOpacity`
`;

export const SeachBox = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1.5px solid #b5c6d0;
  border-radius: ${ms(42)}px;
  width: 90%;
  height: ${ms(42)}px;
`;
export const SeachInput = styled.TextInput`
  font-size: ${ms(18)}px;
  width: 75%;
  height: ${ms(42)}px;
`;


export const Icon = styled(Ionicons)`
  padding: 0 ${ms(10)}px 0 ${ms(20)}px;
  font-size: ${ms(30)}px;
  color: ${theme.colors.azul_2};
`;
