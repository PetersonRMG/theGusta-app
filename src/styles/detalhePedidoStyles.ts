import { StyleSheet } from "react-native";
import { cores, fontes } from "./variaveis";

export const detalhePedidoStyles = StyleSheet.create({
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
    areaPedido: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: cores.branco,
        color: cores.laranjo,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,

    },
    imgPedido: {
        width: 30,
        height: 30,
    },
    resumoPedido: {

    },
    numeroPedido: {
        fontSize: 15,
        color: cores.laranjo,
        fontFamily: fontes.negrito
    },
    horarioPedido: {
        fontFamily: fontes.comum,
        fontSize: 11,
        color: cores.cinza
    },
    statusPedido: {
        flexDirection: 'row',
        backgroundColor: cores.laranjoClaro,
        height: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        gap: 10
    },
    imgStatus: {
        width: 20,
        height: 20
    },
    txtStatus: {
        fontFamily: fontes.comum,
        fontSize: 11,
        color: cores.laranjo,
    },
    areaAcompanhar: {

        width: '100%',
        backgroundColor: cores.branco,
        color: cores.laranjo,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,

    },
    acompanhamentoPedido: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        margin: 'auto',
    },
    areaIconeEtapa: {
        borderRadius: '50%',
        backgroundColor: cores.cinzaClaro,
        borderColor: cores.cinza,
        borderWidth: 2,
    },
    etapaFinalizada: {
        backgroundColor: cores.verdeClaro,
        borderColor: cores.verde,
    },
    etapaEmAndamento: {
        backgroundColor: cores.laranjoClaro,
        borderColor: cores.laranjo,
    },
    iconeEtapa: {
        width: 30,
        height: 30,
        margin: 10,
    },
    linha: {
        flex: 1,
        height: 2,
        backgroundColor: cores.cinza
    },
    linhaFinalizada: {
        backgroundColor: cores.verde
    },

    linhaEmAndamento: {
        backgroundColor: cores.laranjo
    },

    textoAcompanhar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 'auto',
        width: '100%'
    },
    textoPedido: {
        width: 50,
        textAlign: 'center',
        fontSize: 13,
        fontFamily: fontes.comum,
        color: cores.cinza
    },
    statusAcompanhar: {
        flexDirection: 'row',
        backgroundColor: cores.cinzaClaro,
        borderColor: cores.cinza,
        borderWidth: 2,
        width: '80%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        gap: 10,
        marginTop: 15,
    },
    imgStatusAcompanhar: {
        width: 15,
        height: 15,
    },
    txtStatusAcompanhar: {
        fontFamily: fontes.comum,
        color: cores.cinza,
        fontSize: 11
    }, txtStatusTempo: {
        fontFamily: fontes.comum,
        color: cores.preto,
        fontSize: 12

    },
    resumo: {
        width: '100%',
        backgroundColor: cores.branco,
        color: cores.laranjo,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    topoResumo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%'
    },
    imgResumo: {
        width: '12%',
        height: 30,
    },

    tituloResumo: {
        fontSize: 15,
        color: cores.laranjo,
        fontFamily: fontes.negrito
    },

    infoResumo: {
        width: '65%',
        marginVertical: 5,
        margin: 'auto',


    },
    caixaResumo: {
        width: '100%',
        flexDirection: 'row',
        columnGap: 5,
        justifyContent: 'center'

    },
    imgItemResumo: {
        width: 25,
        height: 20,
        borderRadius: 5
    },
    itemResumo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtResumo: {
        fontSize: 10,

        fontFamily: fontes.negrito
    },
    txtValorResumo: {
        fontSize: 11,
        alignItems: 'flex-end',
        fontFamily: fontes.negrito
    },
    areaSubtotal: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    textSubtotal: {
        fontFamily: fontes.comum,
        fontSize: 10
    },
    valorSubtotal: {
        fontFamily: fontes.negrito,
        fontSize: 10,
        color: cores.preto
    },
    areaEntrega: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    txtEntrega: {
        fontSize: 10,
        color: cores.preto
    },
    valorEntrega: {
        fontFamily: fontes.negrito,
        fontSize: 10,
        color: cores.preto
    },
    areaDesconto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    txtDesconto: {
        color: cores.verde,
        fontSize: 10
    },
    cupomDesconto: {
        fontFamily: fontes.negrito,
        fontSize: 10,
        color: cores.verde
    },
    valorDesconto: {
        fontFamily: fontes.negrito,
        fontSize: 11,
        color: cores.verde
    },

    areaTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    txtTotal: {
        fontFamily: fontes.negrito,
        fontSize: 10,
        color: cores.preto
    },
    valorTotal: {
        fontFamily: fontes.negrito,
        fontSize: 11,
        color: cores.laranjo
    },
    areaPagamento: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: cores.branco,
        color: cores.laranjo,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    tituloPagamento: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgTituloPagamento: {
        width: 30,
        height: 30,
    },
    txtTituloPagamento: {
        fontFamily: fontes.negrito,
        fontSize: 15,
        color: cores.laranjo
    },
    statusPagamento: {
        flexDirection: 'row',
        height: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        gap: 10
    },
    imgForma: {
        width: 30,
        height: 30,
    },
    txtForma: {
        fontFamily: fontes.negrito,
        fontSize: 15,
        color: cores.laranjo
    },

    obs: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: cores.branco,
        paddingTop: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        justifyContent: 'flex-start',
        marginVertical: 5,
        alignItems: 'center',
        columnGap: 10,
    },
    imgObs: {
        width: '12%',
        height: 30,
    },
    infoObs: {
        width: '80%',
        gap: 5
    },
    tituloObs: {
        fontSize: 15,
        color: cores.laranjo,
        fontFamily: fontes.negrito
    },
    txtObservação: {
        color: cores.cinza,
        padding: 5,
        height: 30,
        fontSize: 10
    },
    botoesDetalhes: {
        width: '100%',
        flexDirection: 'row',
      justifyContent:'space-between',
    },
    btnDetalhes: {
        width: '40%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: cores.branco,
        borderColor: cores.laranjo,
        borderWidth: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        flexDirection:'row',
    },
    imgDetalhes: {
        width: 15,
        height:15.
    },
    txtDetalhes: {
        fontFamily: fontes.comum,
        fontSize: 10,
        color:cores.laranjo
    },

},

);