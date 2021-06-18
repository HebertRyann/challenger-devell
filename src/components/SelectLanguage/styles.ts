import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface CategoryProps {
  isSelected: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 19px;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #282c3f;
  font-family: 'Roboto_400Regular';
`;

export const Arrow = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
`;

export const Categories = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 54px;
  padding: 8px;
  margin-left: 8px;
  overflow: hidden;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  ${props => props.isSelected && css`background: rgba(0,0,0,0.2);`}
`;

export const ContainerModalCategories = styled.View`
  position: absolute;
  width: 150px;
  height: 95px;
  right: 0;
  bottom: -98px;
  border-radius: 2px;
  box-shadow: 5px 10px 8px rgba(0,0,0, 0.2);
`;
export const TitleCategory = styled.Text`

`;

export const CategorySelect = styled.Text`
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid #000;
  font-family: 'Roboto_400Regular';
  color: #575757;
  font-size: 13px;
`;
export const Icon = styled(Feather)`
`;
