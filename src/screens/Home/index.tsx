import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";

import Img from "../../../assets/background.png";
import Img2 from "../../../assets/background2.png";
import Perfil from "../../../assets/perfil.png";
import ImgPic from "../../../assets/image.png";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import {
  Background,
  Button,
  Container,
  Picture,
  SubTitle,
  TextBox,
  Title,
} from "../../global/styles";

import { BTTT, Content, TextBtn } from "./styles";

const Home = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const slides = [
    {
      key: 1,
      component: (
        <Background source={Img} resizeMode="cover">
          <Picture source={ImgPic} resizeMode="cover" />
          <Title style={{ fontFamily: "Inter_700Bold" }}>Olá!</Title>
          <SubTitle style={{ fontFamily: "Inter_400Regular" }}>
            Seja bem vindo ao Cuidadus
          </SubTitle>
        </Background>
      ),
    },
    {
      key: 2,
      component: (
        <Background
          style={{ flexDirection: "column", justifyContent: "space-around" }}
          source={Img2}
        >
          <Title style={{ fontFamily: "Inter_700Bold", marginTop: 30 }}>
            Escolha um nome e Foto de Perfil
          </Title>

          <Content>
            <Picture
              source={Perfil}
              resizeMode="cover"
              style={{ margin: 20 }} 
            />
            <TextBox
              placeholder="Digite seu Nome"
              style={{ justifyContent: "center", alignItems: "center" }}
            />
          </Content>
          <BTTT onPress={() => navigation.navigate("PerguntaTematica")}>
            <TextBtn style={{ fontFamily: "Inter_400Regular" }}>
              Proximo
            </TextBtn>
          </BTTT>
        </Background>
      ),
    },
  ];

  const renderItem = ({ item }) => {
    return <Container>{item.component}</Container>;
  };

  return <AppIntroSlider data={slides} renderItem={renderItem} />;
};

export default Home;
