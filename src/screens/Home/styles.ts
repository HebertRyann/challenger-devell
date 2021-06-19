import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
`;

export const TitlePage = styled.Text`
  font-size: 4rem;
  font-family: 'Roboto_400Regular';
  margin-top: 80px;
  color: #fff;
`;

export const WrapperContent = styled.View`
  align-items: center;
  background: #fff;
  width: 100%;
  height: 55%;
  padding-top: 80px;
`;

export const Title = styled.Text`
  font-size: 19px;
  font-weight: 700;
  white-space: pre-wrap;
  font-family: 'Exo_400Regular';
`;

export const SubTitle = styled.Text`
  font-size: 11px;
  font-family: 'Exo_400Regular';
  font-weight: 600;
  margin: 10px 0;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 206px;
  background: #3bbdb4;
  border-radius: 2px;
  padding: 9px 18px;
  font-size: 0.85rem;
  color: #fff;
  font-family: 'Roboto_700Bold';
`;

export const LinkToLogin = styled.Text`
  margin-top: 12px;
  font-size: 13px;
  font-weight: 400;
  font-family: 'Exo_400Regular';
`;

export const ChangeLanguage = styled.Text`
  margin-top: 19px;
`;

export const Link = styled.TouchableOpacity`
  color: #3bbdb4;
`;
