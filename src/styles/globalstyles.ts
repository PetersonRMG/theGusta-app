import { StyleSheet } from "react-native"
import { cores } from "./variaveis";
import { fontes } from "./variaveis";

const globalStyle = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "#ffff"
    },
    background: {
        width: '100%',
        maxWidth: 440,
        height: '100%',
        backgroundSize: 'convain'
    },
    logoMaior: {
        width: 160,
        height: 150,
    },
    
    areaConteudo: {
        flex: 1,
        
    },
    scrollConteudo: {
        flexGrow: 1,
    },
    /*BTN VOLTAR*/
    btnVoltar: {
        width: 55,
        height: 55,
        backgroundColor: cores.laranjoClaro,
        borderRadius: "50%",
        top: 30,
        left: '10%',
        zIndex: 999,


    },
    imgVoltar: {
        width: 50,
        height: 50,
        margin: 'auto',
    },

    separador: {
        width: '100%',
        borderWidth: 2,
        borderColor: cores.laranjo,
        marginVertical:5,
    },
    /*FOOTER*/

    footer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: cores.branco,
        justifyContent: 'space-evenly',
        borderTopColor: cores.laranjo,
        borderTopWidth: 2,
        paddingVertical: 10,

    }, btnFooter: {
        alignItems: 'center',
        
    },
    iconeFooter: {
        width: 30,
        height: 30,
    },
    textFooter: {
        fontSize: 11,
        color: cores.cinza
    },
    txtFooterAtivo: {
        color: cores.laranjo,
    },
    pressBtn: {
        transform: 'scale(0.9)',
         
        borderRadius:5,
    },

});

export default globalStyle;