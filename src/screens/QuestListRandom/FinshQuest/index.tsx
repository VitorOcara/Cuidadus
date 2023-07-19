import React from "react";
import { Background, Container, Picture } from "../../../global/styles";
import Img from "../../../../assets/Sobre.png";
import ImgPic from "../../../../assets/FinishImage.png";
import { BottonBar } from "../../../components/BottomBar";
import { BtnSkip, Content, ContentBox, TextBox, ViewTextBox } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TitleText } from "../../About/styles";
import theme from "../../../global/theme";

const FinishQuest = ({route}: any) => {
  const { acertos } = route.params;
  const navigation = useNavigation();

  return (
    <Container>
      <Background source={Img}>
        <Content>
          <Picture source={ImgPic} resizeMode="cover" />
          <ViewTextBox>
            <TitleText style={{color: theme.colors.azul_2}} >Parabéns :) </TitleText>
            <TextBox>Voce acertou {acertos} perguntas no Modo aleatório</TextBox>
            <BtnSkip onPress={() => navigation.navigate("PerguntaTematica")}>
              <TextBox style={{ color: "white" }}>Concluir</TextBox>
            </BtnSkip>
          </ViewTextBox>
        </Content>
      </Background>
    </Container>
  );
};

export default FinishQuest;
