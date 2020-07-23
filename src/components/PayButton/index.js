import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {TouchableWithoutFeedback} from 'react-native';

import {Button,Label} from './styles';

export default function PayButton({onPress, focused}){
  return(
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
          ?['#FFF','#FFF']
          :['#00FC6C','#00AC4A']
        }
        start={[1,0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ?'#000':'#FFF'} 
        /> 
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  )
}