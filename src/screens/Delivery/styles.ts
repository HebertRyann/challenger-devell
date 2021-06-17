import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 52px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 10px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

export const Icon = styled(Feather)``;

export const Input = styled.TextInput`
  width: 80%;
  height: 100%;
  padding-left: 20px;
  font-size: 1rem;
  color: #575757;
`;

export const ContainerCurrentPosition = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 32px 0;
  padding: 0 15px;
`;

export const TextCurrentPosition = styled.Text`
  margin-left: 8px;
  color: turquoise;
  font-size: 1rem;
  font-weight: 500;
`;

export const ContainerPopularPlace = styled.View`
  padding: 0 15px;
`;

export const TitlePopularPlace = styled.Text`
  color: #6c757d;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const ModalSearch = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-bottom: 100px;
  width: 100%;
  height: 300px;
  background: #fff;
`;

export const ButtonSelectLocation = styled.TouchableOpacity`
  height: 64px;
  justify-content: center;
  padding: 10px 20px;
`;

export const TextButton = styled.Text`
  color: #000;
`;
export const TextComplementary = styled.Text`
  color: #000;
`;

