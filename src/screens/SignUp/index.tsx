import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { InputForm } from '../../components/InputForm';
import { useForm } from 'react-hook-form';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Complemetary,
  Input,
  Button,
  ContentHeader,
  ContentDescription,
  ContainerForm,
  TextButton,
  Icon,
  ContainerPhoneInput,
  PrefixInput,
  ContainerIcon,
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Label } from '../Login/styles';

interface FormDataProps {
  name: string;
  email: string;
  phone: string;
  senha: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const [isInputFocus, setIsInputFocus] = useState(false);

  async function handleCreateUser(formData: FormDataProps) {
    try {
      await AsyncStorage.setItem('@Commis:SignUp', JSON.stringify(formData))
      navigation.navigate('dashboard')
    } catch (error) {
      throw new Error('Async storaged error');
    }
  };

  const toggleFocusInput = () => {
    setIsInputFocus(!isInputFocus);
  };
  return (
    <Container>
      <Header>
        <ContainerIcon onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={16}/>
        </ContainerIcon>
        <ContentHeader>
          <Title>Commis</Title>

          <ContentDescription>
            <SubTitle>REGISTRAR</SubTitle>
            <Complemetary>Registrar agora</Complemetary>
          </ContentDescription>
        </ContentHeader>

      </Header>

      <ContainerForm>
          <Label>Nome</Label>
          <InputForm
            control={control}
            name="name"
            placeholder="Nome"
            style={{ borderBottomColor: '#575757', borderBottomWidth: 1}}
          />
          <Label>E-mail</Label>
          <InputForm 
            name="email"
            placeholder="E-mail"
            control={control}
            style={{ borderBottomColor: '#575757', borderBottomWidth: 1}}
          />
          <Label>Número</Label>
          <ContainerPhoneInput style={{ borderBottomColor: '#575757', borderBottomWidth: 1}}>
            <PrefixInput>+55 </PrefixInput>
            <InputForm 
            
              control={control}
              name="phone" 
              placeholder="Número"
              selectionColor="#000"
              keyboardType={"phone-pad" || "name-phone-pad"}
              textContentType="telephoneNumber"
            />
          </ContainerPhoneInput>
          <InputForm 
          style={{ borderBottomColor: '#575757', borderBottomWidth: 1}}
            control={control}
            name="password"
            placeholder="Senha"
            secureTextEntry
          />
        
        <Button onPress={handleSubmit(handleCreateUser)}>
          <TextButton>Registrar</TextButton>
        </Button>
      </ContainerForm>
    </Container>
  )
};
export { SignUp };