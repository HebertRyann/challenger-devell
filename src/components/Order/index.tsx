import React from 'react'
import { useState } from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  Header,
  TitleHeader,
  IconFe,
  IconFa,
  ContainerEmpty,
  TextCart,
  ContainerListItems,
  Product,
  ImageBackground,
  ContainerInfo,
  TitleProduct,
  PriceProduct
} from './styles';

interface OrdersProps {
  id: string;
  name: string;
  price: string;
}



const Order: React.FC = () => {
  const [orders, setOrders] = useState<OrdersProps[]>([]);
  return (
    <Container>

      <Header>
        <IconFe size={20} name="chevron-left" />
        
        <TitleHeader>
          Pedidos
        </TitleHeader>

        <IconFe size={20} name="chevron-right"/>
      </Header>

      {orders.length <= 1 ? (
        <ContainerEmpty>
          <IconFa name="sad-tear" size={150}/>
          <TextCart>Seu carrinho está vazio</TextCart>
        </ContainerEmpty>
      ) : (
        <ContainerListItems>
          <FlatList 
            data={orders}
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
export { Order };