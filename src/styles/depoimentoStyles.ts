import { StyleSheet } from "react-native";
import { fontes, cores } from "./variaveis";

export const depoimentoStyles = StyleSheet.create({

    caixaDepoimento: {
       
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
        
    },
    areaTituloDepo: {
        flexDirection: 'row',
        alignItems:'center',
        width: '100%',
        gap:10
    },
    imgDepo: {
        width: 40,
        height:40,
    },
    tituloDepo: {
        color:cores.laranjo,
        fontSize: 20,
    },
    subtituloDepo: {
        fontSize: 15,
        textAlign: 'left',
        width: '100%',
        fontFamily:fontes.semiNegrito,
        
    },
    areaEstrelasDepo: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        width:'80%',
         
    },
    estrelaDepo: {
        width: 30,
        height: 30,
    },
    textArea: {
        width: "100%",
        minHeight: 120,
        borderWidth: 2,
        borderColor: cores.laranjo,
        borderRadius: 10,
        padding: 12,
        fontSize: 12,
        
    },
    btnDepo: {
        width: '80%',
        backgroundColor: cores.laranjo,
        borderRadius: 10,
        
    },
    txtBtnDepo: {
        fontFamily: fontes.negrito,
        paddingVertical:5,
        margin:'auto'
    },
    tituloAva: {
        fontFamily: fontes.negrito,
        fontSize: 20,
        textAlign: 'left',
        width: '100%',
        marginTop: 15,
        marginBottom:10
,    },
    caixaAva: {
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
        gap: 20,
    },
    
    areaEstrelasAva: {
        width:'80%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        paddingTop:5
        
    },
    estrelaAva: {
        width: 15,
        height: 15,
    },
    txtAva: {
        fontFamily: fontes.semiNegrito,
          
    },

});