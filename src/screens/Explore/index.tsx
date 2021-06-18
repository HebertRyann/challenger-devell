import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  Icon,
  Input,
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

const searchData: SearchDataProps[] = [
  { name: 'pao', description: 'Muito bom', price: 12.00 },
  { name: 'pao', description: 'Muito bom', price: 12.00 },
  { name: 'pao', description: 'Muito bom', price: 12.00 },
  { name: 'pao', description: 'Muito bom', price: 12.00 },
  { name: 'pao', description: 'Muito bom', price: 12.00 },
];

const Explore: React.FC = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [searchDataFiltered, setSearchDataFiltered] = useState<SearchDataProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    const stringRegex = new RegExp(`${inputValue}\\w.*?`,'ig');
    const matchs = searchData.filter(item => item.name.match(stringRegex));
    setSearchDataFiltered(matchs);
  };

  useEffect(() => {
    setIsOpen(true);
    handleSearch()
  }, [inputValue]);

  return (
    <Container>
      <Header>
      < ContainerIcon onPress={() => navigation.goBack()}>
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

      {isOpen && searchDataFiltered.length >= 1 ? (
          <ContainerResults>
            <FlatList
              data={searchDataFiltered}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <Product>
                  <ImageBackground />
                  <ContainerInfo>
                    <TitleProduct>{item.name}</TitleProduct>
                    <DescriptProduct>{item.description}</DescriptProduct>
                  </ContainerInfo>
                  <PriceProduct>{item.price}</PriceProduct>
                </Product>
              )}
            />
          </ContainerResults>
      ) : (
        <ContainerEmpty>
          <TextEmpty>Não Ha nada aqui</TextEmpty>
          <IconFa name="cookie-bite" size={150} color="brown"/>
        </ContainerEmpty>
      )}

    </Container> 
  )
};
export { Explore };