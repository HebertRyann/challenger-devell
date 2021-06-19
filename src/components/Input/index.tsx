import React from "react";
import { TextInputProps } from 'react-native';

import {
  Container
} from './styles';

interface InputProps extends TextInputProps{
}

const Input: React.FC<InputProps> = ({ style,...rest }) => {
  return (
    <Container {...rest} style={[style, {   outline: 'none' }]}/>
  )
};
export { Input };