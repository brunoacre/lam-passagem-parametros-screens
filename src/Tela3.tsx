import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Tela3({ texto }: any) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>Minhas Apostas</Text>
        <Text>Texto vindo da Aba 2: {texto}</Text>
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