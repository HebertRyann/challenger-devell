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
  margin-top: 15px;
  margin-bottom: 56px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 54px;
  border-radius: 2px;
  background: turquoise;
  margin-bottom: 56px;
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

export const PrefixInput = styled.Text`
  font-size: 13px;
  font-weight: 400;
`;

export const ButtonIHave = styled.View`
  width: 90%;
  height: 34px;
  border-radius: 2px;
  border: 1px solid #cbcbcb;
  align-items: center;
  justify-content: center;
`;

export const TextIHaveButton = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #9e9e9e;
`;

export const ContainerIcon = styled(BorderlessButton)`
  margin-left: 25px;
  margin-top: 20px;
`;

