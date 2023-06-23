import { View, Text, StyleSheet, Dimensions } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width * 0.9
const MAX_HEIGHT = Dimensions.get('window').height * 0.9

export default function MovieDetailsPage({ route }){

    const { filme } = route.params

    return(
        <View style = {styles.container}>
            <Text style = {styles.titulo}>{filme.titulo}</Text>
            <Text style = {styles.subtitulo}>{filme.subtitulo}</Text>
            <Text style = {styles.sinopse}>{filme.sinopse}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
      },

    sinopse: {
        color: 'black',
        textAlign: 'justify',
        marginBottom: 10,
    },

    subtitulo: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 5
      },
})