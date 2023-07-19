import React, { FC } from "react";
import {
  BtnNext,
  CloseButton,
  Icon,
  Message,
  Overlay,
  PopUpBox,
  PopUpBoxText,
  PopupContainer,
  VoidPopUp,
} from "./styles";

interface CustomPopupProps {
  visible: boolean;
  type: "success" | "error";
  correcao?: string;
  message: string;
  nextButton: boolean;
  onClose: () => void;
  onSkip?: () => void;
}

const CustomPopup: FC<CustomPopupProps> = ({
  visible,
  type,
  message,
  onClose,
  correcao,
  nextButton,
  onSkip,
}) => {
  if (!visible) {
    return null;
  }

  const popupBackgroundColor = type === "success" ? "#C4E0D3" : "#FBE8E6";
  const IconColor = type === "success" ? "#028B4C" : "#DF432D";

  return (
    <Overlay>
      <PopupContainer style={{ backgroundColor: popupBackgroundColor }}>
        <PopUpBox>
          <VoidPopUp />
          <CloseButton onPress={onClose}>
            <Icon name="close" style={{ color: IconColor }} />
          </CloseButton>
        </PopUpBox>

        <PopUpBoxText>
          {type === "success" ? (
            <Icon name="checkmark-circle" style={{ color: IconColor }} />
          ) : (
            <Icon name="close-circle" style={{ color: "#DF432D" }} />
          )}

          <Message style={{ color: IconColor }}>{message}</Message>
        </PopUpBoxText>

        <VoidPopUp>
          {type === "success" ? (
            <Message style={{ color: IconColor }}>Sugestões:</Message>
          ) : (
            <></>
          )}

          {type === "success" ? (
            <Message style={{ color: IconColor }}>{correcao}</Message>
          ) : (
            <></>
          )}
        </VoidPopUp>

        {nextButton === true ? (
          <BtnNext
            onPress={onSkip}
            style={{
              backgroundColor: type === "success" ? "#028B4C" : "#DF432D",
            }}
          >
            <Message style={{ color: "#ffffff" }}>Próxima</Message>
          </BtnNext>
        ) : (
          <></>
        )}
      </PopupContainer>
    </Overlay>
  );
};

export default CustomPopup;
