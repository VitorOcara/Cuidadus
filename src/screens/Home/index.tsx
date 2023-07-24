import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "./UserContext";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";

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

import { BTTT, BtnTeste, Content, TexTeste, TextBtn } from "./styles";
import { useImgContext } from "./userImgContext";

const Home = () => {
  const navigation = useNavigation();
  // const [userName, setUserName] = useState("");
  const [userName, setUserName] = useUserContext();
  const [userImage, setUserImage] = useImgContext();
  const [image, setImage] = useState();

  const pickImage = async () => {
    // Request permission to access the image library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    // Launch the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setUserImage(result.assets[0].uri);
    }
  };

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  console.log(userImage);

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
            <BtnTeste onPress={pickImage}>
              {image === undefined ? (
                <Picture
                  source={Perfil}
                  resizeMode="cover"
                  style={{ margin: 20 }}
                />
              ) : (
                <Image
                source={{ uri: image }}
                resizeMode="cover"
                style={{ margin: 20, minHeight: 200, minWidth: 200 }}
              />
              )}
            </BtnTeste>

            <TextBox
              placeholder="Digite seu Nome"
              style={{ justifyContent: "center", alignItems: "center" }}
              onChangeText={(text) => setUserName(text)}
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
