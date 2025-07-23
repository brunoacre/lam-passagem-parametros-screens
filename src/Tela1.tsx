import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';


export default function Tela1({ route }: any) {

    const [cidade, setCidade] = useState('');    
    const { ola } = route.params;
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bem-vindo, {ola}!</Text>
        <TextInput placeholder='Cidade... ' value={cidade} onChangeText={setCidade} />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 22,
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
    },
});