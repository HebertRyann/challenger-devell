import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  height: 52px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

export const IconFe = styled(Feather)``;

export const IconFa = styled(FontAwesome5)``;

export const TitleHeader = styled.View``;

export const ContainerProfile = styled.View`
  flex: 1;
  margin-top: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageBackground = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: turquoise;
`;

export const TitleName = styled.View``;

export const ContainerChangeInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  width: 100%;
`;

export const Input = styled.TextInput`
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  height: 64px;
  padding-left: 15px;
  width: 90%;
  border-radius: 3px;
  background: #fff;
`;

export const Button = styled.TouchableOpacity`
  margin: 30px 0;
  width: 150px;
  height: 56px;
  background: turquoise;
  align-items: center;
  justify-content: center;
`;
