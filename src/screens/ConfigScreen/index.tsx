import React, { useContext, useState } from "react";
import { Background, Container } from "../../global/styles";
import * as ImagePicker from "expo-image-picker";
import Img from "../../../assets/Sobre.png";
import { BottonBar } from "../../components/BottomBar";
import {
  BtnVoid,
  Content,
  ContentBox,
  ElementBox,
  Icon,
  Ionicon,
  ProfileImage,
  ProfileImageView,
  SliderContainer,
  StyledSlider,
  TextBox,
  TextInputBox,
} from "./styles";
import Header from "../../components/Header";
import { VoidPopUp } from "../../components/CustonPopUp/styles";
import { useUserContext } from "../Home/UserContext";
import { Image } from "react-native";
import Perfil from "../../../assets/perfil.png";
import ImageContext from "../Home/ImageContext";
import { useAppContext } from "./VolumeContext";
// import { imgTeste } from "../Home/teste";

const ConfigScreen = () => {
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
      let item = result.assets[0];
      setImage(item.uri);
    }
  };

  const [userName, setUserName] = useUserContext();
  const { volume, setVolume, sfx, setSfx } = useAppContext();
  const { image, setImage } = useContext(ImageContext);

  const handleVolumeChange = (value: number) => {
    setVolume(value);
  };
  const handleVolumeChangeSFX = (value: number) => {
    setSfx(value);
  };

  return (
    <Container>
      <Header statusbar={false} background="Blue" title="Cuidadus" />
      <Background source={Img}>
        <Content>
          <ProfileImageView>
            <BtnVoid onPress={pickImage}>
              <ProfileImage>
                {image !== null ? (
                  <Image
                    source={{ uri: image }}
                    resizeMode="center"
                    style={{ height: 90, width: 90, borderRadius: 45 }}
                  />
                ) : (
                  <Image source={{ uri: Perfil }} />
                )}
              </ProfileImage>
            </BtnVoid>

            <TextInputBox
              value={userName}
              onChangeText={(text) => setUserName(text)}
            />
          </ProfileImageView>
          <ContentBox>
            <TextBox>Música</TextBox>
            <ElementBox>
              <Ionicon name="musical-note" />
              <SliderContainer>
                <StyledSlider
                  minimumValue={0}
                  maximumValue={1}
                  value={volume}
                  onValueChange={handleVolumeChange}
                />
              </SliderContainer>
            </ElementBox>

            <TextBox style={{ marginTop: 25 }}>Efeitos Sonoros</TextBox>
            <ElementBox>
              <Icon name="sound" />
              <SliderContainer>
                <StyledSlider
                  minimumValue={0}
                  maximumValue={1}
                  value={sfx}
                  onValueChange={handleVolumeChangeSFX}
                />
              </SliderContainer>
            </ElementBox>
          </ContentBox>
          <VoidPopUp />
        </Content>
      </Background>
      <BottonBar screen="Config" />
    </Container>
  );
};

export default ConfigScreen;
