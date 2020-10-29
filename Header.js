import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header(props) {
  return (
    <View style={styles.border}>
      <View style={styles.container}>
        <Icon.Button
          name={props.left}
          size={20}
          backgroundColor="#3498DB"
          onPress={props.leftonPress}
        />
        <Text style={styles.text}>{props.text}</Text>
        <Icon.Button
          name={props.right}
          size={20}
          backgroundColor="#3498DB"
          onPress={props.rightonPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: Dimensions.get('window').width,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  border: {
    borderBottomWidth: 4,
    borderBottomColor: '#003366',
  },
  text: {
    color: '#fff',
    fontFamily: 'sans-serif-condensed',
    fontSize: 25,
  },
});
