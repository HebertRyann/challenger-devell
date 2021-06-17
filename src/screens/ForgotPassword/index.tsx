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
} from './styles';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Header>
      <Icon name="chevron-left" size={16}/>
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