import React from 'react';
import { useState } from 'react';
import { ScrollView, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  Title,
  TextLocation,
  ContainerInput,
  Input,
  Icon,
  ContainerResults,
  HeaderResults,
  ButtonResults,
  ContainerSuggestions,
  Suggestion,
  ContainerRestaurants,
  Restaurant,
  Footer,
  ContainerItem,
  TitleItem,
  ContentInfo,
  TitleResult,
  TextButtonResult,
  ImageBackfround,
  TitleSuggestion,
  WrapperContainerResults,
  ContentDetails,
  TitleFood,
  TextPrice,
  ContainerIcon,
} from './styles';

const Dashboard: React.FC = () => {
  const [isSelected, setIsSelected] = useState('buttonResult1');
  const navigation = useNavigation();
  const toggleSelected = (id: string) => {
    setIsSelected(id);
  };
  const handleOpenModal = () => {};
  const foods = [
    { id: '1', name: 'Comida Portuguesa'},
    { id: '2', name: 'Comida Brasileira'},
    { id: '3', name: 'Comida Italiana'},
    { id: '4', name: 'Comida Japonesa'},
    { id: '6', name: 'Comida francesa'},
    { id: '7', name: 'Comida Árabe'},
  ]
  const restaurants = [
    { id: '11', name: 'Dona Janete'},
    { id: '12', name: 'Point da Ju'},
    { id: '13', name: 'Coxinhas e Salgados'},
    { id: '14', name: 'Cacau Show'},
    { id: '15', name: 'Burguer King'},
    { id: '16', name: 'Crush Burguer'},
    { id: '17', name: 'Burguer Premium'},
    { id: '18', name: 'Mc Donald'},
    { id: '19', name: 'Insano Burguer'},
    { id: '20', name: 'Meet Burguer'},
  ]
  return (  
    <Container>
      <Header>
        <Title>
          Commis
        </Title>
        <ContentInfo>
          <ContainerIcon onPress={() => navigation.navigate('delivery')}>
            <TextLocation>
              São Cristovão, N 16
            </TextLocation>
          </ContainerIcon>
          <ContainerIcon onPress={() => navigation.navigate('delivery')}>
            <Icon 
              size={16} 
              name="chevron-right" 
              color="turquoise"
            />
          </ContainerIcon>
        </ContentInfo>
        
      </Header>

      <ContainerInput >
        <Input placeholder="Pesquisar restaurantes e itens..." />
        <Icon name="search" size={16}/>
      </ContainerInput>

      <ContainerResults>
        <TitleResult>NÃO HÀ RESTAURANTES DISPONIVEIS</TitleResult>
        <HeaderResults>
          <ButtonResults
          onTouchStart={() => toggleSelected('buttonResult1')}
          style={{
            borderBottomColor: isSelected === 'buttonResult1' ? '#3bbdb4' : '#f5f5f5',
            borderBottomWidth: 3,
            marginRight: 16,
            backgroundColor: isSelected === 'buttonResult1' ? '#fff' : '#f5f5f5'
          }}
          
          >
            <TextButtonResult
              style={{ marginRight: 5}}
            >
              Delivery
              
            </TextButtonResult>
            {isSelected === 'buttonResult1' && (
                <Icon 
                  name="check-circle" 
                  size={16}
                  color="#3bbdb4"
                />
              )}
          </ButtonResults>
          <ButtonResults
            onTouchStart={() => toggleSelected('buttonResult2')}
            
            style={{
              borderBottomColor: isSelected === 'buttonResult2' ? '#3bbdb4' : '#f5f5f5',
              borderBottomWidth: 3,
              backgroundColor: isSelected === 'buttonResult2' ? '#fff' : '#f5f5f5'
            }}
          >
            <TextButtonResult>
              Retirada no local
              
            </TextButtonResult>
            {isSelected === 'buttonResult2' && (
                <Icon 
                  name="check-circle" 
                  size={16}
                  color="#3bbdb4"
                />
              )}
          </ButtonResults>
        </HeaderResults>
      </ContainerResults>

                
      <WrapperContainerResults>

        <ContainerSuggestions>
          <FlatList
            data={foods}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Suggestion onTouchStart={handleOpenModal}>
              <ImageBackfround />
              <TitleSuggestion>{item.name}</TitleSuggestion>
            </Suggestion>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </ContainerSuggestions>

          <ContainerRestaurants>
            <FlatList
              data={restaurants}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Restaurant>
                  <ImageBackfround/>
                  <ContentDetails>
                    <TitleFood>
                      {item.name}
                    </TitleFood>
                    <TextPrice>O melhor restaurante de todo brasil</TextPrice>
                  </ContentDetails>
                  </Restaurant>
              )}
            />
          </ContainerRestaurants>

        </WrapperContainerResults>

        
    
      {/* <Footer>
        <ContainerItem>
          <Icon name="map-pin" size={20}/>
          <TitleItem>Início</TitleItem>
        </ContainerItem>
        <ContainerItem>
          <Icon name="shopping-cart" size={20}/>
          <TitleItem>Pedidos</TitleItem>
        </ContainerItem>
        <ContainerItem>
          <Icon name="search" size={20}/>
          <TitleItem>Explorar</TitleItem>
        </ContainerItem>
        <ContainerItem>
          <Icon name="shopping-bag" size={20}/>
          <TitleItem>Carrinho</TitleItem>
        </ContainerItem>
        <ContainerItem>
          <Icon name="user" size={20}/>
          <TitleItem>Conta</TitleItem>
        </ContainerItem>
      </Footer> */}

      

    </Container>
  )
};

export { Dashboard };