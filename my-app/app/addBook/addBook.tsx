import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';


const App = () => {
    const navigation = useNavigation();

    const BookPageRedirect = () => {
        navigation.navigate("BookPage/bookPage");
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.coverContainer}>
                <Text style={styles.coverText}>Adicionar Capa</Text>
                <Text style={styles.coverText}>+</Text>
            </TouchableOpacity>
            <View style={styles.containerMenu}>
                <Text style={styles.logo}>Bdb</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Título"
            />

            <TextInput
                style={styles.input}
                placeholder="Editora"
            />

            <TextInput
                style={styles.input}
                placeholder="Autor(a) do livro"
            />

            <TextInput
                style={styles.input}
                placeholder="Número de páginas"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Série"
            />

            <TextInput
                style={styles.input}
                placeholder="Volume"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Ano Lido"
                keyboardType="numeric"
            />

            <View style={styles.ratingContainer}>
                <Text style={styles.ratingLabel}>Nota</Text>
                <Rating
                    showRating
                    style={styles.rating}
                    imageSize={30}
                    ratingColor="#FFD700"
                    ratingBackgroundColor="#BDB76B"
                />
            </View>

            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Resenha"
                multiline
                numberOfLines={4}
            />

            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Sinopse do livro"
                multiline
                numberOfLines={4}
            />
            <View style={styles.input}>
                <TouchableOpacity style={styles.button} onPress={BookPageRedirect}>
                    <Text style={{ color: '#2f1a0d', textAlign: 'center' }}>Enviar</Text>
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
        marginTop: 80,
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
});

export default App;

