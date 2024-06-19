import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BookPage = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>BDb</Text>
                <Text style={styles.menuText}>MENU</Text>
                <Button title="VOLTAR" onPress={() => { }} color="#D2691E" />
            </View>

            <View style={styles.bookContainer}>
                <Image source={require('./trono de vidro.jpg')} style={styles.bookImage}
                />
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>Nota</Text>
                    <View style={styles.stars}>
                        <Text style={styles.star}>★</Text>
                        <Text style={styles.star}>★</Text>
                        <Text style={styles.star}>★</Text>
                        <Text style={styles.star}>★</Text>
                        <Text style={styles.starEmpty}>★</Text>
                    </View>
                </View>
                <Text style={styles.bookTitle}>Trono de Vidro</Text>
                <Text style={styles.bookInformations}>Sarah J Mass</Text>
                <Text style={styles.bookInformations}>Ano: 2013</Text>
                <Text style={styles.bookInformations}>Editora: Galera Record</Text>
                <View style={styles.bookContainer}>
                </View>
                <View style={styles.reviewContainer}>
                    <Text style={styles.reviewTitle}>Resenha</Text>
                    <Text style={styles.reviewText}>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.buttonsContainer}>
                        <text>Editar Resenha</text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsContainer}>
                        <text>SINOPSE</text>
                    </TouchableOpacity>
                </View>
            </View>



        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C2AB89',
    },
    bookInformations: {
        fontSize: 16,
        color: '#000',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#8B4513',
        padding: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    menuText: {
        fontSize: 16,
        color: '#FF9839',
        marginRight: 4
    },
    bookContainer: {
        flexDirection: 'column',
        padding: 10,
    },
    bookImage: {
        width: '80%',
        height: '58%',
        alignSelf: 'center',
    },
    bookDetails: {
        flex: 1,
    },
    bookTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    reviewContainer: {

        padding: 25,
        backgroundColor: '#D2B48C',
        borderRadius: 30,
        width: '80%',
        height: 'auto',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 15,
        borderWidth: 3,
        borderColor: 'rgba(103,42,21,0.50)',

    },
    reviewTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    reviewText: {
        marginTop: 5,
        fontSize: 16,
    },
    ratingContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    ratingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    stars: {
        flexDirection: 'row',
    },
    star: {
        fontSize: 20,
        color: '#FFD700',
    },
    starEmpty: {
        fontSize: 20,
        color: '#B0C4DE',
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: 'rgba(103, 42, 21, 0.28)',
        borderRadius: 25,
        elevation: 5,
        borderWidth: 1,
        borderColor: 'rgba(103,42,21,0.50)',
        marginBottom: 3,

    },
});

export default BookPage;
