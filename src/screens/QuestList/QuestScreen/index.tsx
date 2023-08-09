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
import { RouteProp, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import Header from "../../../components/Header";
import theme from "../../../global/theme";
import CustomPopup from "../../../components/CustonPopUp";
import { useAppContext } from "../../ConfigScreen/VolumeContext";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const navigation = useNavigation();
  const { sfx, setSfx } = useAppContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const soundObject = new Audio.Sound();
  const [selectBtn, setSelectBtn] = useState("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(() => {
    if (!isLoaded) {
      loadData();
      console.log(sfx);
      setIsLoaded(true);
    }
  });

  const loadData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("userData");
      if (userDataString !== null) {
        const userData = JSON.parse(userDataString);
        setSfx(userData.sfx);
      }
    } catch (error) {
      console.log("Erro ao recuperar dados:", error);
    }
  };
  console.log(sfx);

  const playAcerto = async () => {
    try {
      if (!isPlaying) {
        await soundObject.loadAsync(require("../../../../assets/acerto.mp3"));
        await soundObject.setVolumeAsync(sfx);
        await soundObject.playAsync();
        setIsPlaying(true);
        console.log("acertou");
      }
    } catch (error) {
      console.log("Erro ao reproduzir o áudio:", error);
    }
    setIsPlaying(false);
  };
  const playErro = async () => {
    try {
      if (!isPlaying) {
        await soundObject.loadAsync(require("../../../../assets/erro.mp3"));
        await soundObject.setVolumeAsync(sfx);
        await soundObject.playAsync();
        setIsPlaying(true);
        console.log("errou");
      }
    } catch (error) {
      console.log("Erro ao reproduzir o áudio:", error);
    }
    setIsPlaying(false);
  };
  const handlePress = async () => {
    if (selectBtn === Quest.gabarito) {
      await playAcerto();
    } else {
      await playErro();
    }
    setShowPopup(true); // Ação original definida no onPress
  };
  const onClose = () => {
    setShowPopup(false);
    setIsLoaded(false);
    navigation.navigate("QuestList");
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
          onClose={onClose}
          nextButton={false}
        />
      </Background>
    </Container>
  );
};

export default QuestScreen;
