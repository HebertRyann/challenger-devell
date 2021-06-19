import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withSpring, interpolate, useDerivedValue } from "react-native-reanimated";
import { SelectLanguage } from "../../components/SelectLanguage";
import useAuth from "../../hooks/Auth";

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
  IconSl,
} from './styles';

const Account: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const animationMyAccount = useSharedValue(0);
  const animationHelp = useSharedValue(0);
  const animationMyAccountArrow = useSharedValue(0);
  const animationHelpArrow = useSharedValue(0);
  const animationStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(animationMyAccount.value) }
      ]
    }
  });
  const animationStylesHelp = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(animationHelp.value) }
      ]
    }
  });
  const animationStylesMyAccountRotateArrow = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateX: animationMyAccountArrow.value + 'deg' }
      ]
    }
  });
  const animationStylesHelpRotateArrow = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateX: animationHelpArrow.value + 'deg' }
      ]
    }
  });


  const toggleAnimations = (
    slideValue: number, 
    animationStateModal: Animated.SharedValue<number>,
    rotateValue: number, 
    animationStateArrow: Animated.SharedValue<number>
    ) => {
  
      animationStateModal.value = animationStateModal.value === 0 ? slideValue : 0;
      animationStateArrow.value = animationStateArrow.value === 0 ? rotateValue : 0;
  };

  async function handleLogout() {
    try {
      await AsyncStorage.removeItem('@Commis:SignUp');
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>

      <ContainerProfile>

        <ContentProfile>
          <TitleName>{user.name}</TitleName>
          <TextNumber>{user.phone}</TextNumber>
          <TextEmail>{user.email}</TextEmail>
        </ContentProfile>

        <ImageBackground 
          onTouchStart={() => navigation.navigate('selectavatar')}
          source={user.avatarLink || "https://png2.cleanpng.com/sh/dcb9b8196a0e5269b90359cc04015e1b/L0KzQYm3VsI2N6F8iJH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfF3aaVmip9rdYPsfrb6k71kd551jeZucj32f7f7lBFzbV56i9d7LXH5ccXokr02amQ1UalvY3TpRrW7Ub42OWc4T6o7NEG4QoqCUcEzQWMASac7LoDxd1==/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcdf6d41.5163782415299112929152.png"}
        />

      </ContainerProfile>

      <ContainerMyAccount>
        <HeaderMyAccount>
          <TitleMyAccount>Minha Conta</TitleMyAccount>
          {/* {isOpenModalMyAccount ? (
            <ContainerIcon onPress={() => toggleModal(-350, animationMyAccount)}>
              <IconFe name="chevron-up" color="#fff"/>
            </ContainerIcon>
          ) : (
            <ContainerIcon onPress={() => toggleModal(-350, animationMyAccount)}>
              <IconFe name="chevron-down" color="#fff"/>
            </ContainerIcon>
          )} */}
            <Animated.View style={[animationStylesMyAccountRotateArrow]}>
              <ContainerIcon onPress={() => 
              toggleAnimations(-350, animationMyAccount, -180, animationMyAccountArrow)}
            >
                <IconFe name="chevron-up" color="#fff"/>
              </ContainerIcon>
            </Animated.View>
        </HeaderMyAccount>

        <ModalMyAccount>
            <ContainerOptions 
            style={{ 
              borderBottomColor: '#e3e3e3',
             borderBottomWidth: 1 
            }}
            onTouchStart={() => navigation.navigate('alert')}
            >
              <ContainerAlign >
                <IconFe name="bell" size={13} />
                <TitleOptions>Alertas</TitleOptions>
              </ContainerAlign>

              <ContainerIcon >
                <IconFe name="chevron-right" size={24} />
              </ContainerIcon>              
            </ContainerOptions>

            <ContainerOptions onTouchStart={() => navigation.navigate('edit')} style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign >
                <IconFe name="user"/>
                <TitleOptions>Editar perfil</TitleOptions>
              </ContainerAlign>
              <ContainerIcon onPress={() => navigation.navigate('edit')}>
                <IconFe name="chevron-right" size={24} />
              </ContainerIcon> 
            </ContainerOptions>

            <ContainerOptions onTouchStart={() => navigation.navigate('address')} style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign >
                <IconFe name="home"/>
                <TitleOptions>Gerenciar endereços</TitleOptions>
              </ContainerAlign>
              <ContainerIcon onPress={() => navigation.navigate('address')}>
                <IconFe name="chevron-right" size={24} />
              </ContainerIcon> 
            </ContainerOptions>

            <ContainerOptions onTouchStart={() => navigation.navigate('order')} style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign>
                <IconFe name="shopping-cart"/>
                <TitleOptions>Meus pedidos</TitleOptions>
              </ContainerAlign>
              <ContainerIcon onPress={() => navigation.navigate('order')}>
                <IconFe name="chevron-right" size={24} />
              </ContainerIcon> 
            </ContainerOptions>
            
            <ContainerOptions onTouchStart={() => navigation.navigate('wallet')} style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign >
                <IconSl name="wallet"/>
                <TitleOptions>Minha carteira</TitleOptions>
              </ContainerAlign>
              <ContainerIcon onPress={() => navigation.navigate('wallet')}>
                <IconFe name="chevron-right" size={24} />
              </ContainerIcon> 
            </ContainerOptions>

            <ContainerOptions onTouchStart={() => navigation.navigate('payment')} style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
              <ContainerAlign >
                <IconFe name="credit-card"/>
                <TitleOptions>Formas de pagamento</TitleOptions>
              </ContainerAlign>
              <ContainerIcon onPress={() => navigation.navigate('payment')}>
                <IconFe name="chevron-right" size={24} />
              </ContainerIcon> 
            </ContainerOptions>

          </ModalMyAccount>
        </ContainerMyAccount>

      <Animated.View style={[animationStyles]}>
        <HeaderMyAccount >
          <TitleMyAccount>Ajuda e duvidas frequentes</TitleMyAccount>
          <Animated.View style={animationStylesHelpRotateArrow}>
              <ContainerIcon onPress={() => 
              toggleAnimations(50, animationHelp, -180, animationHelpArrow)}
            >
                <IconFe name="chevron-up" color="#fff"/>
              </ContainerIcon>
            </Animated.View>
        </HeaderMyAccount>

        <Animated.View style={[styles.container, animationStylesHelp]}>
          <ContainerOptions onTouchStart={handleLogout}>
            <TitleOptions style={{ color: '#f44336', fontFamily: 'Roboto_500Medium'}}>Sair</TitleOptions>
            <ContainerIcon style={{ marginRight: 10}} onPress={handleLogout}>
              <IconFe name="power" size={15} color="#f44336"/>
            </ContainerIcon>
          </ContainerOptions>
          <ContainerSelectLanguage>
            <SelectLanguage/>
          </ContainerSelectLanguage>
        </Animated.View>
        
      </Animated.View>
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '500px',
    backgroundColor: '#fff',
  }
})
export { Account };