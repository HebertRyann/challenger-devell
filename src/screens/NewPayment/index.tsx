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
import { InputForm } from "../../components/InputForm";
import { useForm } from "react-hook-form";
import useAuth, { User } from "../../hooks/Auth";

const NewPayment: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();
  const { generateCard } = useAuth();

  async function handleSubmitPayment(formdata: User) {
    generateCard(formdata);
    navigation.goBack();
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
          <InputForm 
            control={control}
            name="name"
          />
        </ContainerInput>
        <ContainerInput style={{ 
          borderTopColor: '#e3e3e3',
          borderBottomColor: '#e3e3e3',
          borderTopWidth: 1,
          borderBottomWidth: 1,

        }}>
          <Label>E-mail</Label>
          <InputForm 
            control={control}
            name="email"
          />
        </ContainerInput>

        <ContainerInput>
          <Label>Telefone</Label>
          <InputForm 
          control={control}
          name="phone"
          />
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

      <Button onPress={handleSubmit(handleSubmitPayment)}>SALVAR CARTÂO</Button>
    </Container>
  );
};

export { NewPayment };