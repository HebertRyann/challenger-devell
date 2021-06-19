import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import { Input }  from '../../components/Input';
import {
  Container,
  Header,
  Icon,
  ContainerResults,
  Product,
  TitleProduct,
  DescriptProduct,
  PriceProduct,
  ContainerEmpty,
  TextEmpty,
  IconFa,
  ImageBackground,
  ContainerInfo,
  ContainerIcon,
} from './styles';

interface SearchDataProps {
  name: string;
  description: string;
  price: number;
}

const Explore: React.FC = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [searchDataFiltered, setSearchDataFiltered] = useState<SearchDataProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Header>
      <ContainerIcon onPress={() => navigation.goBack()}>
          <Icon size={20} name="chevron-left" />
        </ContainerIcon>
        
        <Input 
          placeholder="Pesquise restaurantes e itens..."
          onChangeText={(text) => setInputValue(text)}
          onBlur={() => setIsOpen(false)}
        />

        <ContainerIcon onPress={() => navigation.navigate('início')}>
          <Icon size={20} name="home" />
        </ContainerIcon>
      </Header>

      <ContainerEmpty>
          <TextEmpty>Não Ha nada aqui</TextEmpty>
          <IconFa name="cookie-bite" size={150} color="brown"/>
        </ContainerEmpty>

    </Container> 
  )
};
export { Explore };