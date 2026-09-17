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
    areaVenda: {
        marginTop: 20,
        marginVertical: 10,
        width: '100%',
     
  
    },

    linhaQtdeSubtotal: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
    },

    caixaQtde: {
        flexDirection: "row",
        width: 120,
        height: 50,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: cores.laranjo,
        paddingHorizontal: 12,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: cores.branco,

    },

    btnQtde: {
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    imgQtde: {
        width: 20,
        height: 20,
    },

    quantidade: {
        fontSize: 30,
        color: cores.cinza,
        fontFamily: fontes.negrito,
    },

    caixaSubtotal: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        marginLeft: 20,
        gap:5

    },

    txtSubtotal: {
        fontSize: 15,
        color: cores.cinza,
        
    },

    valorSubtotal: {
        fontSize: 30,
        color: cores.laranjo,
        fontFamily: fontes.negrito,

    },

    btnSubtotal: {
        width: '70%',
        height: 30,
        borderRadius: 10,
        backgroundColor: cores.laranjo,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 15,
        paddingVertical:5
    },
    
    txtSacola: {
        fontSize: 15,
        color: cores.preto,
        fontFamily: fontes.negrito,
    },


})

export default detalhesProdutoStyles;