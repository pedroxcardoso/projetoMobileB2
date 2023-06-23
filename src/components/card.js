import { Link } from "@react-navigation/native";
import { Image, Text, View, TouchableOpacity, Dimensions, StyleSheet } from "react-native"

const imageURL = 'https://api.otaviolube.com';

const MAX_WIDTH = Dimensions.get('window').width * 0.9
const MAX_HEIGHT = Dimensions.get('window').height * 0.9

export default function Movies({ filme }) {
  return (
    <View style={styles.container}>
    
      <Image style={styles.poster} source={{ uri: imageURL + filme.poster.data.attributes.formats.small.url }}></Image>
      <Text style={styles.titulo} >{filme.titulo}</Text>
      <Text style={styles.sinopse}>Sinopse: {filme.sinopse.length > 200 ? filme.sinopse.substring(0, 200) + "..." : filme.sinopse}</Text>
      <Link to={{ screen: 'MoviesDetailsPage', params: {filme: filme}}} >Saiba mais...</Link>
    
        <Link style={styles.but} to={{ screen: 'Comprar', params: {filme: filme}}} >Comprar ingresso</Link>
     
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'grey',
    margin: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: MAX_HEIGHT,
    width: MAX_WIDTH
  },

  but: {
    backgroundColor: 'red',
    padding: 5,
    fontSize: '15px',
    marginTop: '5%',
    borderWidth: '5px',
    paddingHorizontal: '6%',
    color: 'white'
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

  poster: {
    width: '150px',
    height: '200px',
    marginTop: 10,
    resizeMode: 'cover'
  },

  button: {
    height: 40,
    width: 300,
    borderRadius: 25,
    backgroundColor: 'black',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }

});