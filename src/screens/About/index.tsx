import React from "react";
import { Background, Container } from "../../global/styles";
import Img from "../../../assets/Sobre.png";
import { BottonBar } from "../../components/BottomBar";
import { Content, ContentBox, ContentText, TitleText } from "./styles";
import Header from "../../components/Header";

const About = () => {
  return (
    <Container>
      <Header background="Blue" title="Cuidadus" />
      <Background source={Img}>
        <Content>
          <ContentBox>
            <TitleText>Sobre o Cuidadus</TitleText>
            <ContentText>
              Cuidadus é fruto de um Trabalho de Conclusão de Curso de
              Psicologia e destina-se a auxiliar pais, mães, irmãos, babás,
              professores, acompanhantes terapêuticos, entre outros que tenham
              contato com a criança, e tem o intuito de levar conhecimento de
              técnicas da ABA para o manejo e generalização de comportamentos
              auxiliando no tratamento do TEA.
            </ContentText>

            <TitleText>O que é ABA?</TitleText>
            <ContentText>
              A Análise do Comportamento Aplicada tem sido o método de
              intervenção mais estudado e adotado para o tratamento do TEA sendo
              uma das mais eficientes. A ABA pode ser entendida como uma
              tecnologia que se aplica a situações reais da vida usando técnicas
              para alterar/modificar a frequência de comportamentos apropriados
              e inapropriados.
              
            </ContentText>

            <TitleText>O que é TEA?</TitleText>
            <ContentText>
              O Transtorno do Espectro Autista é um transtorno do
              desenvolvimento e podemos evidenciar como características deste a
              falta de reciprocidade nas vivências sociais, comportamentos de
              estereotipia, atividades limitadas, interesses pontuais e
              dificuldades na aquisição e no desenvolvimento da linguagem.
            </ContentText>
          </ContentBox>
        </Content>
      </Background>
      <BottonBar screen="Cuidadus" />
    </Container>
  );
};

export default About;
