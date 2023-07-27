import React, { useEffect, useState } from "react";
import { Background, Container } from "../../../global/styles";
import Img from "../../../../assets/Sobre.png";
import {
  BtnConfirm,
  BtnConfirm2,
  BtnText,
  Content,
  ContentBox,
  ContentDesc,
  ContentItem,
  ContentText,
  ItemText,
} from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import Header from "../../../components/Header";
import theme from "../../../global/theme";
import CustomPopup from "../../../components/CustonPopUp";
import { useAppContext } from "../../ConfigScreen/VolumeContext";
import { Audio } from "expo-av";

export type ParamList = {
  Object: {
    Quest: {
      title: string;
      subTitle: string;
      item_A: string;
      item_B: string;
      item_C: string;
      gabarito: string;
      correcao: string;
    };
  };
};

const QuestScreen = () => {
  const {
    params: { Quest },
  } = useRoute<RouteProp<ParamList, "Object">>();

  const { volume, setVolume, sfx, setSfx } = useAppContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const soundObject = new Audio.Sound();
  const [selectBtn, setSelectBtn] = useState("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const setInitialVolume = async () => {
      await soundObject.setVolumeAsync(sfx);
    };
    setInitialVolume();
  }, []);

  const playAcerto = async () => {
    try {
      if (!isPlaying) {
        await soundObject.loadAsync(require("../../../../assets/acerto.mp3"));
        await soundObject.playAsync();
        setIsPlaying(true);
        console.log("acertou");
      }
    } catch (error) {
      console.log("Erro ao reproduzir o áudio:", error);
    }
  };
  const playErro = async () => {
    try {
      if (!isPlaying) {
        await soundObject.loadAsync(require("../../../../assets/erro.mp3"));
        await soundObject.playAsync();
        setIsPlaying(true);
        console.log("errou");
      }
    } catch (error) {
      console.log("Erro ao reproduzir o áudio:", error);
    }
  };
  const handlePress = async () => {
    if(selectBtn === Quest.gabarito){
      await playAcerto();
      console.log("acertou");
    }else{
      await playErro();
      console.log("errou");
    }
    setShowPopup(true); // Ação original definida no onPress
  };

  return (
    <Container>
      <Header statusbar={false} background="Gray" icons={true} />
      <Background source={Img}>
        <Content>
          <ContentBox>
            <ContentText>
              <ContentDesc style={{ fontFamily: "Inter_700Bold" }}>
                {Quest.title}
              </ContentDesc>
              <ContentDesc style={{ fontFamily: "Inter_400Regular" }}>
                {Quest.subTitle}
              </ContentDesc>
            </ContentText>
            <ContentItem
              onPress={() => setSelectBtn("A")}
              style={{
                backgroundColor:
                  selectBtn === "A" ? theme.colors.azul_2 : "#0c74b0",
              }}
            >
              <ItemText>{Quest.item_A}</ItemText>
            </ContentItem>
            <ContentItem
              onPress={() => setSelectBtn("B")}
              style={{
                backgroundColor:
                  selectBtn === "B" ? theme.colors.azul_2 : "#0c74b0",
              }}
            >
              <ItemText>{Quest.item_B}</ItemText>
            </ContentItem>
            <ContentItem
              onPress={() => setSelectBtn("C")}
              style={{
                backgroundColor:
                  selectBtn === "C" ? theme.colors.azul_2 : "#0c74b0",
              }}
            >
              <ItemText>{Quest.item_C}</ItemText>
            </ContentItem>
          </ContentBox>

          <BtnConfirm onPress={handlePress}>
              <BtnText>Confirmar</BtnText>
          </BtnConfirm>
        </Content>
        <CustomPopup
          visible={showPopup}
          type={selectBtn !== Quest.gabarito ? "error" : "success"}
          message={
            selectBtn !== Quest.gabarito
              ? "Que pena você errou :("
              : "Muito bem! Você acertou :)"
          }
          correcao={Quest.correcao}
          onClose={() => setShowPopup(false)}
          nextButton={false}
        />
      </Background>
    </Container>
  );
};

export default QuestScreen;
