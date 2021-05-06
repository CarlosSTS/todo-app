import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';

/*props vindo de form */

const Input = ({ value = "", onChangeText = "", onSubmitEditing }) => {
  return <TextInput
    style={styles.input}
    placeholder="Crie um novo todo"
    placeholderTextColor="#666"
    value={value}
    onChangeText={onChangeText}
    maxLength={29} //máximo de caracteres
    onSubmitEditing={onSubmitEditing}
    returnKeyType="send"      
  />

}

export default Input;

const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    paddingBottom: Platform.OS === 'ios' ? 15 : null,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  }
})