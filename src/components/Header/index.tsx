import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderButton, HeaderContent, Icon } from "./styles";
import { Title } from "../../global/styles";
import StatusProgressBar from "./StatusBar";

interface HeaderProps {
  title?: string;
  background: "Blue" | "Gray" | "None";
  icons?: boolean;
  statusbar: boolean;
  index?: number;
}

function Header({ title, background, icons, statusbar, index }: HeaderProps) {
  const { goBack } = useNavigation();
  return (
    <HeaderContent background={background}>
      {icons === true ? (
        <HeaderButton onPress={goBack}>
          <Icon background={background} name="ios-chevron-back-sharp" />
        </HeaderButton>
      ) : (
        <Icon />
      )}
      <>
        {title !== "" ? (
          <Title style={{ color: "white", marginTop: 0, fontSize: 24 }}>
            {title}
          </Title>
        ) : (
          <></>
        )}
        {statusbar === true ? (
          <StatusProgressBar currentIndex={index} />
        ) : (
          <></>
        )}
      </>

      {icons === true ? (
        <Icon background={background} name="md-ellipsis-vertical-sharp" />
      ) : (
        <Icon />
      )}
    </HeaderContent>
  );
}
export default Header;
