import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const IconFe = styled(Feather)``;

export const IconFa = styled(FontAwesome5)``;

export const ContainerIcon = styled(BorderlessButton)``;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  margin-bottom: 10px;
  padding: 0 20px;
`;

export const TitleHeader = styled.View`
`;

export const ContainerAddress = styled.View`
  align-items: center;
  flex: 1;
`;

export const TextEmpty = styled.View`
  margin-top: -230px;
`;

export const Address = styled.View`
  height: 80px;
  width: 100%;
  background: #fff;
  padding-left: 30px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.View``;

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 52px;
  background: #3db;
`;

export const TextButton = styled.Text`
  color: #fff;
`;




