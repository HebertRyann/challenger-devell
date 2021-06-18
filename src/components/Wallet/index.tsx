import React from "react";
import { useState } from "react";

import {
  Container,
  Header,
  ContainerIcon,
  IconFe,
  TitleHeader,
  ContainerValue,
  Title,
  Value,
  ContainerTransactions,
  TextEmpty,
  Transaction,
  Price,
} from './styles';

const Wallet: React.FC = () => {
  const [trasaction, setTrasaction] = useState(['1', '2', '3']);
  return (
    <Container>
      <Header>
        <ContainerIcon >
          <IconFe size={20} name="chevron-left" />
        </ContainerIcon>
        
        <TitleHeader>
          MINHA CARTEIRA
        </TitleHeader>

      </Header>

      <ContainerValue>
        <Title>Carteira:</Title>
        <Value style={{ color: '#3dbd'}}>R$ 0.00</Value>
      </ContainerValue>

      <ContainerTransactions>
        {trasaction.length <= 1 ? ( 
          <TextEmpty> Ainda não há transação na carteira</TextEmpty>
        ) : (
          trasaction.map(item => (
            <Transaction>
            <Title>Pastelaria</Title>
            <Price>R$ 1.000</Price>
          </Transaction>
          ))
        )}
      </ContainerTransactions>
    </Container>
  );
};

export { Wallet };