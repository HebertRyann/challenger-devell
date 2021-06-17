import React from 'react';
import { useState } from 'react';
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
} from './styles';

const SignUp: React.FC = () => {
  const [isInputFocus, setIsInputFocus] = useState(false);

  const toggleFocusInput = () => {
    setIsInputFocus(!isInputFocus);
  };
  return (
    <Container>
      <Header>
        <Icon name="chevron-left" size={16}/>
        <ContentHeader>
          <Title>Commis</Title>

          <ContentDescription>
            <SubTitle>REGISTRAR</SubTitle>
            <Complemetary>Registrar agora</Complemetary>
          </ContentDescription>
        </ContentHeader>

      </Header>

      <ContainerForm>
          <Input 
            placeholder="Nome" 
            selectionColor="#000" 
            underlineColorAndroid={isInputFocus ? '#000' : '#cbcbcb'}
          />
          <Input 
            placeholder="Email" 
            selectionColor="#000" 
            underlineColorAndroid={isInputFocus ? '#000' : '#cbcbcb'}
          />
          <ContainerPhoneInput>
            <PrefixInput>+55</PrefixInput>
            <Input 
              placeholder="Número" 
              selectionColor="#000"
              keyboardType={"phone-pad" || "name-phone-pad"}
              textContentType="telephoneNumber"
              underlineColorAndroid="transparent"
            />
          </ContainerPhoneInput>
          <Input 
            placeholder="Senha" 
            selectionColor="#000" 
            underlineColorAndroid={isInputFocus ? '#000' : '#cbcbcb'}
          />
        
        <Button>
          <TextButton>Registrar</TextButton>
        </Button>
      </ContainerForm>
    </Container>
  )
};
export { SignUp };