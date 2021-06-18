import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
`;

export const IconFe = styled(Feather)``;

export const IconFa = styled(FontAwesome5)``;

export const ContainerProfile = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
`;

export const ImageBackground = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: turquoise;
`;

export const TitleName = styled.View`
  margin-bottom: 16px;
  font-size: 2rem;
`;

export const ContentProfile = styled.View``;

export const TextNumber = styled.View``;

export const TextEmail = styled.View``;

export const ContainerMyAccount = styled.View`
  margin-bottom: 24px;
  padding: 0 5px;
`;

export const TitleMyAccount = styled.View``;

export const ButtonOpenModal = styled.View``;

export const ModalMyAccount = styled.View`
  background: #f5f6f7;
`;

export const ContainerOptions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  height: 56px;
`;

export const ContainerAlign = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View``;

export const TitleOptions = styled.View`
  margin-left: 8px;
`;

export const HeaderMyAccount = styled.View`
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #3bbdb4;
  height: 52px;
  padding: 0 10px;
  color: #fff;
`;
export const ContainerIcon = styled.TouchableOpacity`
`;
export const ContainerSelectLanguage = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
`;


