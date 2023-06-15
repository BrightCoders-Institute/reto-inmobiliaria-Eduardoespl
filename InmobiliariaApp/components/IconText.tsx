import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconTextProps = {
  iconName: string;
  text: string | number;
};

export default function IconText({iconName, text}: IconTextProps): JSX.Element {
  return (
    <Text style={styles.iconText}>
      <Icon name={iconName} size={20} color="#999" />
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  iconText: {
    fontSize: 16,
    color: '#151525',
  },
});
