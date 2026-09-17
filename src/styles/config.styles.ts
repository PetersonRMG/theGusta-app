import { StyleSheet } from "react-native";
import { fontes, cores } from "./variaveis";

export const configStyles = StyleSheet.create({
    areaCliente: {
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
        marginVertical: 5,
        gap:11
        
    },
    bordaPerfil: {
        padding: 15,
        borderColor: cores.laranjo,
        borderRadius: "50%",
        borderWidth: 2,
        backgroundColor: cores.laranjoClaro
    },
    imgCliente: {
        width: 50,
        height: 50,
        margin:'auto',
    },
    caixaCliente:{
        
    },
    nomeCliente: {
        fontFamily: fontes.negrito,
        fontSize:20  
    },
    subtituloCliente: {
        
        fontSize: 11,
        color:cores.cinza
    },
    area: {
        marginVertical:10,
        width: '100%',
    },
    tituloArea: {
        fontFamily: fontes.negrito,
        fontSize:20
    },
 
    areaPerfil: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderWidth: 2,
        borderBottomWidth:0,
        borderColor: cores.laranjo,
        backgroundColor: cores.branco,
        flexDirection: 'row',
        width:'100%',
        alignItems: 'center',
        gap: 10,  
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 5,
        
    },
    iconImg: {
        width: 30,
        height:30,  
    },
    itens: {
        width:'85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
 
    titulo: {
        fontSize: 15,
        fontFamily:fontes.negrito
    },
    subtitulo: {
        fontSize: 10,
        color:cores.cinza
      
    },
    btn: {
        width: 10,
        
    },
    txtBtn: {
        color: cores.laranjo,
        fontFamily: fontes.negrito,
        fontSize:20
    },

    areaEndereco: {
        borderWidth: 2,
        borderColor: cores.laranjo,
        backgroundColor: cores.branco,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        
    },
    areaSenha: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 2,
        borderTopWidth: 0,
        borderColor: cores.laranjo,
        backgroundColor: cores.branco,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom:5
       
    },


    caixaApp: {
       borderTopStartRadius:10,
       borderTopEndRadius:10,
        borderWidth: 2,         
        borderColor: cores.laranjo,
        backgroundColor: cores.branco,       
        width: '100%',       
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 5,
        flexDirection: 'row',
    },
    caixa: {
        flexDirection: 'row',
        gap:10
       
    },
    caixaItens: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        
    },
    btnInstalar: {
        borderRadius: 10,
        borderColor: cores.laranjo,
        borderWidth: 2,
        height:20,
        width: '30%',
        paddingHorizontal: 5,
        textAlign:'auto',

    },
    txtBtnInstalar: {
        color: cores.laranjo,
        fontFamily: fontes.semiNegrito,
        fontSize: 11,
      textAlign:'center'
    },
    caixaNotificao: {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        borderWidth: 2,
        borderTopWidth:0,
        borderColor: cores.laranjo,
        backgroundColor: cores.branco,
        width: '100%',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    btnNoti: {
        
    },

    caixaDepo: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        backgroundColor: cores.branco,
        width: '100%',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 5,
        flexDirection: 'row',
    },
    caixaFale: {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        borderWidth: 2,
        borderTopWidth: 0,
        borderColor: cores.laranjo,
        backgroundColor: cores.branco,
        width: '100%',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    btnSair: {
        width: '100%',
        backgroundColor: cores.laranjo,
        borderRadius: 10,
        paddingVertical: 5,
        marginVertical:10,
        
    },
    txtBtnSair: {
        fontFamily: fontes.semiNegrito,
        fontSize: 20,
      textAlign:'center',
    },
});
