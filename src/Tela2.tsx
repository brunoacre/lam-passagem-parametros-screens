import React from 'react';
import { View, StyleSheet, Text,TextInput } from 'react-native';


export default function Tela2({ texto, setTexto }: any) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>Lista de Times</Text>
        <TextInput placeholder='Teste...' value={texto} onChangeText={setTexto} />
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
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