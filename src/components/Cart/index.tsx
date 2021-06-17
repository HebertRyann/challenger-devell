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
} from './styles'

interface CartProps {
  id: string;
  name: string;
  price: number;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartProps[]>([
    { id: '1', name: 'jogo', price: 5000  },
    { id: '2', name: 'jogo2', price: 10000  },
  ]);
  return (
    <Container>
      <Header>
        <IconFe size={20} name="chevron-left" />
        
        <TitleHeader>
          Carrinho
        </TitleHeader>

        <IconFe size={20} name="chevron-right"/>
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