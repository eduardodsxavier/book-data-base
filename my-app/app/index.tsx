import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

export default function Index() {
    const navigation = useNavigation();
    const irParaTelaInicial = () => {
        navigation.navigate("Main/main"); //Tem erro mas funciona!
    };
    return (
        <View style={styles.container}>
            <View style={styles.containerMenu}>
                <Text style={styles.logo}>Bdb</Text>
            </View>
            <View style={styles.loginBox}>
                <View style={styles.topBox}>
                    <Text style={styles.login}> Login</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={(irParaTelaInicial)}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <Link href={"redefinir"} style={styles.senha}>esqueceu sua senha?</Link>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#C2AB89",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginBox: {

        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        width: '90%',
        padding: 20,
        backgroundColor: "#AA9679",
        borderRadius: 10,
        shadowColor: 'rgba(103, 42, 21, 0.99)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1.0,
        shadowRadius: 10,
        elevation: 5,
    },
    login: {
        color: '#261207',
        alignSelf: 'center',
        fontFamily: "Inknut-Antiqua",
        fontSize: 25,

    },

    input: {
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.44)',
        height: 40,
        width: '75%',
        borderColor: 'rgba(103, 42, 21, 0.25)',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',

    },
    button: {
        width: '25%',
        alignSelf: 'center',
        backgroundColor: 'rgba(103, 42, 21, 0.28)',
        paddingVertical: 10,
        borderRadius: 20,

    },
    buttonText: {
        color: 'rgba(0, 0, 0,)',
        fontFamily: "Inknut-Antiqua",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,

    },
    topBox: {
        shadowColor: 'rgba(87, 42, 21, 1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        marginBottom: 20,
        backgroundColor: 'rgba(103, 42, 21, 0.4)',
        width: '100%', // Define a largura da div como 100% da largura do loginBox
        height: '100%',
        flex: 1,

    },
    senha: {
        alignSelf: 'center',
        marginTop: 20,
        fontFamily: "Inknut-Antiqua",

    },
    containerMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '7%',
        backgroundColor: '#572A15',
        padding: 5,
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
});
