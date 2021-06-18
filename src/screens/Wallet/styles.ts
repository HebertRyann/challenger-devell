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
  background: #fff;

`;

export const TitleHeader = styled.Text`
  font-size: 13px;
  font-family: 'Roboto_500Medium';
  color: #575757;
`;

export const IconFe = styled(Feather)``;

export const IconFa = styled(FontAwesome5)``;

export const ContainerIcon = styled.TouchableOpacity`
  margin-left: 30px;
  margin-right: 110px;
`;

export const ContainerValue = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  flex-direction: row;
  height: 52px;
  border: 1px solid rgba(0,0,0,0.2);
`;

export const Value = styled.Text`
  font-size: 16px;
  color: #3bbdb4;
  font-family: 'Roboto_500Medium';
`;

export const ContainerTransactions = styled.View`
`;

export const TextEmpty = styled.Text`
  text-align: center;
  font-size: 13px;
  font-family: 'Exo_600SemiBold';
  color: #6c757d;
`;

export const Transaction = styled.View`
  width: 93%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 64px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  border-radius: 3px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: 'Roboto_500Medium';
  color: #788693;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-family: 'Roboto_400Regular';
  color: #575757;
`;

export const TitleTrasanction = styled.Text`
  font-size: 16px;
  font-family: 'Roboto_400Regular';
`;



