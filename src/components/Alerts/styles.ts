import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  margin-bottom: 10px;
`;

export const TitleHeader = styled.View`
  
`;

export const IconFe = styled(Feather)``;

export const IconFa = styled(FontAwesome5)``;

export const TextNoAlert = styled.View``;

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

export const ContainerIcon = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 150px;
`;

export const ContainerAlign = styled.View`
  flex: 1;
  align-items: center;
  justify-content: start;
  margin-top: 85px;
`;




