import React, { useState } from "react";
import { Background, Container } from "../../global/styles";
import Img from "../../../assets/Sobre.png";
import { BottonBar } from "../../components/BottomBar";
import {
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
} from "./styles";
import Header from "../../components/Header";
import { VoidPopUp } from "../../components/CustonPopUp/styles";
import { useUserContext } from "../Home/UserContext";
import { useImgContext } from "../Home/userImgContext";
import { Image } from "react-native";

const ConfigScreen = () => {
  const userName = useUserContext();
  const userImage = useImgContext();
  const [volume, setVolume] = useState(0.5);
  const [sfx, setSfx] = useState(0.5);

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
            <ProfileImage>
              {/* <Image source={userImage} /> */}
            </ProfileImage>
            <TextBox>{userName}</TextBox>
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

            <TextBox style={{marginTop: 25}} >Efeitos Sonoros</TextBox>
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
