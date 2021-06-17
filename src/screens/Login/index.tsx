import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Arrow,
  Title,
  SubTitle,
  Complemetary,
  Input,
  Button,
  TextOtherOption,
  ContainerSignUp,
  TextSignUp,
  Link,
  ContainerForgotPassword,
  ContentHeader,
  ContentDescription,
  ContainerForm,
  Footer,
  TextOther,
  TraceContainer,
  ButtonSocial,
  ContainerButtonsSocial,
  TextButton,
  Icon,
} from './styles';


const Login: React.FC = () => {
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
            <SubTitle>Login</SubTitle>
            <Complemetary>Digite e-mail e senha</Complemetary>
          </ContentDescription>
        </ContentHeader>

      </Header>

      <ContainerForm>
          <Input 
            placeholder="E-mail" 
            selectionColor="#000" 
            underlineColorAndroid={isInputFocus ? '#000' : '#cbcbcb'}
          />
          <Input 
            placeholder="Senha" 
            selectionColor="#000" 
            underlineColorAndroid={isInputFocus ? '#000' : '#cbcbcb'}
          />
        
        <Button>
          <TextButton>Login</TextButton>
        </Button>
      </ContainerForm>

      <TextOtherOption>
        <TraceContainer style={{
          borderBottomColor: '#bdbdbd',
          borderBottomWidth: 1,
        }}/>
        <TextOther>OU</TextOther>
        <TraceContainer style={{
          borderBottomColor: '#bdbdbd',
          borderBottomWidth: 1,
        }}/>
      </TextOtherOption>

      <Footer>

        <ContainerButtonsSocial>
          <ButtonSocial>
            <Icon name="facebook" size={18} color="#4267B2"/>
            <TextButton>Login com Facebook</TextButton>
          </ButtonSocial>

          <ButtonSocial>
          <Icon name="google" size={18} color="#000"/>
            <TextButton>Login com Google</TextButton>
          </ButtonSocial>
        </ContainerButtonsSocial>

        <ContainerSignUp>

          <TextSignUp>Ainda não tem cadastro?</TextSignUp>
          <Link>Registrar</Link>

        </ContainerSignUp>

        <ContainerForgotPassword>

          <Link>Esqueci minha Senha?</Link>
          
        </ContainerForgotPassword>
      </Footer>
    </Container>
  )
};

export { Login };