import { StyleSheet } from "react-native";
import { cores, fontes } from "./variaveis";

export const pedidosStyles = StyleSheet.create({
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

    posicaoPedido: {
        width: '100%',

    }, 
    btnAndamento: {
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 2  ,
        color: cores.laranjo,
        borderColor: cores.laranjo,
        width: '100%',
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

        width: '50%'
    },
    btnRetirar: {
        fontSize: 10,
        width: '50%',
        paddingVertical: 5,
    },
    txt: {
        margin: 'auto'
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
        justifyContent: 'space-between',        
        width: '100%'
    },
    areaResumo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'80%'
        
        
    },
    esquerdatopoResumo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',  
        alignItems:'center',
        width: '50%',
        columnGap:5
        
    },
    imgPreparo: {
        width: 30,
        height: 30,
      

    },

    imgResumo: {
        width: 50,
        height: 50,
        margin: 'auto',

    },


    tituloResumo: {
        fontSize: 15,
        color: cores.laranjo,
        fontFamily: fontes.negrito
    },
    statusPedido: {
        flexDirection: 'row',
        backgroundColor: cores.laranjoClaro,
        width: 120,
        height: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius:5,
        
    },
    imgStatus: {
        width: 15,
      height:15,  
    },
    txtStatus: {
        fontFamily: fontes.comum,
        fontSize: 11,
      color:cores.laranjo,
    },

    infoResumo: {
        
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


    areaTotal: {     
        justifyContent: 'space-between',
        width: '30%',
    },
    txtTotal: {
        fontFamily: fontes.negrito,
        fontSize: 11,
        color: cores.preto
    },
    valorTotal: {
        fontFamily: fontes.negrito,
        fontSize: 15,
        color: cores.laranjo
    },
    // txtPagamento: {
    //     fontFamily: fontes.negrito,
    //     fontSize: 15,
    //     color: cores.preto
    // },

    rodapeResumo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    }   ,
    areaPrevisao: {
        justifyContent: 'space-between',
        width: '30%',
        flexDirection: 'row',
        alignItems:'center'
        
    },
    imgPrevisao: {
        width: 20,
        height:20
    },
    tempoPrevisao: {
        marginLeft:10,
    },
    txtPrevisao: {
        fontFamily: fontes.comum,
        fontSize: 11,
        color: cores.cinza
    },
    txtTempoPrevisao: {
        fontFamily: fontes.negrito,
        fontSize: 11,
        color: cores.preto
    },
    btnPedido: {
        width: '100%',
        flexDirection: 'row',
      justifyContent:'space-around',
    },
    btnDetalhes: {
        width: '30%',
        height: 20,
        borderRadius: 5,
        backgroundColor: cores.branco,
        borderColor: cores.laranjo,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
    },
    txtDetalhes: {
        fontFamily: fontes.comum,
        fontSize: 11,
        color: cores.laranjo
    },
    btnRastrear: {
        width: '30%',
        height: 20,
        borderRadius: 5,
        backgroundColor: cores.laranjo,  
        borderColor: cores.laranjo,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    txtRastrear: {
        fontFamily: fontes.comum,
        fontSize: 11,
        color: cores.preto

    },


});