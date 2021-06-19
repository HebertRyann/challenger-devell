import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/Auth";

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
  Footer,
  NumberCard,
  Expiry,
  UserName,
  WrapperPayment,
} from './styles';

const Payment: React.FC = () => {
  const { payments } = useAuth();
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
        {payments.map(item => (
          <WrapperPayment>
            <UserName>{item.name}</UserName>
            <Footer>
              <NumberCard>
                {item.card.number.split('')
                .map((item, index) => index > 11 ? item : '*')}
              </NumberCard>
              <Expiry>{item.card.expiry}</Expiry>
            </Footer>
          </WrapperPayment>
        ))}
      </ContainerPayments>

      <Button onPress={() => navigation.navigate('addPayment')}>ADICIONAR NOVO CARTÂO</Button>
    </Container>
  );
};

export { Payment };