import { StyleSheet } from "react-native"
import { cores } from "./variaveis";
import { fontes } from "./variaveis";

const detalhesProdutoStyles = StyleSheet.create({
    conteudo: {
        marginTop: 50,
        marginBottom: 30,

    },
    header: {
        width: '80%',
        margin: 'auto',
    },
    conteudoHeader: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',

    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: cores.preto,
        textAlign:'center',
        fontFamily: fontes.negrito,
    },
    btnFavorito: { 
        right: 5,
        width: 50,
        height: 50,
        backgroundColor: cores.branco,
        borderRadius: 50,
    },
    iconeFavorito: {
        fontSize: 50,
        color: cores.laranjo,
        top: -15,
        right: -5,
    },
})

export default detalhesProdutoStyles;