import { StyleSheet } from "react-native";
import { cores } from "./variaveis";
import { fontes } from "./variaveis";
 


const redefinirSenhaStyle = StyleSheet.create({
    conteudo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:30,
        
    },
 
    titulo: {
        marginTop: 30,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#00000',
        textAlign: 'center',
        
    },
    subtitulo: {
        marginTop: 10,
        fontSize: 20,
        color: cores.cinza,
        fontFamily: fontes.fina,
    },
    form: {
        width: '100%',
        marginTop:20,
        alignItems: 'center',
        paddingHorizontal:'5%',
    },
    input: {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent:'space-between',
        borderColor: '#ff9800',
        backgroundColor:'#ffff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical:5,
        
    },
    icone: {
        width: 30,
        height: 30,
        marginRight:10,
    },
    txtInput: {
        width: '100%',
    
    },
    btnMostrarSenha: {
        justifyContent:'center',
    },
    mostrarSenha: {
        width: 20,
        height: 20,
        marginVertical: 5,
        
    },
    txtTermos: {
        fontSize: 15,
        color:'#888888'

        
    },
    txtEnviar: {
        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold',
        
    },
    btnConfirmarSenha: {
        width: '80%',
        height: 50,
        borderColor: cores.laranjo,
        backgroundColor: cores.laranjo,
        borderWidth:2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        transitionDuration: .5,
        marginVertical:20,
         
    },
    btnConfirmarPress: {
        alignItems: 'center',
        transform: 'scale(1.1)',
        backgroundColor: "#e68a00ff",
        transitionDuration:.5,
    },
    txtCriar: {
        fontSize: 25,
        color: cores.preto,
        fontWeight: 'bold',
    },
    btnVoltarLogin: {
        width: '80%',
        height: 50,
        borderColor: cores.laranjo,
        backgroundColor: cores.laranjoClaro,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        transitionDuration: .5,

    },
    btnVoltarPress: {
        alignItems: 'center',
        transform: 'scale(1.1)',
        backgroundColor: "#e7d2b2ff",
        transitionDuration: .5,
    },
    txtVoltar: {
        fontSize: 25,
        color: cores.preto,
        fontWeight: 'bold',
    },
});

export default redefinirSenhaStyle;