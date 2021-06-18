import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  Header,
  IconFe,
  TitleHeader,
  ContainerEmpty,
  Icon,
  TextCart,
  Product,
  ImageBackground,
  ContainerInfo,
  TitleProduct,
  DescriptProduct,
  PriceProduct,
  ContainerListItems,
  ContainerIcon,
} from './styles'

interface CartProps {
  id: string;
  name: string;
  price: number;
}

const Cart: React.FC = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useState<CartProps[]>([
    { id: '1', name: 'jogo', price: 5000  },
    { id: '2', name: 'jogo2', price: 10000  },
  ]);
  return (
    <Container>
      <Header>
        <ContainerIcon onPress={() => navigation.goBack()}>
          <IconFe size={20} name="chevron-left" />
        </ContainerIcon>
        
        <TitleHeader>
          Carrinho
        </TitleHeader>

        <ContainerIcon onPress={() => navigation.navigate('início')}>
          <IconFe size={20} name="home" />
        </ContainerIcon>
      </Header>


      {cart.length <= 1 ? (
        <ContainerEmpty>
          <Icon name="sad-tear" size={150}/>
          <TextCart>Seu carrinho está vazio</TextCart>
        </ContainerEmpty>
      ) : (
        <ContainerListItems>
          <FlatList 
            data={cart}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Product>
                <ImageBackground />
                <ContainerInfo>
                  <TitleProduct>{item.name}</TitleProduct>
                </ContainerInfo>
                <PriceProduct>{item.price}</PriceProduct>
              </Product>
            )}
          />
        </ContainerListItems>
      )}

    </Container>
  );
};

export { Cart };