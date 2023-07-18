import React from "react";
import { Background, Container } from "../../global/styles";
import Img from "../../../assets/Sobre.png";
import { BottonBar } from "../../components/BottomBar";
import { Content, ContentBox } from "./styles";
import Header from "../../components/Header";

const ConfigScreen = () => {
  return (
    <Container>
      <Header background="Blue" title="Cuidadus" />
      <Background source={Img}>
        <Content>
          <ContentBox></ContentBox>
        </Content>
      </Background>
      <BottonBar screen="Config" />
    </Container>
  );
};

export default ConfigScreen;
