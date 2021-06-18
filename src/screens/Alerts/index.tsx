import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";

import {
  Container,
  Header,
  TitleHeader,
  IconFe,
  TextNoAlert,
  Alert,
  Title,
  Content,
  ContainerIcon,
  ContainerAlign,
} from './styles';

const Alerts: React.FC = () => {
  const navigation = useNavigation()
  const [alerts, setAlerts] = useState([]);
  return (
    <Container>
      <Header>
        <ContainerIcon onPress={() => navigation.goBack()}>
          <IconFe size={20} name="chevron-left" />
        </ContainerIcon>
        
        <TitleHeader>
          ALERTAS
        </TitleHeader>

      </Header>

      {alerts.length <= 1 ? (
          <ContainerAlign>
            <IconFe name="bell" size={150} color="#ccc"/>
            <TextNoAlert>Não há novos alertas</TextNoAlert>
          </ContainerAlign>
        ) : (
          alerts.map(alert => (
            <Alert>
              <Title>{alert.title}</Title>
              <Content>{alert.content}</Content>
            </Alert>
          ))
        )}

    </Container>
  );
};

export { Alerts };