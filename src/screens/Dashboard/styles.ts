import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

interface IconProps {
  isSelected: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  overflow: auto;
  background: #f8f9fa;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  padding-left: 20px;
  padding-right: 10px;
  background: #fff;
`;

export const Title = styled.View`
  font-family: 'Roboto_500Medium';
`;

export const TextLocation = styled.Text`
  margin-right: 16px;
`;

export const ContentInfo = styled.Text`
  flex-direction: row;
  align-items: center;

`;

export const ContainerInput = styled.View`
  width: 94%;
  flex-direction: row;
  align-items: center;
  height: 56px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  justify-content: space-between;
  padding: 0 20px;
  border-radius: 5px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  background: #fff;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: 13px;
  color: #ababab;
  font-family: 'Roboto_500Medium';
`;

export const ContainerIcon = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
`;

export const ContainerResults = styled.View`

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px #eee;
  height: 88px;
  background: #f8f9fa;
`;

export const HeaderResults = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
`;

export const ButtonResults = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  align-content: center;
  justify-content: center;
  color: turquoise;
  text-align: center;
  height: 34px;
  font-size: 0.9rem;
  min-width: 110px;
  transition: all 0.25s ease-in-out;
`;

export const ContainerSuggestions = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: baseline;
  width: 100%;
  padding-left: 15px;
  margin-bottom: 56px;
`;

export const Suggestion = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-family: 'Roboto_400Regular';
`;

export const ContainerRestaurants = styled.View`
  padding-left: 15px;
  margin-bottom: 60px;
`;

export const Restaurant = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
  font-family: 'Roboto_400Regular';
`;

export const Footer = styled.View`
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  bottom: 0px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  padding: 10px 20px;
  width: 100%;
  height: 70px;
  left: 2.5px;
  background: #fff;
`;

export const ContainerItem = styled.View`
  align-items: center;
`;

export const TitleItem = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 600;
`;

export const TitleResult = styled.Text`
  max-width: 130px;
  font-size: 11px;
  font-family: 'Exo_700Bold';
  margin-left: 15px;
  margin-right: 20px;
`;

export const TextButtonResult = styled.Text`
  margin-right: 8px;
  font-size: 11px;
`;

export const ImageBackfround = styled.View`
  width: 80px;
  height: 80px;
  background: turquoise;
  border-radius: 3px;
`;

export const TitleSuggestion = styled.View`
  text-align: center;
  max-width: 80px;
`;

export const WrapperContainerResults = styled.View`

  padding-top: 30px;
  margin-top: 50px;
  background: #fff;
`;

export const ContentDetails = styled.View`
  margin-left: 56px;
`;

export const TitleFood = styled.Text``;

export const TextPrice = styled.Text``;

