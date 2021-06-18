import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Platform, UIManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";
// @ts-ignore
import CreditCardInput from 'react-credit-card-input';

import {
  Container,
  Header,
  ContainerIcon,
  IconFe,
  TitleHeader,
  ContainerPayments,
  Button,
  ContainerInput,
  Label,
  Input,
} from './styles';

const NewPayment: React.FC = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [payments, setPayments] = useState({
    name: userName,
    email: userEmail,
    phone: userPhone,
    card: {
      number: cardNumber,
      expiry: cardExpiry,
      cvc: cardCVC,
    },
  });

  async function handleSubmitPayment() {
    setPayments({
      name: userName,
      email: userEmail,
      phone: userPhone,
      card: {
        number: cardNumber,
        expiry: cardExpiry,
        cvc: cardCVC,
      },
    });
    try {
      await AsyncStorage.setItem('@Commis:Payment', JSON.stringify(payments));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (
      Platform.OS === "android" &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, [])
  return (
    <Container>
      <Header>
        <ContainerIcon onPress={() => navigation.goBack()}>
          <IconFe size={22} name="chevron-left" />
        </ContainerIcon>
        
        <TitleHeader>
          FORMAS DE PAGAMENTO
        </TitleHeader>

        <ContainerIcon onPress={() => navigation.navigate('início')}>
          <IconFe size={22} name="home" />
        </ContainerIcon>

      </Header>

      <ContainerPayments>
        <ContainerInput>
          <Label>Nome</Label>
          <Input onChangeText={(text) => setUserName(text)}/>
        </ContainerInput>
        <ContainerInput style={{ 
          borderTopColor: '#e3e3e3',
          borderBottomColor: '#e3e3e3',
          borderTopWidth: 1,
          borderBottomWidth: 1,

        }}>
          <Label>E-mail</Label>
          <Input onChangeText={(text) => setUserEmail(text)}/>
        </ContainerInput>
        <ContainerInput>
          <Label>Telefone</Label>
          <Input onChangeText={(text) => setUserPhone(text)}/>
        </ContainerInput>
      </ContainerPayments>

     <CreditCardInput 
     customTextLabels={{
      cardNumberPlaceholder: 'Número do cartão',
      expiryPlaceholder: 'MM/AA',
      cvcPlaceholder: 'CVC',
      }}
     containerStyle={{
      width: '95%',
      margin: '-300px auto 0 auto',
      boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
      borderRadius: '3px',
     }}
     dangerTextStyle={{
       display: 'none'
     }}
     invalidStyle={{
       border: 0,
     }}
     />

      <Button onPress={handleSubmitPayment}>SALVAR CARTÂO</Button>
    </Container>
  );
};

export { NewPayment };