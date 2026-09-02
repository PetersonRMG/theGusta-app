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
        flexWrap: 'wrap',
        width: '100%',

    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: cores.preto,
        textAlign: 'center',
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
    img: {
        width: '100%',
        height: 200,
        borderRadius: 20,
    },
    tituloDetalhe: {
        fontFamily: fontes.negrito,
        fontSize: 20,
        color: cores.laranjo
    },
    valorDetalhe: {
        fontFamily: fontes.negrito,
        fontSize: 20,
        color: cores.laranjo
    },
    descricaoDetalhe: {
        color: cores.cinza,
        fontSize: 15,
        alignItems: 'center'
    },
    tituloDescricao: {
        fontFamily: fontes.negrito,
        fontSize: 20,
        color: cores.preto
    },
    caixaQntde: {
        flexDirection: 'row',
        width: 120,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: cores.laranjo,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: cores.branco
    },
    btnQntde: {
        width: 20,
        height: 20
    },
    imgQntde: {
        width: 20,
        height: 20
    },
    quantidade: {
        fontSize: 20,
        color: cores.cinza
    },


})

export default detalhesProdutoStyles;