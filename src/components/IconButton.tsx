import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export interface IconButtonProps {
  iconName: string;
  onClick: () => void;
}

export const IconButton = ({ iconName, onClick }: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Icon name={iconName} size={30} color={'white'} />
    </TouchableOpacity>
  );
};
