import { StyleSheet } from "react-native"
import { cores } from "./variaveis";
import { fontes } from "./variaveis";

export const pagamentoStyles = StyleSheet.create({
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
    endereco: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: cores.branco,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,

    },
    enderecoImg: {
        margin: 'auto',
        width: '10%',
        height: 30,


    },
    centroEndereco: {
        width: '70%',
    },
    tituloEndereco: {
        fontSize: 15,
        color: cores.laranjo,
        fontFamily: fontes.negrito
    },
    residenciaEndereco: {
        fontFamily: fontes.semiNegrito,
        fontSize: 12,
        color: cores.preto,
    },
    enderecoEndereco: {
        fontFamily: fontes.semiNegrito,
        fontSize: 11,
        color: cores.preto,
    },
    txtEndereco: {

        fontSize: 11
    },
    direitaEndereco: {
        width: '15%'
    },
    btnEndereco: {

    },
    btntxtEndereco: {
        fontFamily: fontes.negrito,
        fontSize: 11,
        color: cores.laranjo
    },
    direitaItem: {
        width: '25%',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },

    retirada: {
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
        alignItems: 'center',
        columnGap: 5,
    },

    imgRetirada: {
        width: '12%',
        height: 40,
    },

    retiradaCentro: {
        width: '65%',

    },
    tituloRetirada: {
        fontSize: 15,
        color: cores.laranjo,
        fontFamily: fontes.negrito
    },
    btnRetirada: {
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        color: cores.laranjo,
        borderColor: cores.laranjo,
        width: 150,
        alignItems: 'center',
        marginVertical: 2

    },
    btnEntregar: {
        fontFamily: fontes.negrito,
        fontSize: 11,
        backgroundColor: cores.laranjo,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        paddingVertical: 5,

        width: '45%'
    },
    btnRetirar: {
        fontSize: 10,
        width: '45%',
        paddingVertical: 5,
    },
    txt: {
        margin:'auto'
    },
    retiradaEsquerda: {
        alignItems: 'center'
    },
    tempoRetirada: {
        fontFamily: fontes.negrito,
        fontSize: 11,
    },
    previsaoRetirada: {
        color: cores.cinza,
        fontSize: 10,
    },

    pagamento: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: cores.branco,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        justifyContent: 'flex-start',
        marginVertical: 5,
        alignItems: 'center',
        columnGap: 10,
    },

    imgPagamento: {

        width: '12%',
        height: 30,
    },
    infoPagamento: {
        width: '65%',
        gap: 5
    },
    tituloPagamento: {
        fontSize: 15,
        color: cores.laranjo,
        fontFamily: fontes.negrito
    },
    tipoPagamento: {
        alignItems:'center',
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: cores.laranjo,
        borderRadius: 10,
         
    },
    pix: {
        width: '30%',
        backgroundColor: cores.laranjo,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        paddingVertical: 5
       




    },
    cartao: {
        width: '30%',
        borderStartWidth: 1,
        borderEndWidth: 1,
        borderColor: cores.laranjo,
    },
    dinheiro: {
        width: '30%',
    },
    txtPagamento: {
        textAlign: 'center',
        fontSize: 10,

        paddingVertical: 3

    },

    obs: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: cores.branco,
        paddingVertical: 15,
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
    inputObs: {
        borderWidth: 2,
        borderColor: cores.laranjo,
        borderRadius: 10,
        paddingHorizontal: 2,
        height: 30,
        fontSize: 10
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
        width:'100%'
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
        justifyContent:'center'

    },
    imgItemResumo: {
        width: 25,
        height: 20,
        borderRadius:5
    },
    itemResumo: {
        width:'100%',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    txtResumo: {
        fontSize: 10,
        
        fontFamily: fontes.negrito
    },
    txtValorResumo: {
        fontSize: 11,
        alignItems:'flex-end',
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
    // txtPagamento: {
    //     fontFamily: fontes.negrito,
    //     fontSize: 15,
    //     color: cores.preto
    // },

    btnPgamento: {
        width: '100%',
        height: 30,
        borderRadius: 10,
        backgroundColor: cores.laranjo,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
         
    },
    txtConfirmar: {
        fontFamily: fontes.negrito,
        fontSize: 15,
        color: cores.preto
    },






})