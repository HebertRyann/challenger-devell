import React from "react";
import { TextInputProps } from 'react-native';

import {
  Container
} from './styles';

interface InputProps extends TextInputProps{

}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container {...rest} style={{ outline: 'none' }}/>
  )
};
export { Input };