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

export const TitleHeader = styled.Text`
`;

export const IconFe = styled(Feather)``;

export const IconFa = styled(FontAwesome5)``;

export const ContainerIcon = styled.TouchableOpacity`
  margin-left: 30px;
  margin-right: 150px;
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

export const Value = styled.Text``;

export const ContainerTransactions = styled.View`
`;

export const TextEmpty = styled.Text``;

export const Transaction = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 64px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  margin-bottom: 20px;
`;

export const Title = styled.Text``;

export const Price = styled.Text``;



