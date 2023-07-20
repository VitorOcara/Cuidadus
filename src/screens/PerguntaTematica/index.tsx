import React, { useRef, useState } from "react";
import {
  Background,
  Container,
  Picture,
  SubTitle,
  Title,
} from "../../global/styles";
import ImgBackground from "../../../assets/PgtTemBackground.png";
import { Dimensions } from "react-native";
import Roleta from "../../../assets/Roleta01.png";
import Roleta2 from "../../../assets/Roleta02.png";

import { BoxContent, BoxSlider, BtnInit, Content, TextBtn } from "./styles";
import Carousel from "react-native-snap-carousel";
import { BottonBar } from "../../components/BottomBar";
import { useNavigation, useFocusEffect, useRoute } from "@react-navigation/native";
import { QuestProps, data } from "../QuestList";

export type Item = {
  key: number;
  component: any;
};
export type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  item: Item;
};

const PerguntaTematica = () => {

  const width = Dimensions.get("screen").width;
  const carouselRef = useRef(null);
  const [numberDot, setNumberDot] = useState(1);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const navigation = useNavigation();
  const [randomItems, setRandomItems] = useState<QuestProps[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const shuffledData = shuffle(data);
      const selectedItems = shuffledData.slice(0, 10);
      setRandomItems(selectedItems);
    }, [])
  );

  const shuffle = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const slides = [
    {
      key: 1,
      component: (
        <Container>
          <BoxSlider>
            <Picture source={Roleta} />
            <Title>Tematicas</Title>
          </BoxSlider>
        </Container>
      ),
    },
    {
      key: 2,
      component: (
        <Container>
          <BoxSlider>
            <Picture source={Roleta2} />
            <Title>Aleatórias</Title>
          </BoxSlider>
        </Container>
      ),
    },
  ];
  console.log(activeSlideIndex);

  const renderItem = ({ item }) => {
    return item.component;
  };

  const onSnap = (index: number) => {
    setActiveSlideIndex(index);
  };
  // const onBefor = ( index ) =>{
  //   console.log(index);
  //   setActiveSlideIndex(index);
  // }
  return (
    <Container>
      <Background source={ImgBackground} resizeMode="cover">
        <Content>
          <BoxContent>
            <Title>Cuidadus</Title>
            <SubTitle>Escolha um módulo para as perguntas</SubTitle>
          </BoxContent>
          <BoxContent>
            <Carousel
              ref={carouselRef}
              indicatorStyle={"default"}
              keyExtractor={(item) => item.key.toString()}
              data={slides}
              sliderWidth={width}
              itemWidth={width / 1.6}
              renderItem={({ item }) => renderItem({ item })}
              onSnapToItem={(index) => onSnap(index)}
            />

            <BtnInit
              style={{ marginBottom: 200 }}
              onPress={() => {
                if (activeSlideIndex === 0) {
                  // Redirecionar para uma nova tela
                  navigation.navigate("QuestList");
                } else {
                  // Redirecionar para a tela "QuestList"
                  navigation.navigate("QuestListRandom", { randomItems });
                }
              }}
            >
              <TextBtn>Iniciar</TextBtn>
            </BtnInit>
          </BoxContent>
        </Content>
      </Background>
      <BottonBar screen="Tematica"  />
    </Container>
  );
};

export default PerguntaTematica;
