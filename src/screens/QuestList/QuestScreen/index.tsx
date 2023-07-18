import React, { useState } from "react";
import { Background, Container } from "../../../global/styles";
import Img from "../../../../assets/Sobre.png";
import {
  BtnConfirm,
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
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

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

  const [selectBtn, setSelectBtn] = useState("");




  return (
    <Container>
      <Header background="Gray" icons={true} />
      <Background source={Img}>
        <Content>
          <ContentBox>
            <ContentText>
              <ContentDesc style={{ fontFamily: "Inter_700Bold" }}>
                {Quest.title}
              </ContentDesc>
              <ContentDesc style={{ fontFamily: "Inter_400Regular" }}>{Quest.subTitle}</ContentDesc>
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

          <BtnConfirm onPress={() => { 
             if (selectBtn === Quest.gabarito) {
              console.log('Resposta correta!');
            }else {
              console.log('Resposta incorreta!');
            }
          }}>
            <BtnText>Confirmar</BtnText>
          </BtnConfirm>
        </Content>
      </Background>
    </Container>
  );
};

export default QuestScreen;
