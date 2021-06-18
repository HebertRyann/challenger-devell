import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/InputForm';
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
  ContainerIcon,
} from './styles';
import useAuth from '../../hooks/Auth';

interface UsersProps {
  name: string
  email: string
  password: string
  phone: string
}
interface FormDataProps {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const { user } = useAuth();
  const navigation = useNavigation();
  const [isInputFocus, setIsInputFocus] = useState(false);



  function handleLogin(form: FormDataProps) {
    if(user.email === form.email) {
      navigation.navigate('account');
      return;
    };
    alert('Usuario não existe');
  }

  return (
    <Container>
      <Header>
      <ContainerIcon onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={16}/>
      </ContainerIcon>
        <ContentHeader>
          <Title>Commis</Title>

          <ContentDescription>
            <SubTitle>LOGIN</SubTitle>
            <Complemetary>Digite e-mail e senha</Complemetary>
          </ContentDescription>
        </ContentHeader>

      </Header>

      <ContainerForm>
          <InputForm 
            control={control}
            name="email"
            placeholder="E-mail" 
          />
          <InputForm
            control={control}
            name="password" 
            placeholder="Senha" 
          />
        
        <Button onPress={handleSubmit(handleLogin)}>
          <TextButton style={{ color: '#fff'}}>LOGIN</TextButton>
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
            <Icon name="facebook" size={18} color="#0066ff"/>
            <TextButton>Login com Facebook</TextButton>
          </ButtonSocial>

          <ButtonSocial>
          <Icon name="google" size={18} color="#000"/>
            <TextButton>Login com Google</TextButton>
          </ButtonSocial>
        </ContainerButtonsSocial>

        <ContainerSignUp>

          <TextSignUp>Ainda não tem cadastro?</TextSignUp>
          <Link onPress={() => navigation.navigate('signup')}>Registrar</Link>

        </ContainerSignUp>

        <ContainerForgotPassword>

          <Link onPress={() => navigation.navigate('forgot')}>Esqueci minha Senha?</Link>
          
        </ContainerForgotPassword>
      </Footer>
    </Container>
  )
};

export { Login };