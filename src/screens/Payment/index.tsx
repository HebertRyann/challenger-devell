import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation()
  return (
    <Container>
      <Header>
        <ContainerIcon onPress={() => navigation.goBack()}>
          <IconFe size={22} name="chevron-left" />
        </ContainerIcon>
        
        <TitleHeader>
          FORMAS DE PAGAMENTO
        </TitleHeader>

        <ContainerIcon onPress={() => navigation.navigate('dashboard')}>
          <IconFe size={22} name="home" />
        </ContainerIcon>

      </Header>

      <ContainerPayments>
        <ContentPayment>
          <Title>Pagar com PIX</Title>
        </ContentPayment>
      </ContainerPayments>

      <Button onPress={() => navigation.navigate('addPayment')}>ADICIONAR NOVO CARTÂO</Button>
    </Container>
  );
};

export { Payment };