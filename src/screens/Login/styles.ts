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

export const Arrow = styled.View`
`;

export const Title = styled.Text`
  font-size: 4rem;
  margin: 20px 0;
`;

export const SubTitle = styled.Text`
  font-size: 16.9px;
  font-family: 'Roboto_700Bold';
`;

export const Complemetary = styled.Text`
  font-size: 13;
  margin-top: 5px;
  font-family: 'Roboto_400Regular'; 
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  padding: 5px;
  font-size: 13px;
  background: #fff;
  color: #9e9e9e;
  font-family: 'Roboto_400Regular';
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 54px;
  border-radius: 2px;
  background: turquoise;
  font-size: 1.2rem;
  font-weight: 600;
  background: #3bbdb4;
`;


export const TextOtherOption = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-family: 'Exo_400Regular';
`;
export const TextOther = styled.Text`
  text-align: center;
  color: #bdbdbd;
  font-size: 13px;
  font-weight: 400;
  margin: 0 2px;

`;

export const ContainerSignUp = styled.View`
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  font-family: 'Roboto_400Regular';
`;

export const TextSignUp = styled.Text``;

export const Link = styled.Text`
  margin-left: 8px;
  color: turquoise;
`;

export const ContainerForgotPassword = styled.View`
  font-size: 13px;
  font-family: 'Roboto_400Regular';
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

export const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  font-size: 13px;
`;

export const TraceContainer = styled.View`
  width: 30px;
  height: 1px;
  /* background: #bdbdbd;
  color: #bdbdbd; */
`;
export const ButtonSocial = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 36px;
  width: 160px;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  background: #fff;

`;

export const ContainerButtonsSocial = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

`;
export const TextButton = styled.Text`
  font-size: 14px;
  font-family: 'Roboto_400Regular';
`;

export const Icon = styled(FontAwesome5)`
`;

export const ContainerIcon = styled(BorderlessButton)`
  margin-left: 25px;
  margin-top: 20px;
`;

