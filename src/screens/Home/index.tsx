import React from 'react';
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
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
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
        <Button onPress={() => navigation.navigate('delivery')}>DIGITE SUA LOCALIZAÇÃO</Button>

        <LinkToLogin>
          Faça seu <Link onPress={() => navigation.navigate('login')}>Login</Link>
        </LinkToLogin>

        <SelectLanguage/>

      </WrapperContent>
    </Container>
  );
};

export { Home };
