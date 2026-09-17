import { StyleSheet } from "react-native";
import { fontes, cores } from "./variaveis";

export const alterarSenhaStyles = StyleSheet.create({

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
        width: '85%',
    },
    labelEditar: {

        fontSize: 12
    },
    areaInput: {
      flexDirection:'row',  
    },
    txtInput: {
        width: '100%',
        fontSize: 15
    },
    btnMostrarSenha: {
        justifyContent: 'center',
    },
    mostrarSenha: {
        width: 20,
        height: 20,
        marginVertical: 5,

    },
    areaBtns: {
        justifyContent: 'center',
        width: '100%',
        gap: 10,
        marginVertical: 10
    },
    btnSalvar: {
        width: '100%',
        backgroundColor: cores.laranjo,
        borderRadius: 10,
        paddingVertical: 5

    },
    txtBtnSalvar: {
        fontFamily: fontes.negrito,
        fontSize: 15,
        textAlign: 'center'
    },
    btnCancelar: {
        backgroundColor: cores.laranjoClaro,
        borderWidth: 2,
        borderColor: cores.laranjo,
        borderRadius: 10,
        width: '50%',
        margin: 'auto',
        paddingVertical: 5
    },
    txtBtnCancelar: {
        fontFamily: fontes.negrito,
        fontSize: 15,
        textAlign: 'center',
        color: cores.laranjo
    },
    areaDica: {
        flexDirection:'row',
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
        
        gap:20,
    },
    imgDica: {
        width:50,
        height:50,
    },
    areaTxtDica: {
        paddingVertical:5,
    },
    tituloDica: {
        fontFamily: fontes.negrito,
      fontSize:15,  
    },
    subtituloDica: {
        fontSize: 11,
        color:cores.cinza,
    },
});