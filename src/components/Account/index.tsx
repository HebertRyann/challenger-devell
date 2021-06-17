import React from "react";

import {
  Container,
  Header,
  IconFe,
  IconFa,
  TitleHeader,
  ContainerProfile,
  ImageBackground,
  TitleName,
  ContainerChangeInfo,
  Input,
  Button,
} from './styles';

const Account: React.FC = () => {
  return (
    <Container>
      <Header>
        <IconFe size={20} name="chevron-left" />
        
        <TitleHeader>
          Perfil
        </TitleHeader>

        <IconFe size={20} name="chevron-right"/>
      </Header>

      <ContainerProfile>
        <ImageBackground/>
        <TitleName>Hebert Ryan</TitleName>
      </ContainerProfile>

      <ContainerChangeInfo>
        <Input placeholder="E-mail"/>
        <Input placeholder="Senha" style={{ marginTop: 16}}/>
        <Button>Confirmar</Button>
      </ContainerChangeInfo>
    </Container>
  )
};
export { Account };