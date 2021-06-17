import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  height: 52px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

export const IconFe = styled(Feather)``;

export const TitleHeader = styled.View``;

export const ContainerEmpty = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Icon = styled(FontAwesome5)``;

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
