import React, { useState } from "react";
import { StyleSheet } from "react-native"
import { useEffect } from "react";
import MapView from "react-native-maps";
import { getCurrentPositionAsync } from 'expo-location';
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  Container,
  Header,
  Icon,
  Input,
  ContainerCurrentPosition,
  TextCurrentPosition,
  ContainerPopularPlace,
  TitlePopularPlace,
  ModalSearch,
  ButtonSelectLocation,
  TextButton,
  TextComplementary,
} from './styles';

interface LocationProps {
  title?: string;
  complementary?: string;
  latitude: number;
  longitude: number;
}

const locations = [
  {title: 'São Cristovão', complementary: 'Bahia, Brasil', latitude: -12.90833107157014, longitude: -38.351212257873975},
  {title: 'Itapuã', complementary: 'Bahia, Brasil',latitude: -12.969807219119513, longitude: -38.474624973214816},
  {title: 'Shopping da Bahia', complementary: 'Bahia, Brasil',latitude: -12.980533929512541, longitude: -38.460892064052985},
  {title: 'Shopping Bela Vista', complementary: 'Bahia, Brasil',latitude: -12.944677162842433, longitude: -38.36945153155669},
  {title: 'Salvador Norte Shopping', complementary: 'Bahia, Brasil',latitude: -12.95296222717981, longitude: -38.62145782664725},
  {title: 'Capim Grosso', complementary: 'Bahia, Brasil',latitude: -11.378906216983145, longitude: -40.01296016924075},
]

const Delivery: React.FC = () => {
  const [location, setLocation] = useState<LocationProps>({
    latitude: 0,
    longitude: 0
  });
  const [locationsFiltered, setLocationsFiltered] = useState<LocationProps[]>([]);
  const [inputLocationValue, setInputLocationValue] = useState('');
  const [isOpenModalSearch, setIsOpenModalSearch] = useState(false);
  const toggleModalSearch = () => {
    setIsOpenModalSearch(!isOpenModalSearch);
  };
  const handleGetCurrentPosition = async () => {
    const { coords } = await getCurrentPositionAsync();
    setLocation({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };
  const handleSetCurrentLocation = (location: LocationProps) => {
    setLocation(location);
  };

  const handleSearchLocation = () => {
    const stringRegex = new RegExp(`${inputLocationValue}\\w.*?`,'ig');
    const matchs = locations.filter(item => item.title.match(stringRegex));
    setLocationsFiltered(matchs);
  };

  useEffect(() => {
    handleSearchLocation()
  }, [inputLocationValue]);
  return (
    <Container>
      <Header>
        <Icon name="chevron-left" size={24} color="#bdbdbd"/>
        <Input 
          placeholder="Pesquise sua área..." 
          onChangeText={(text) => setInputLocationValue(text)}
          value={inputLocationValue}
          onTouchStart={toggleModalSearch}
        />

        {/* <GooglePlacesAutocomplete
          placeholder="Pesquise sua área..."
          onPress={() => {}}
          query={{
            key: 'AIzaSyAPm1nItKtdfuFFcnfePxxxM1p5UyUIbR4',
            language: 'pt-BR'
          }}
          textInputProps={{
            autoCapitalize: 'none',
            autoCorrect: false
          }}
          requestUrl={{
            useOnPlatform: 'all',
            url: 'https://maps.googleapis.com/maps/api'
          }}
          fetchDetails
          enablePoweredByContainer={false}
        /> */}
        <Icon name="search" size={24} color="#bdbdbd" />
      </Header>
      {isOpenModalSearch && (
          <ModalSearch >
            {locationsFiltered.map((location) => (
              <ButtonSelectLocation onPress={() => handleSetCurrentLocation({
                latitude: location.latitude,
                longitude: location.longitude
              })} 
              key={location.title}
              style={{
                
                borderBottomWidth: 1,
                borderBottomColor: '#000'
              }}
              >
                <TextButton>{location.title}</TextButton>
                <TextComplementary>{location.complementary}</TextComplementary>
              </ButtonSelectLocation>
            ))}
          </ModalSearch>
        )}

      <ContainerCurrentPosition onPress={handleGetCurrentPosition}>
        <Icon name="map-pin" size={13} color="turquoise"/>
        <TextCurrentPosition>Usar local atual</TextCurrentPosition>
      </ContainerCurrentPosition>

      <ContainerPopularPlace>
        <TitlePopularPlace>Locais populares</TitlePopularPlace>
      </ContainerPopularPlace>
      
      {location.longitude !== 0 && (
        <MapView
          style={stylesMap.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          loadingEnabled
        />
      )}
    </Container>
  )
};
const stylesMap = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
})
export { Delivery };
// import React from 'react';
// import MapView from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';

// export default function Delivery() {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });
