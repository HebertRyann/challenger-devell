import { useNavigation } from "@react-navigation/native";
import React from "react";
import useAuth from "../../hooks/Auth";

import {
  Container,
  Header,
  Title,
  ContentInfo,
  ContainerIcon,
  TextLocation,
  IconFe,
  ContainerAvatar,
  ImageBackground,
  ContainerSelect,
} from './styles';

const SearchModal: React.FC = () => {
  const navigation = useNavigation();
  const { setAvatar } = useAuth();

  const handleSelect = (link: string) => {
    setAvatar(link);
    navigation.goBack();
  }
  return (
    <Container>
      <Header>
        <ContentInfo>
          <TextLocation>
            Escolha seu avatar
          </TextLocation>

          <ContainerIcon onPress={() => navigation.goBack()}>
            <IconFe 
              size={20} 
              name="chevron-right" 
              color="turquoise"
            />
          </ContainerIcon>
        </ContentInfo>
      </Header>

      <ContainerSelect>
        <ContainerAvatar onTouchStart={() => handleSelect("https://freesvg.org/img/Female-Avatar.png")}>
          <ImageBackground source="https://freesvg.org/img/Female-Avatar.png"/>
        </ContainerAvatar>

        <ContainerAvatar onTouchStart={() => handleSelect("https://freesvg.org/img/Female-Avatar-5.png")}>
          <ImageBackground source="https://freesvg.org/img/Female-Avatar-5.png"/>
        </ContainerAvatar>

        <ContainerAvatar onTouchStart={() => handleSelect("https://freesvg.org/img/1375025979.png")}>
          <ImageBackground source="https://freesvg.org/img/1375025979.png"/>
        </ContainerAvatar>

        <ContainerAvatar onTouchStart={() => handleSelect("https://freesvg.org/img/comic-boy.png")}>
          <ImageBackground source="https://freesvg.org/img/comic-boy.png"/>
        </ContainerAvatar>

        <ContainerAvatar onTouchStart={() => handleSelect("https://freesvg.org/img/1376606916.png")}>
          <ImageBackground source="https://freesvg.org/img/1376606916.png"/>
        </ContainerAvatar>

        <ContainerAvatar onTouchStart={() => handleSelect("https://png2.cleanpng.com/sh/dcb9b8196a0e5269b90359cc04015e1b/L0KzQYm3VsI2N6F8iJH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfF3aaVmip9rdYPsfrb6k71kd551jeZucj32f7f7lBFzbV56i9d7LXH5ccXokr02amQ1UalvY3TpRrW7Ub42OWc4T6o7NEG4QoqCUcEzQWMASac7LoDxd1==/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcdf6d41.5163782415299112929152.png")}>
          <ImageBackground source="https://png2.cleanpng.com/sh/dcb9b8196a0e5269b90359cc04015e1b/L0KzQYm3VsI2N6F8iJH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfF3aaVmip9rdYPsfrb6k71kd551jeZucj32f7f7lBFzbV56i9d7LXH5ccXokr02amQ1UalvY3TpRrW7Ub42OWc4T6o7NEG4QoqCUcEzQWMASac7LoDxd1==/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcdf6d41.5163782415299112929152.png"/>
        </ContainerAvatar>
      </ContainerSelect>
    </Container>
  );
};
export { SearchModal };