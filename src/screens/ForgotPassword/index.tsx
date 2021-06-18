import { useNavigation } from '@react-navigation/native';
import React from 'react';
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
  ButtonIHave,
  TextIHaveButton,
  ContainerIcon,
} from './styles';

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
      <ContainerIcon onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={16}/>
      </ContainerIcon>
      
        <ContentHeader>
          <Title>Commis</Title>

          <ContentDescription>
            <SubTitle>REDEFINIR SENHA</SubTitle>
            <Complemetary>Insira seu e-mail para continuar</Complemetary>
          </ContentDescription>
        </ContentHeader>

      </Header>

      <ContainerForm>
          <Input 
            placeholder="E-mail" 
            selectionColor="#000"
            style={{ outline: 'none'}}
          />
        
        <Button>
          <TextButton>"OTP" Enviado POR E-MAIL</TextButton>
        </Button>
        <ButtonIHave>
        <TextIHaveButton>já tenho um "OTP"</TextIHaveButton>
      </ButtonIHave>
      </ContainerForm>

      

    </Container>
  )
};
export { ForgotPassword };