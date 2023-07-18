import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Picture } from "../../global/styles";
import {
  BottonBarContainer,
  Divider,
  Icon,
  IconAntd,
  IconBtn,
  SubView,
  SubViewConfig,
  SubViewCuidadus,
} from "./styles";
import CuidadusAzul from "../../../assets/IconCuidadusAzul.png";
import Cuidadus from "../../../assets/IconCuidadus.png";

interface ComponentProps {
  screen: "Tematica" | "Config" | "Cuidadus";
}

export function BottonBar({ screen }: ComponentProps) {
  const navigation = useNavigation();
  const img = screen === "Cuidadus" ? CuidadusAzul : Cuidadus;

  return (
    <BottonBarContainer>
      <IconBtn onPress={() => navigation.navigate("PerguntaTematica")}>
        <IconAntd name="chat-question-outline" screen={screen} />
        <SubView screen={screen} />
      </IconBtn>
      <Divider />
      <IconBtn onPress={() => navigation.navigate("Sobre")}>
        <Picture source={img} />
        <SubViewCuidadus screen={screen} />
      </IconBtn>
      <Divider />
      <IconBtn onPress={() => navigation.navigate("Configurações")}>
        <Icon name="settings-outline" screen={screen} />
        <SubViewConfig screen={screen} />
      </IconBtn>
    </BottonBarContainer>
  );
}
