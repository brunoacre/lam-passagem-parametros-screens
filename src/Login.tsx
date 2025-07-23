import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }: any) {

    //const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (nome.trim() === '' || senha.trim() === '') {
            alert('Preencha todos os campos');
            return;
        }
        // verificar senhha
        navigation.replace('TabsRoutes', { teste: nome });
    };

    return (
        <View style={styles.center}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome} />

            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <Button title="Entrar" onPress={entrar} />
        </View>
    );
}

const styles = StyleSheet.create({
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