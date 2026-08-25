import { StyleSheet } from "react-native";
import { cores, fontes } from "./variaveis";


const homeStyles = StyleSheet.create({
    header: {
        width: '80%',  
        margin: 'auto',
        marginTop:80,
    },
    conteudo: {
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
        padding: 15,
        borderColor: cores.laranjo,
        borderRadius: "50%",
        borderWidth: 2,
        backgroundColor:cores.laranjoClaro
    },
    perfil: {
        width: 50,
        height: 50,
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
        marginTop: 30,
        
    },
    buscarProduto: {
        width: '100%',
        height: 50,
        backgroundColor:cores.laranjoClaro,
        borderColor: cores.laranjo,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,        
        flexDirection:'row',       
    },
    txtProduto: {
        marginVertical: 'auto',
        color: cores.preto,
        fontSize: 15,
        width:'100%',        
    },
    btnBuscar: {
        width: 30,
        height: 30,        
    },
    icone:{
        width: '100%',
        height: '100%',        
    },
    banner: {
        width: '100%',
        height:160,
        borderRadius: 20,
        marginTop:30,        
    },
    categoria: {
        width: '100%',
        marginTop:30,
    },
    tituloSecao: {
        fontSize: 30,        
        color: cores.preto,
        fontFamily: fontes.negrito,
        marginBottom:10,
    },
    conteudoCategoria: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        
    },
    itemCategoria: {
        width: 55,
        height: 55,
        borderRadius: 10,
        borderColor: cores.laranjo,
        backgroundColor:cores.laranjoClaro,
        borderWidth: 2,
        paddingVertical: 3,
        paddingHorizontal: 10,
        alignItems:'center',
    },
    imgCategoria: {
        width: 30,
        height:30,
    },
    txtCategoria: {
        fontSize: 11,
        fontFamily: fontes.comum,
        color:cores.cinza,
    },
});

export default homeStyles;
