import React, { useState, useEffect } from "react";

import { Background, Container } from "../../global/styles";
import Img from "../../../assets/Sobre.png";
import { Content, ContentBox, ContentMapBox } from "./styles";
import { QuestProps, data } from "../QuestList";

const QuestListRandom = () => {

  const [randomItems, setRandomItems] = useState<QuestProps[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  
  useEffect(() => {
    const shuffledData = shuffle(data);
    const selectedItems = shuffledData.slice(0, 10);
    setRandomItems(selectedItems);
  }, []);

  const shuffle = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  
  const handleNextItem = () => {
    if (currentItemIndex < randomItems.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
    }
  };

  const handlePreviousItem = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1);
    }
  };

  return (
    <Container>
      <Background source={Img}>
        <Content>
          {randomItems.map((item, index) => (
            <ContentMapBox>

            </ContentMapBox>
          ))}
        </Content>
      </Background>
    </Container>
  );
};

export default QuestListRandom;
