import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const TitlePage = styled.Text`
  font-size: 4rem;
  margin-top: 164px;
  margin-bottom: 146px;
  font-family: 'Roboto_400Regular';
`;

export const WrapperContent = styled.View`
  align-items: center;
  margin-bottom: 64px;
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

export const Link = styled.Text`
  color: #3bbdb4;
`;
