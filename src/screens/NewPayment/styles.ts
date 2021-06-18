import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
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
  padding: 0 30px;
  margin-top: -300px;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  height: 150px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  border-radius: 3px;
  background: #fff;
`;

export const Button = styled(RectButton)`
  height: 60px;
  background: #3bbdb4;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Roboto_500Medium';
  font-size: 15.6px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

export const Label = styled.View`
  margin-right: 10px;
  color: #5f5f5f;
  font-family: 'Roboto_500Medium';
  font-size: 13px;
`;

export const Input = styled.TextInput`
  height: 50%;
  width: 90%;
  color: #949494;
  font-size: 13px;
  font-family: 'Roboto_400Regular';
  padding-left: 5px;
`;

export const ContainerNumberCard = styled.View`
  width: 95%;
  margin-top: -200px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  padding: 0 10px;
  height: 40px;
  border-radius: 3px;
`;





