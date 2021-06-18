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
  Title,
  ContentPayment,
} from './styles';

const Payment: React.FC = () => {
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
        <ContentPayment>
          <Title>Pagar com PIX</Title>
        </ContentPayment>
      </ContainerPayments>

      <Button>ADICIONAR NOVO CARTÂO</Button>
    </Container>
  );
};

export { Payment };