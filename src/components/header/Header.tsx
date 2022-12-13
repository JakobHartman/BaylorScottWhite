import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { styles } from './Header.styles';

export interface HeaderProps {
  displayText: string;
  navButton?: ReactNode;
}

export const Header = ({ displayText, navButton }: HeaderProps) => {
  return (
    <View style={styles.mainTitleBar}>
      <Text style={styles.titleText}>{displayText}</Text>
      {navButton && <View style={styles.iconButtonView}>{navButton}</View>}
    </View>
  );
};
