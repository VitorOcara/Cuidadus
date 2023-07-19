import React from "react";
import styled from "styled-components/native";
import { BarContainer, Container, Partition, TextBar } from "./styles";

type StatusProgressBarProps = {
  currentIndex?: number;
};

const StatusProgressBar: React.FC<StatusProgressBarProps> = ({
  currentIndex,
}) => {
  return (
    <BarContainer>
      <Container>
        {Array.from({ length: 10 }).map((_, index) => (
          <Partition
            first={index === 0}
            last={index === currentIndex-1}
            key={index}
            explored={index < currentIndex}
          />
        ))}
      </Container>
      <TextBar>{currentIndex}/10</TextBar>
    </BarContainer>
  );
};

export default StatusProgressBar;
