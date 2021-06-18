import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  margin-bottom: 10px;
  font-size: 13px;
  font-family: 'Roboto_500Medium';
  color: #575757;
  background: #fff;
`;

export const TitleHeader = styled.View`
  
`;

export const IconFe = styled(Feather)``;

export const IconFa = styled(FontAwesome5)``;

export const TextNoAlert = styled.View`
font-size: 13px;
font-family: 'Exo_600SemiBold';
color: #ccc;
`;

export const Alert = styled.View`
  justify-content: center;
  width: 100%;
  height: 80px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  padding-left: 30px;
  background: #fff;
  margin-bottom: 20px;
`;

export const Title = styled.View`
  margin-bottom: 8px;
`;

export const Content = styled.View``;

export const ContainerIcon = styled(BorderlessButton)`
  margin-left: 20px;
  margin-right: 150px;
`;

export const ContainerAlign = styled.View`
  flex: 1;
  align-items: center;
  justify-content: start;
  margin-top: 85px;
`;




