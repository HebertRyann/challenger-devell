import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  padding: 0 20px;
  background: #fff;
  font-size: 13px;
  font-family: 'Roboto_500Medium';
`;

export const TitleHeader = styled.View`
`;

export const Input = styled.TextInput`
  height: 34px;
  background: #fff;
  padding: 0 10px;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  height: 52px;
  color: #fff;
  background: #3bbdb4;
  text-align: center;
`;

export const ContainerIcon = styled(BorderlessButton)`
`;

export const ContainerForm = styled.View`
  width: 100%;
  height: 50%;
  justify-content: space-between;
  padding: 0 30px;
`;

export const TextButton = styled.View`
  font-size: 15.6px;
  font-family: 'Roboto_500Medium';
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  font-size: 13px;
  font-family: 'Roboto_500Medium';
  color: #9e9e9e;
`;

export const ContainerInput = styled.View``;


export const IconFe = styled(Feather)``;

export const IconFa = styled(FontAwesome5)``;



