import React, { FC } from "react";
import {
  CloseButton,
  CloseButtonIcon,
  Message,
  Overlay,
  PopUpBox,
  PopupContainer,
  VoidPopUp,
  voidPopUp,
} from "./styles";

interface CustomPopupProps {
  visible: boolean;
  type: "success" | "error";
  correcao?: "";
  message: string;
  onClose: () => void;
}

const CustomPopup: FC<CustomPopupProps> = ({
  visible,
  type,
  message,
  onClose,
  correcao,
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
            <CloseButtonIcon name="close" style={{ color: IconColor }} />
          </CloseButton>
        </PopUpBox>
        <Message style={{ color: IconColor }}>{message}</Message>
        {type === "success" ? (
          <Message style={{ color: IconColor }}>Sugestões:</Message>
        ) : (
          <></>
        )}
      </PopupContainer>
    </Overlay>
  );
};

export default CustomPopup;
