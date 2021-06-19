import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 100vh;
  width: 100vw;
  background: #f5f5f5;
  position: relative;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 10px;
  height: 52px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

export const IconFe = styled(Feather)``;

export const Input = styled.TextInput``;


export const TitleHeader = styled.View`
  font-size: 13px;
  font-family: 'Roboto_500Medium';
  color: #575757;
`;

export const ContainerEmpty = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const IconFa = styled(FontAwesome5)``;

export const TextCart = styled.Text`
  font-size: 1.5rem;
  font-weight: 500;
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
`;
export const ContainerListItems = styled.View`
`;
export const ContainerIcon = styled(BorderlessButton)``;


