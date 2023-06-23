
import Movies from '../../components/card'
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native-web';
import { ScrollView, StyleSheet } from 'react-native';

export default function MoviesPage() {

    let [filmes, setFilmes] = useState([]);

    const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

    useEffect(function () {
        fetch(baseURL)
            .then(data => data.json())
            .then(objeto => {
                console.log(objeto);
                setFilmes(objeto.data);
            })
    }, []);

    return (
        <SafeAreaView style={styles.container}>

            {filmes.length > 0 ? <ScrollView horizontal>
                {filmes.map(filme =>
                    <Movies key={filme.id} filme={filme.attributes}></Movies>)}
            </ScrollView> :
                <ActivityIndicator size={'large'} />}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    }
})