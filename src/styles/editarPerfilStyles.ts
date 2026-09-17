import { StyleSheet } from "react-native";
import { fontes, cores } from "./variaveis";

export const editarPerfilStyles = StyleSheet.create({
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
        gap: 11

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
        margin: 'auto',
    },
    caixaCliente: {
        gap: 10
    },
    nomeCliente: {
        fontFamily: fontes.negrito,
        fontSize: 20
    },
    subtituloCliente: {

        fontSize: 11,
        color: cores.cinza
    },
    btnTrocar: {
        borderRadius: 10,
        borderColor: cores.laranjo,
        backgroundColor: cores.laranjoClaro,
        borderWidth: 2,
        height: 20,
        width: '30%',
    },
    txtBtnTrocar: {
        color: cores.laranjo,
        fontSize: 11,
        textAlign: 'center',


    },
    caixaEditar: {

        width: '100%',
        backgroundColor: cores.branco,
        color: cores.laranjo,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        alignItems: 'center',
        marginVertical: 5,
    },
    areaEditar: {
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
        marginVertical: 2,
        gap: 10
    },
    imgEditar: {
        width: 30,
        height: 30,
    },
    textosEditar: {
        width: '100%',
    },
    labelEditar: {
      
        fontSize: 12
    },
    txtInput: {
        width: '100%',
        fontSize: 15
    },

    
    caixaNoti: {
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
        marginVertical: 2,
        gap: 5
    },
    areaNoti: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%'
    },
    tituloNoti: {
        fontFamily: fontes.negrito,
        fontSize: 15
    },
    subtituloNoti: {
        color: cores.cinza,
        fontSize: 11
    },
    btnNoti: {

    },
    imgBtnNoti: {
        width: 20,
        height: 20
    },
    areaBtns: {
        justifyContent: 'center',
        width: '100%',
        gap: 10,
        marginVertical:10
    },
    btnSalvar: {
        width: '100%',
        backgroundColor: cores.laranjo,
        borderRadius: 10,
        paddingVertical:5
        
    },
    txtBtnSalvar: {
        fontFamily:fontes.negrito,
        fontSize: 15,
        textAlign:'center'
    },
    btnCancelar: {
        backgroundColor: cores.laranjoClaro,
        borderWidth: 2,
        borderColor: cores.laranjo,
        borderRadius: 10,
        width: '50%',
        margin:'auto',
        paddingVertical:5
    },
    txtBtnCancelar: {
        fontFamily:fontes.negrito,
        fontSize: 15,
        textAlign: 'center',
        color:cores.laranjo
    }
});