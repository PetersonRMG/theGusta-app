import { StyleSheet } from "react-native";
import { cores, fontes } from "./variaveis";

export const sacolaStyles = StyleSheet.create({
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
        marginTop: 15,
    },
    itemSacola: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: cores.branco,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        justifyContent: 'space-between',
        marginVertical: 5,

    },
    itemImg: {
        margin: 'auto',
        width: '27%',
        height: 60,
        borderRadius: 10,

    },
    centroItem: {
        width: '45%',
    },
    tituloItem: {
        fontSize: 15,
        color: cores.preto,
        fontFamily: fontes.negrito
    },
    descricaoItem: {
        fontSize: 11,
        color: cores.cinza,
    },
    valoresItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    valorUnitItem: {
        fontFamily: fontes.semiNegrito,
        fontSize: 11
    },
    valorTotalItem: {
        fontFamily: fontes.negrito,
        fontSize: 15
    },
    direitaItem: {
        width: '25%',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    btnExcluir: {
        width: 20,
        height: 20,
    },
    imgExcluir: {
        width: 20,
        height: 20,

    },
    caixaQntde: {
        flexDirection: 'row',
        width: 50,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: cores.laranjo,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: cores.branco
    },
    btnQntde: {
        width: 8,
        height: 8
    },
    imgQntde: {
        width: 8,
        height: 8
    },
    quantidade: {
        fontSize: 12,
        color: cores.cinza
    },
    cupom: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: cores.branco,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        justifyContent: 'space-between',
        marginVertical: 5,
        alignItems:'center'
    },
    cupomEsquerdo: {
        width: '70%',
        gap:5,
        
    },
    tituloCupom: {
        color: cores.preto,
        fontSize: 15,
        fontFamily: fontes.negrito
    },
    txtCupom: {
        fontSize: 11,
        color: cores.preto,
        borderBottomWidth: 2,
        borderColor: cores.laranjo,
        height: 20,
        textTransform:'uppercase'
        
    },

    txtAplicar: {
        fontSize: 15,
        fontFamily: fontes.negrito,
        color: cores.laranjo,
        
    },
    endereco: {
        
    },
    imgEndereco: {
        
    },
    infoEndereco: {
        
    },
    tituloEndereco: {
        
    },
    enderecoCompleto: {
        
    },
    telefone: {
        
    },
    entrega: {
        
    },
    tituloEntrega: {
        
    },
    tempoEntrega: {
        
    },
    btnEndereco: {
        
    },
    txtEndereco: {
        
    },


});

