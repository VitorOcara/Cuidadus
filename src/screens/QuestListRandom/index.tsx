import React, { useState, useEffect } from "react";

import { Background, Container } from "../../global/styles";
import Img from "../../../assets/Sobre.png";
import {
  BtnConfirm,
  BtnSkip,
  BtnText,
  Content,
  ContentBox,
  ContentDesc,
  ContentItem,
  ContentMapBox,
  ContentText,
  ItemText,
} from "./styles";
import { QuestProps, data } from "../QuestList";
import Header from "../../components/Header";
import theme from "../../global/theme";
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ParamList } from "../QuestList/QuestScreen";
import StatusProgressBar from "../../components/Header/StatusBar";
import CustomPopup from "../../components/CustonPopUp";

const QuestListRandom = ({ route }: any) => {
  const { randomItems } = route.params;
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [selectBtn, setSelectBtn] = useState("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const navigation = useNavigation();

  console.log(randomItems[currentItemIndex].title);
  const [acertos, setAcertos] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      setAcertos(0);
    }, [])
  );

  const handleNextItem = () => {
    if (currentItemIndex < randomItems.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
      setShowPopup(false);
      setSelectBtn("");
    } else {
      navigation.navigate("FinishQuest", { acertos });
    }
  };
  const onConfirm = () => {
    selectBtn === randomItems[currentItemIndex].gabarito
      ? setAcertos(acertos + 1)
      : setAcertos(acertos);
    setShowPopup(true);
  };

  const handlePreviousItem = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1);
    }
  };

  return (
    <Container>
      <Header
        background="None"
        icons={true}
        statusbar={true}
        index={currentItemIndex + 1}
      />
      <Background source={Img}>
        <ContentBox>
          <Content>
            <ContentText>
              <ContentDesc style={{ fontFamily: "Inter_700Bold" }}>
                {randomItems[currentItemIndex].title}
              </ContentDesc>
              <ContentDesc style={{ fontFamily: "Inter_400Regular" }}>
                {randomItems[currentItemIndex].subTitle}
              </ContentDesc>
            </ContentText>
            <ContentItem
              onPress={() => setSelectBtn("A")}
              style={{
                backgroundColor:
                  selectBtn === "A" ? theme.colors.azul_2 : "#0c74b0",
              }}
            >
              <ItemText>{randomItems[currentItemIndex].item_A}</ItemText>
            </ContentItem>
            <ContentItem
              onPress={() => setSelectBtn("B")}
              style={{
                backgroundColor:
                  selectBtn === "B" ? theme.colors.azul_2 : "#0c74b0",
              }}
            >
              <ItemText>{randomItems[currentItemIndex].item_B}</ItemText>
            </ContentItem>
            <ContentItem
              onPress={() => setSelectBtn("C")}
              style={{
                backgroundColor:
                  selectBtn === "C" ? theme.colors.azul_2 : "#0c74b0",
              }}
            >
              <ItemText>{randomItems[currentItemIndex].item_C}</ItemText>
            </ContentItem>
          </Content>
        </ContentBox>
        <BtnConfirm onPress={onConfirm}>
          <BtnText>Confirmar</BtnText>
        </BtnConfirm>
        <BtnSkip onPress={handleNextItem}>
          <BtnText style={{ color: "#1A42A6" }}>Pular</BtnText>
        </BtnSkip>

        <CustomPopup
          visible={showPopup}
          type={
            selectBtn !== randomItems[currentItemIndex].gabarito
              ? "error"
              : "success"
          }
          message={
            selectBtn !== randomItems[currentItemIndex].gabarito
              ? "Que pena você errou :("
              : "Muito bem! Você acertou :)"
          }
          correcao={randomItems[currentItemIndex].correcao}
          onClose={() => setShowPopup(false)}
          nextButton={true}
          onSkip={handleNextItem}
        />
      </Background>
    </Container>
  );
};

export default QuestListRandom;
