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
  const [alerts, setAlerts] = useState([
    { title: 'Bem vindo', content: 'Ola'},
    { title: 'Bem vindo', content: 'Ola'},
    { title: 'Bem vindo', content: 'Ola'},]);
  return (
    <Container>
      <Header>
        <ContainerIcon>
          <IconFe size={20} name="chevron-left" />
        </ContainerIcon>
        
        <TitleHeader>
          Alertas
        </TitleHeader>

      </Header>

      {alerts.length <= 1 ? (
          <ContainerAlign>
            <IconFe name="bell" size={150} color="#e5e5e5"/>
            <TextNoAlert>Não há alertas</TextNoAlert>
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