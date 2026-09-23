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
        borderWidth: 1,
        borderColor: cores.laranjo,
        marginVertical:5,
    },

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