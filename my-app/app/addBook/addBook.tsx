import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Link } from 'expo-router';
const App = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [series, setSeries] = useState('');
    const [publisher, setPublisher] = useState('');
    const [pages, setPages] = useState('');
    const [volume, setVolume] = useState('');
    const [readYear, setReadYear] = useState('');
    const [review, setReview] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        console.log({
            title,
            author,
            series,
            publisher,
            pages,
            volume,
            readYear,
            review,
            synopsis,
            rating,
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.coverContainer}>
                <Text style={styles.coverText}>Adicionar Capa</Text>
                <Text style={styles.coverText}>+</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Título"
                value={title}
                onChangeText={setTitle}
            />

            <TextInput
                style={styles.input}
                placeholder="Editora"
                value={publisher}
                onChangeText={setPublisher}
            />

            <TextInput
                style={styles.input}
                placeholder="Autor(a) do livro"
                value={author}
                onChangeText={setAuthor}
            />

            <TextInput
                style={styles.input}
                placeholder="Número de páginas"
                value={pages}
                onChangeText={setPages}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Série"
                value={series}
                onChangeText={setSeries}
            />

            <TextInput
                style={styles.input}
                placeholder="Volume"
                value={volume}
                onChangeText={setVolume}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Ano Lido"
                value={readYear}
                onChangeText={setReadYear}
                keyboardType="numeric"
            />

            <View style={styles.ratingContainer}>
                <Text style={styles.ratingLabel}>Nota</Text>
                <Rating
                    showRating
                    onFinishRating={setRating}
                    style={styles.rating}
                    imageSize={30}
                    ratingColor="#FFD700"
                    ratingBackgroundColor="#BDB76B"
                    startingValue={rating}
                />
            </View>

            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Resenha"
                value={review}
                onChangeText={setReview}
                multiline
                numberOfLines={4}
            />

            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Sinopse do livro"
                value={synopsis}
                onChangeText={setSynopsis}
                multiline
                numberOfLines={4}
            />
            <View style={styles.input}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={{ color: '#2f1a0d', textAlign: 'center' }}>Enviar</Text>
                    <Link href={"/BookPage/bookPage"}></Link>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#C2AB89',
    },
    coverContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        marginBottom: 20,
        backgroundColor: '#ddd',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#999',
    },
    coverText: {
        fontSize: 16,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 25,
        backgroundColor: '#fff',
    },
    textArea: {
        height: 100,
    },
    ratingContainer: {
        marginVertical: 10,
    },
    ratingLabel: {
        fontSize: 16,
        marginBottom: 5,
    },
    rating: {
        alignSelf: 'flex-start',
    },
    button: {
        backgroundColor: '#DABF98',
        color: '#fff',
        padding: 10,
        borderRadius: 13,
    },
});

export default App;

