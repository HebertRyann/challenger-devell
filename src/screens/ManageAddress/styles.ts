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
  margin-bottom: 30px;
  padding: 0 20px;
  background: #fff;
  font-size: 13px;
  font-family: 'Roboto_500Medium';
  color: #575757;
`;

export const TitleHeader = styled.View`
`;

export const ContainerAddress = styled.View`
  flex: 1;
  width: 97%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const TextEmpty = styled.View`
  margin-top: -230px;
`;

export const Address = styled.View`
  flex-direction: column;
  height: 70px;
  width: 100%;
  background: #fff;
  padding: 10px;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

export const Title = styled.View`
  margin: 3px 0;
  font-family: 'Exo_400Regular';
  font-size: 11px;
`;

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 52px;
  background: #3bbdb4;

`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: 'Roboto_500Medium';
  font-size: 15.6px;
`;
export const Number = styled.Text`
  margin-right: 100px;
  font-family: 'Exo_600SemiBold';
  font-size: 13px;
`;
export const Cep = styled.Text`
  font-family: 'Exo_400Regular';
  font-size: 11px;
`;
export const AddressHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;




