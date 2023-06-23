import { Text, TextInput, TouchableOpacity, Image, View  } from "react-native-web";
import { StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";

export default function ForgetPasswordPage()
{
    return (
        <View style={styles.container}>

            <Image source={require('../../assets/imgs/logo.png')}  style={styles.Logo} />

            <TextInput
            placeholder="Insira seu email" 
            style={styles.input} />

            <TouchableOpacity style={styles.btnLogin}>
                <Text>Recuperar</Text>
            </TouchableOpacity>
            <View style={styles.viewLink}>
                <Link to={{screen:"RegisterPage"}}>Registre-se</Link>
                <Link to={{screen:"LoginPage"}}>Voltar para o login</Link>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'gray'
    },

    Logo: {
        height: '150px',
        width: '150px',
        marginBottom: 15
    },

    input: {
        border: '1px solid black',
        width: '70%',
        height: 40,
        padding: 5,
        marginBottom: 10,
        color: 'white',
        borderRadius: 5
    },

    btnLogin: {
        border: '2px solid black',
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'lightgray'
    },
    viewLink: {
        marginTop: 10,
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between'
    }
})