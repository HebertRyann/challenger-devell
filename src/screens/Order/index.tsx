import { useNavigation } from '@react-navigation/native';
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
  PriceProduct,
  ContainerIcon,
} from './styles';

interface OrdersProps {
  id: string;
  name: string;
  price: string;
}



const Order: React.FC = () => {
  const [orders, setOrders] = useState<OrdersProps[]>([]);
  const navigation = useNavigation();
  return (
    <Container>

      <Header>
        <ContainerIcon onPress={() => navigation.goBack()}>
          <IconFe size={20} name="chevron-left" />
        </ContainerIcon>
        
        <TitleHeader>
          Pedidos
        </TitleHeader>

        <ContainerIcon onPress={() => navigation.navigate('início')}>
          <IconFe size={20} name="home" />
        </ContainerIcon>
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