import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  margin-bottom: 10px;
  padding: 0 20px;
  background: #fff;
  font-size: 13px;
  font-family: 'Roboto_500Medium';
  color: #575757;
`;

export const TitleHeader = styled.View`
`;

export const IconFe = styled(Feather)``;

export const IconFa = styled(FontAwesome5)``;


export const ContainerIcon = styled.TouchableOpacity`
`;

export const ContainerPayments = styled.View`
  flex: 1;
  padding: 0 30px;
  margin-top: 36px;
`;

export const Button = styled(RectButton)`
  height: 60px;
  background: #3bbdb4;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Roboto_500Medium';
  font-size: 15.6;
`;

export const Title = styled.View``;

export const ContentPayment = styled.View`
  height: 40px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  border-radius: 3px;
  justify-content: center;
  padding: 0 10px;
  background: #fff;
  color: #000;
  font-family: 'Roboto_500Medium';
  font-size: 13;
`;




