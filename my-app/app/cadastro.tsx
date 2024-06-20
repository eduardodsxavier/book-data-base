import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";


export default function redefinir() {
    return (
        
        <View style={styles.container}>
        <View style ={styles.barratopo}>
        <Text style={styles.logo}>Bdb</Text>
            
        </View>
        <View style= { styles.redefinirbox}>
        
        <View style= { styles.topbox}>
            <Text style = {styles.texto}>Cadastro</Text>
        </View>
            <TextInput     
             style={styles.input}
              placeholder="Nome"
                keyboardType="name-phone-pad"/>
             <TextInput     
             style={styles.input}
              placeholder="Sobrenome"
                keyboardType="name-phone-pad"/>
             <TextInput     
             style={styles.input}
              placeholder="E-mail"
                keyboardType="name-phone-pad"/>
              
            <TouchableOpacity style={styles.button} onPress={() => alert('Cadastro pressed')}>
                    <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
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
    barratopo:{
        position: 'absolute', 
        top: 0, 
        backgroundColor:'#572A15',
        width:'100%',
        height: 40, 
        alignItems: 'center', // Centraliza conteúdo horizontalmente
        shadowColor: 'rgba(87, 42, 21, 1)', // Cor da sombra
        shadowOffset: { width: 0, height: 3 }, // Offset da sombra
        shadowOpacity: 0.9, // Opacidade da sombra
        shadowRadius: 2, // Raio da sombra
        elevation: 5, // Elevação da sombra (apenas para Android)
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 0,
        padding: 25,

       


    },
    redefinirbox:{
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        width: '50%',
        height: 350,
        padding: 40,
        backgroundColor: "#AA9679",
        borderRadius: 10,
        shadowColor: 'rgba(103, 42, 21, 0.99)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1.0,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'flex-start', 
        paddingVertical: 40,
        marginTop: 10, // Espaçamento superior
    
  


    },
    texto:{
        color: '#261207',
        alignSelf: 'center',
        fontFamily: "Inknut-Antiqua",
        fontSize: 25,
        paddingTop: 0, 

    },
    input:{
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.44)',
        height: 40,
        width: 400,
        borderColor: 'rgba(103, 42, 21, 0.25)',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginBottom: 30, 
        padding: 10,
        alignItems: 'center',

    }, 
    button:{
        width: '40%',
        alignSelf: 'center',
        backgroundColor: 'rgba(103, 42, 21, 0.28)',
        paddingVertical: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
         // espaçamento interno superior 
        
    },
    buttonText:{
        flex: 1,
        
        color: 'rgba(0, 0, 0, 1)',
        fontFamily: "Inknut-Antiqua",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,


    },
    letra:{
        marginTop: 30, 
        color: '#261207',
        alignSelf: 'center',
        fontFamily: "Inknut-Antiqua",
        fontSize: 15,
        

    },
    topbox:{
        shadowColor: 'rgba(87, 42, 21, 1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        marginBottom: 20,
        backgroundColor: 'rgba(103, 42, 21, 0.4)',
        width: '100%', 
        height: '10%',
        
        
        

    },
    logo:{
        color: '#000000',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#A34D10',
        paddingHorizontal: 10,
        borderRadius: 15,


    },



});