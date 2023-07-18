import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderButton, HeaderContent, Icon } from "./styles";
import { Title } from "../../global/styles";

interface HeaderProps {
  title?: string;
  background: "Blue" | "Gray";
  icons?: boolean;
}

function Header({ title, background, icons }: HeaderProps) {
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
      <Title style={{ color: "white", marginTop: 0, fontSize: 24 }}>
        {title}
      </Title>
      {icons === true ? (
        <Icon background={background} name="md-ellipsis-vertical-sharp" />
      ) : (
        <Icon />
      )}
    </HeaderContent>
  );
}
export default Header;
