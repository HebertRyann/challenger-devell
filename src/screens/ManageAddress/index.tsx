import React from "react";
import { useState } from "react";

import {
  Container,
  Header,
  ContainerIcon,
  TitleHeader,
  IconFe,
  ContainerAddress,  
  TextEmpty,
  Address,
  Title,
  Button,
  TextButton,
  Number,
  Cep,
  AddressHeader,
} from './styles';

const ManageAddress: React.FC = () => {
  const [address, setAddress] = useState(['1','2','3']);
  return (
    <Container>
      <Header>
        <ContainerIcon>
          <IconFe size={20} name="chevron-left" />
        </ContainerIcon>
        
        <TitleHeader>
          GERENCIAR ENDEREÇOS
        </TitleHeader>

        <ContainerIcon>
          <IconFe size={20} name="home" />
        </ContainerIcon>

      </Header>

      <ContainerAddress>
        {address.length <= 1 ? (
          <TextEmpty>Você não tem um endereço salvo.</TextEmpty>
        ) : (
          address.map(item => (
            <Address>
              <AddressHeader>
                <Number>16</Number>
                <IconFe name="check-circle" color="#3bdbb4" size={16}/>
              </AddressHeader>
              <Title>Salvador, Bahia</Title>
              <Cep>Brasil 40028922</Cep>
            </Address>
          ))
        )}
      </ContainerAddress>

      <Button>
        <TextButton>NOVO ENDEREÇO</TextButton>
      </Button>
    </Container>
  );
};

export { ManageAddress };