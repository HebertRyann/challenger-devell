import React from "react";
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import {
  Container,
} from './styles';
import { Input } from "../Input";

interface InputFormProps extends TextInputProps{
  control: Control;
  name: string;
}

const InputForm: React.FC<InputFormProps> = ({ defaultValue, control, name, ...rest }) => {
  return (
    <Container >
      <Controller 
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value }}) => (
          <Input 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...rest}
            secureTextEntry={name === 'password'} 
          />
        )}
        
      />
    </Container>
  );
};
export { InputForm };