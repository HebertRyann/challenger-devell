import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  height: 52px;
  justify-content: space-around;
`;

export const Icon = styled(Feather)``;
export const IconFa = styled(FontAwesome5)``;

export const Input = styled.TextInput`
  width: 80%;
  height: 100%;
  padding-left: 15px;
`;

export const ContainerResults = styled.View`
  align-items: center;
  width: 100%;
  height: 50%;

`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;
  width: 100vw;
`;

export const TitleProduct = styled.Text``;

export const DescriptProduct = styled.Text``;

export const PriceProduct = styled.Text``;

export const ContainerEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextEmpty = styled.Text`
  margin-bottom: 80px;
  font-size: 1.7rem;
  font-weight: 500;
`;

export const ImageBackground = styled.View`
  width: 50px;
  height: 50px;
  background: turquoise;
`;
export const ContainerInfo = styled.View`
  flex-direction: column;
  text-align: center;
`;
export const ContainerIcon = styled(BorderlessButton)`
`;

