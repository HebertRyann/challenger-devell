import React from "react";
import { useState } from "react";

import {
  Container,
  Header,
  ContainerIcon,
  IconFa,
  IconFe,
  TitleHeader,
  ContainerPayments,
  Button,
  ContainerInput,
  Label,
  Input,
  ContainerNumberCard,
} from './styles';

const NewPayment: React.FC = () => {
  const [payments, setPayments] = useState(['pix']);
  return (
    <Container>
      <Header>
        <ContainerIcon>
          <IconFe size={20} name="chevron-left" />
        </ContainerIcon>
        
        <TitleHeader>
          FORMAS DE PAGAMENTO
        </TitleHeader>

        <ContainerIcon>
          <IconFe size={20} name="home" />
        </ContainerIcon>

      </Header>

      <ContainerPayments>
        <ContainerInput>
          <Label>Nome</Label>
          <Input/>
        </ContainerInput>
        <ContainerInput style={{ 
          borderTopColor: '#e3e3e3',
          borderBottomColor: '#e3e3e3',
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}>
          <Label>E-mail</Label>
          <Input/>
        </ContainerInput>
        <ContainerInput>
          <Label>Telefone</Label>
          <Input/>
        </ContainerInput>
      </ContainerPayments>

      <ContainerNumberCard>
        <Input placeholder="Cartao"/>
      </ContainerNumberCard>

      <Button>SALVAR CARTÂO</Button>
    </Container>
  );
};

export { NewPayment };