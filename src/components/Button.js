import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const Button = ({ handlePress }) => {
  return(
  <TouchableHighlight onPress = {() => handlePress('text')}>
    <Text>RN Workshop</Text>
  </TouchableHighlight>
  )
}

export default Button;