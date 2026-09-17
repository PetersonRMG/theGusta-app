import { StyleSheet } from "react-native";
import { fontes, cores } from "./variaveis";

export const enderecosStyles = StyleSheet.create({
    caixa: {
        flexDirection: 'column',
        backgroundColor: cores.branco,
        paddingVertical: 10,
        color: cores.laranjo,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        marginVertical: 5,
        gap: 11,
        width: '100%',
    },

    endereco: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    bordaEndereco: {
        padding: 15,
        borderColor: cores.laranjo,
        borderRadius: "50%",
        borderWidth: 2,
        backgroundColor: cores.laranjoClaro
    },
    caixaEndereco: {
        
    },
    areaEndereco: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems:'flex-start'
    },
    titulo: {
        fontFamily: fontes.negrito,
      fontSize:15  
    },
    areaEnderecoBaixo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    subtitulo: {
        fontSize: 11,
        color:cores.cinza,
    },
    btnAtivo: {
        borderWidth: 2,
        borderColor: cores.verde,
        backgroundColor: cores.verdeClaro,
        paddingVertical: 5,
        borderRadius: 10,
        paddingHorizontal:10,
        
    },
    txtAtivo: {
        fontSize: 11,
        color: cores.verde,
         
    },
    caixaBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        margin:'auto',
    },
    btnEditar: {
        borderWidth: 2,
        borderColor: cores.laranjo,
        backgroundColor: cores.laranjoClaro,
        paddingVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 30,
    },
    txtEditar: {
        fontSize: 11,
        color: cores.laranjo, 
    },
    btnExcluir: {
        borderWidth: 2,
        borderColor: cores.vermelho,
        backgroundColor: cores.vermelhoClaro,
        paddingVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 30,
    },
    txtExcluir: {
        fontSize: 12,
        color: cores.vermelho, 
    },
    btnAtivar: {
        borderWidth: 2,
        borderColor: cores.laranjo,
        backgroundColor: cores.laranjoClaro,
        paddingVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 10,

    },
    txtAtivar: {
        fontSize: 11,
        color: cores.laranjo,

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
    }
    

});