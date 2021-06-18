import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { SelectLanguage } from "../SelectLanguage";

import {
  Container,
  ContentProfile,
  TextNumber,
  TextEmail,
  ContainerProfile,
  ImageBackground,
  TitleName,
  ContainerMyAccount,
  TitleMyAccount,
  ButtonOpenModal,
  ModalMyAccount,
  ContainerOptions,
  Icon,
  TitleOptions,
  HeaderMyAccount,
  IconFe,
  ContainerAlign,
  ContainerIcon,
  ContainerSelectLanguage,
} from './styles';

const Account: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const animation = useSharedValue(0);
  const animationStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(animation.value) }
      ]
    }
  });

  const toggleModal = () => {
    animation.value = animation.value === 0 ? -350 : 0;
  };

  return (
    <Container>

      <ContainerProfile>

        <ContentProfile>
          <TitleName>Hebert</TitleName>
          <TextNumber>+5571999798142</TextNumber>
          <TextEmail>hebertryann40@gmail.com</TextEmail>
        </ContentProfile>

        <ImageBackground/>

      </ContainerProfile>

      <ContainerMyAccount>
        <HeaderMyAccount>
          <TitleMyAccount>Minha Conta</TitleMyAccount>
          {isOpenModal ? (
            <ContainerIcon onPress={toggleModal}>
              <IconFe name="chevron-up" color="#fff"/>
            </ContainerIcon>
          ) : (
            <ContainerIcon onPress={toggleModal}>
              <IconFe name="chevron-down" color="#fff"/>
            </ContainerIcon>
          )}
        </HeaderMyAccount>

        <ModalMyAccount>
            <ContainerOptions style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign>
                <IconFe name="bell"/>
                <TitleOptions>Alertas</TitleOptions>
              </ContainerAlign>
              <IconFe name="chevron-right" size={24}/>
            </ContainerOptions>
            <ContainerOptions style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign>
                <IconFe name="bell"/>
                <TitleOptions>Editar perfil</TitleOptions>
              </ContainerAlign>
              <IconFe name="chevron-right" size={24}/>
            </ContainerOptions>
            <ContainerOptions style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign>
                <IconFe name="bell"/>
                <TitleOptions>Gerenciar endereços</TitleOptions>
              </ContainerAlign>
              <IconFe name="chevron-right" size={24}/>
            </ContainerOptions>
            <ContainerOptions style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign>
                <IconFe name="bell"/>
                <TitleOptions>Meus pedidos</TitleOptions>
              </ContainerAlign>
              <IconFe name="chevron-right" size={24}/>
            </ContainerOptions>
            <ContainerOptions style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign>
                <IconFe name="bell"/>
                <TitleOptions>Minha carteira</TitleOptions>
              </ContainerAlign>
              <IconFe name="chevron-right" size={24}/>
            </ContainerOptions>
            <ContainerOptions style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign>
                <IconFe name="bell"/>
                <TitleOptions>Formas de pagamento</TitleOptions>
              </ContainerAlign>
              <IconFe name="chevron-right" size={24}/>
            </ContainerOptions>
          </ModalMyAccount>
        </ContainerMyAccount>

      <Animated.View style={[animationStyles]}>
        <HeaderMyAccount>
          <TitleMyAccount>Ajuda e duvidas frequentes</TitleMyAccount>
          <ContainerIcon>
            <IconFe name="chevron-down"/>
          </ContainerIcon>
        </HeaderMyAccount>

        <ModalMyAccount style={styles.container}>
          <ContainerOptions>
            <TitleOptions>Sair</TitleOptions>
            <ContainerIcon>
              <IconFe name="power" />
            </ContainerIcon>
          </ContainerOptions>
          <ContainerSelectLanguage>
            <SelectLanguage/>
          </ContainerSelectLanguage>
        </ModalMyAccount>
        
      </Animated.View>
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '500px',
  }
})
export { Account };