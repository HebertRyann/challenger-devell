import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { InputForm } from '../../components/InputForm';
import useAuth from "../../hooks/Auth";
import {
  Container,
  Button,
  Header,
  IconFe,
  Input,
  TitleHeader,
  ContainerIcon,
  ContainerForm,
  TextButton,
  Label,
  ContainerInput,
} from './styles';

const EditProfile: React.FC = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const { updateUser, user } = useAuth();
  return (
    <Container>
      <Header>
        <ContainerIcon>
          <IconFe size={20} name="chevron-left" onPress={() => navigation.goBack()}/>
        </ContainerIcon>
        
        <TitleHeader>
          EDITAR PERFIL
        </TitleHeader>

        <ContainerIcon onPress={() => navigation.navigate('início')}>
          <IconFe size={20} name="home" />
        </ContainerIcon>

      </Header>

      <ContainerForm>
        <ContainerInput>
          <Label>Nome</Label>
          <InputForm 
            name="name"
            control={control}
            defaultValue={user.name}
            style={{
              backgroundColor: '#ffffff',
              paddingLeft: 10,              
            }}
          />
        </ContainerInput>

        <ContainerInput>
          <Label>E-mail</Label>
          <InputForm  
            control={control}
            name="email"
            defaultValue={user.email}
            style={{
              backgroundColor: '#ffffff',
              paddingLeft: 10,              
            }}
          />
        </ContainerInput>

        <ContainerInput>
          <Label>Telefone</Label>
          <InputForm  
            control={control} 
            defaultValue={user.phone}
            name="phone"
            style={{
              backgroundColor: '#ffffff',
              paddingLeft: 10,              
            }}
          />
        </ContainerInput>

        <ContainerInput>
          <Label>Senha</Label>
          <InputForm 
            control={control}
            name="password"
            style={{
              backgroundColor: '#ffffff',
              paddingLeft: 10,              
            }}
          />
        </ContainerInput>

        <Button onPress={handleSubmit(updateUser)}>
          <TextButton>ALTERAR</TextButton>
        </Button>

      </ContainerForm>

    </Container>
  );
};

export { EditProfile };