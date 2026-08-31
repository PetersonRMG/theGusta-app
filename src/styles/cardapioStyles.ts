import { StyleSheet } from "react-native"
import { cores } from "./variaveis";
import { fontes } from "./variaveis";

const cardapioStyle = StyleSheet.create({
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
        fontFamily: fontes.negrito,

    },
    bordaPerfil: {

    },
    perfil: {
        width: 70,
        height: 70,
    },
    subtitulo: {
        marginTop: 10,
        fontSize: 18,
        color: cores.cinza,


    },
    main: {
        width: '80%',
        alignItems: 'center',
        margin: 'auto',
        marginTop: 30,
    },
    buscarProduto: {
        width: '100%',
        height: 50,
        backgroundColor: cores.laranjoClaro,
        borderColor: cores.laranjo,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
    },
    txtProduto: {
        marginVertical: 'auto',
        color: cores.preto,
        fontSize: 15,
        width: '100%',
    },
    btnBuscar: {
        width: 30,
        height: 30,
    },
    icone: {
        width: '100%',
        height: '100%',
    },
    conteudoCategoria: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:25,

    },
    itemCategoria: {
        width: 55,
        height: 55,
        borderRadius: 10,
        borderColor: cores.laranjo,
        backgroundColor: cores.laranjoClaro,
        borderWidth: 2,
        paddingVertical: 3,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    imgCategoria: {
        width: 30,
        height: 30,
    },
    txtCategoria: {
        fontSize: 11,
        fontFamily: fontes.comum,
        color: cores.cinza,
    },
    categoria: {
        marginTop: 20,
        width:'100%',
    },
    tituloCategoria: {
        fontSize: 20,
        fontFamily: fontes.negrito,
    },
    produtos: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginVertical: 10,
        gap:'4%',
        
    },
    itemProduto: {
        width: '48%',
        height: 150,
        borderRadius: 10,
        borderColor: cores.laranjo,
        borderWidth: 2,
        alignItems: 'center',
      backgroundColor:cores.branco
    },
    caixaImagem: {
        width: '100%',
    },
    imgDestaque: {
        width: '100%',
        height: 70,
    },
    btnFavorito: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 20,
        height: 20,
        backgroundColor: cores.branco,
        borderRadius: 50,
    },
    iconeFavorito: {
        fontSize: 20,
        color: cores.laranjo,
        top: -6,
        right: -2,
    },
    nomeProduto: {
        fontSize: 12,
        fontFamily: fontes.negrito,
        color: cores.preto,
        textAlign: 'center',
    },
    descricaoProduto: {
        fontSize: 8,
        fontFamily: fontes.medio,
        color: cores.cinza,
        textAlign: 'center',
        paddingBlock: 2,
    },
    valorContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginTop:10,
    },
    valorProduto: {
        fontSize: 12,
        fontFamily: fontes.negrito,
        color: cores.laranjo,
        textAlign: 'left',
    },
    btnAdicionar: {
    },
    imgAdicionar: {
        height: 20,
        width: 20,

    },
    
});
export default cardapioStyle;