import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 33%;
  background: turquoise;
`;

export const Title = styled.Text`
  font-size: 4rem;
  margin: 20px 0;
`;

export const SubTitle = styled.Text`
  font-size: 16.9px;
  font-weight: 700;
`;

export const Complemetary = styled.Text`
  font-size: 13px;
  font-weight: 400;
  margin-top: 5px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  padding: 5px;
  font-size: 13px;
  background: #fff;
  font-family: 'Roboto_500Medium';
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 54px;
  border-radius: 2px;
  background: turquoise;
`;






export const ContentHeader = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const ContentDescription = styled.View`
  text-align: center;
  margin-bottom: 20px;
`;

export const ContainerForm = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
`;



export const TextButton = styled.Text`
  font-size: 13px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
`;

export const Icon = styled(FontAwesome5)`
  margin-top: 20px;
  margin-left: 20px;
`;

export const ContainerPhoneInput = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  background: #fff;
`;

export const PrefixInput = styled.Text`
  font-size: 13px;
  font-weight: 400;
`;

export const ContainerIcon = styled(BorderlessButton)`
  margin-left: 10px;
  margin-top: 10px;
`;