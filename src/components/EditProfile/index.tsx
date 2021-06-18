import React from "react";

import {
  Container,
  Button,
  Header,
  IconFe,
  Input,
  TitleHeader,
  ContainerIcon,
  ContainerForm,
  TextButton,
  Label,
  ContainerInput,
} from './styles';

const EditProfile: React.FC = () => {
  return (
    <Container>
      <Header>
        <ContainerIcon>
          <IconFe size={20} name="chevron-left" />
        </ContainerIcon>
        
        <TitleHeader>
          Editar Perfil
        </TitleHeader>

        <ContainerIcon>
          <IconFe size={20} name="home" />
        </ContainerIcon>

      </Header>

      <ContainerForm>
        <ContainerInput>
          <Label>Nome</Label>
          <Input defaultValue="Hebert"/>
        </ContainerInput>

        <ContainerInput>
          <Label>E-mail</Label>
          <Input  defaultValue="hebert@gmail.com.br"/>
        </ContainerInput>

        <ContainerInput>
          <Label>Telefone</Label>
          <Input defaultValue="+5571912345678"/>
        </ContainerInput>

        <ContainerInput>
          <Label>Senha</Label>
          <Input />
        </ContainerInput>

        <Button>
          <TextButton>Alterar</TextButton>
        </Button>

      </ContainerForm>

    </Container>
  );
};

export { EditProfile };