import React from 'react';
import { Picker } from 'react-native';
import {
  Container,
  TitlePage,
  WrapperContent,
  Title,
  SubTitle,
  Button,
  LinkToLogin,
  ChangeLanguage,
  Link,
} from './styles';
import { SelectLanguage } from '../../components/SelectLanguage';

const Home: React.FC = () => {
  return (
    <Container>
      <TitlePage>Commis</TitlePage>

      <WrapperContent>
        <Title>
          Pronto para fazer o seu pedido
        </Title>
        <SubTitle>
          Seu prato preferido a um clique de distancia
        </SubTitle>
        <Button>DIGITE SUA LOCALIZAÇÃO</Button>

        <LinkToLogin>
          Faça seu <Link>Login</Link>
        </LinkToLogin>

        <SelectLanguage/>

      </WrapperContent>
    </Container>
  );
};

export { Home };
