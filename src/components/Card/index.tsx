import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  CardContainer,
  CardContent,
  CardSubtitle,
  CardTitle,
  Teste,
} from "./styles";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export interface CardProps {
  title: string;
  subtitle: string;
  item_A?: string;
  item_B?: string;
  item_C?: string;
  gabarito?: string;
  correcao?: string;
}

export function CardView({ title, subtitle }: CardProps) {
  const navigate = useNavigation();

  return (
    <Teste>
      <CardContainer>
        <CardContent>
          <CardTitle style={{ fontFamily: "Inter_700Bold" }}>{title}</CardTitle>
          <CardSubtitle style={{ fontFamily: "Inter_400Regular" }}>
            {subtitle.substring(0, 100)} ...
          </CardSubtitle>
        </CardContent>
      </CardContainer>
    </Teste>
  );
}
