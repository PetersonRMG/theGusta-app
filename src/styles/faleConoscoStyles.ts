import { StyleSheet } from "react-native";
import { fontes, cores } from "./variaveis";

export const faleConoscoStyles = StyleSheet.create({

    caixa: {
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
        gap: 20,
        justifyContent:'flex-start'

    },
    areaInput: {
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
        gap:10
   
    },
    imgInput: {
        width: 30,
        height:30,
    },
    input: {
        width: '100%',
        paddingVertical:2
    },
    caixaTextareaInput: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: cores.branco,
        color: cores.laranjo,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cores.laranjo,
        alignItems: 'flex-start',
        gap: 10  
    },

    textareaInput: {
        width: "100%",
        minHeight: 120,      

        borderRadius: 10,
        padding: 12,
        fontSize: 12,
       
    },
    btn: {
        width: '80%',
        backgroundColor: cores.laranjo,
        borderRadius:10,
    },
    txtBtn: {
        margin: 'auto',
        fontFamily: fontes.negrito,
        fontSize: 15,
        paddingVertical:5
    },
    txtContatos: {
        
        width: '100%',
        fontFamily: fontes.negrito,
        fontSize: 20,
        marginTop:20,
        marginBottom:10        
    },
    tituloAtendimento: {
        width: '100%',
        textAlign:'left',
        fontSize: 15,
        fontFamily: fontes.negrito,
        color: cores.laranjo,
        
        
    },
    areaAtendimento: {
        width: '100%',
        textAlign: 'left',
        paddingHorizontal:10
    },
    titulo: {
        fontSize: 15,
        fontFamily: fontes.negrito,
        
    },
    subtitulo: {
        color: cores.cinza,
        fontSize: 11,
        
    }
});