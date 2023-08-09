import React, { useContext, useEffect, useState, version } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useUserContext } from "./UserContext";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

import ImageContext from "./ImageContext";
import theme from "../../global/theme";
import { useAppContext } from "../ConfigScreen/VolumeContext";
import { Audio } from "expo-av";

const Home = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useUserContext();
  const [image1, setImage1] = useState();
  const [acessible, setAcessible] = useState(true);
  const { image, setImage } = useContext(ImageContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const soundObject = new Audio.Sound();
  const { volume, setVolume, sfx, setSfx } = useAppContext();
  const [isPlaying, setIsPlaying] = useState(false);

  useFocusEffect(() => {
    if (!isLoaded) {
      loadData();
      setIsLoaded(true);
    }
  });

  useEffect(() => {
    loadData();
    const setInitialVolume = async () => {
      await soundObject.setVolumeAsync(volume);
    };
    setInitialVolume();
    playMusic();
  }, []);

  const playMusic = async () => {
    try {
      if (!isPlaying) {
        await soundObject.loadAsync(require("../../../assets/music.mp3"));
        await soundObject.setIsLoopingAsync(true);
        await soundObject.playAsync();
        setIsPlaying(true);
        console.log("acertou");
      }
    } catch (error) {
      console.log("Erro ao reproduzir o áudio:", error);
    }
  };

  const loadData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("userData");
      if (userDataString !== null) {
        const userData = JSON.parse(userDataString);
        setUserName(userData.userName);
        setVolume(userData.volume);
        setSfx(userData.sfx);
        setImage(userData.image);
        setImage1(userData.image);
        console.log(userData.image);
        setAcessible(false);
      }
    } catch (error) {
      console.log("Erro ao recuperar dados:", error);
    }
  };
  const saveData = async () => {
    try {
      // Salvar userName e image no AsyncStorage como um objeto JSON
      const data = { userName, image, volume, sfx };
      await AsyncStorage.setItem("userData", JSON.stringify(data));
      console.log("Dados salvos com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar dados:", error);
    }
  };

  const handlePress = async () => {
    await saveData();
    setIsLoaded(false);
    navigation.navigate("PerguntaTematica");
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage1(result.assets[0].uri);
      let item = result.assets[0];
      setImage(item.uri);
      setAcessible(false);
    }
  };

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
            Escolha um nome e
          </Title>
          <Title style={{ fontFamily: "Inter_700Bold", marginTop: -40 }}>
            Foto de Perfil
          </Title>

          <Content>
            <BtnTeste onPress={pickImage}>
              {image1 === undefined ? (
                <Picture
                  source={Perfil}
                  resizeMode="cover"
                  style={{ margin: 20 }}
                />
              ) : (
                <Image
                  source={{ uri: image1 }}
                  resizeMode="cover"
                  style={{
                    margin: 20,
                    minHeight: 200,
                    minWidth: 200,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: theme.colors.azul_2,
                  }}
                />
              )}
            </BtnTeste>

            <TextBox
              value={userName}
              placeholder="Digite seu Nome"
              style={{ justifyContent: "center", alignItems: "center" }}
              onChangeText={(text) => setUserName(text)}
            />
          </Content>
          <BTTT disabled={acessible} onPress={handlePress}>
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
