import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
    const [searchText, setSearchText] = useState<string>('');
    const navigation = useNavigation();

    const handleSearchChange = (text: string) => {
        setSearchText(text);
        console.log('Texto da pesquisa:', text);
    };

    const voltarTelaInicial = () => {
        navigation.navigate("index"); //Tem erro mas funciona!
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerMenu}>
                <Text style={styles.logo}>Bdb</Text>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquisar Livro..."
                        onChangeText={handleSearchChange}
                        value={searchText}
                    />
                </View>
                <TouchableOpacity style={styles.botaoVoltar} onPress={voltarTelaInicial}>
                    <Text style={styles.textoVoltar}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        backgroundColor: '#572A15',
        padding: 25,
        zIndex: 1,
    },
    logo: {
        color: '#000000',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#A34D10',
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    searchBar: {
        flex: 1,
        backgroundColor: '#C2AB89',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: Platform.OS === 'web' ? 8 : 0,
        marginHorizontal: 10,
        height: Platform.OS === 'web' ? 'auto' : 32,
        maxWidth: 650,
    },
    container: {
        flex: 1,
        backgroundColor: '#C2AB89',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        height: Platform.OS === 'web' ? 'auto' : 15,
        color: '#333333',
        fontSize: 16,
    },
    botaoVoltar: {
        backgroundColor: '#A34D10',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    textoVoltar: {
        color: '#000000',
        fontSize: 30,
        fontFamily: "Inknut-Antiqua",
    },
});

export default Main;
