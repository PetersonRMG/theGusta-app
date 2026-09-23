import { StyleSheet } from "react-native";
import { cores, fontes } from "./variaveis";


const homeStyles = StyleSheet.create({
    header: {
        width: '80%',  
        margin: 'auto',
        marginTop:50,
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
    destaque: {
        width: '100%',
        marginTop: 30,
    },

    conteudoDestaque:{
        width: '100%',
        gap: 10,
        flexGrow:1,
        
    },
    itemDestaque: {
        width: 110,
        height:150,
        borderRadius: 10,
        borderColor: cores.laranjo,
        backgroundColor: cores.laranjoClaro,
        borderWidth: 2,        
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom:5,
    },
    caixaImagem: {
        width:'100%',
    },
    imgDestaque: {
        width: '100%',
        height: 70,
        gap:10,
    },
    btnFavorito: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 20,
        height:20,
        backgroundColor: cores.branco,
        borderRadius:50,
    },
    iconeFavorito: {
        fontSize: 20,
        color: cores.laranjo,
        top: -6,
        right:-2,
    },
    nomeProduto: {
        fontSize: 12,
        fontFamily: fontes.negrito,
        color: cores.preto,
        textAlign:'center',
    },
    descricaoProduto: {
        fontSize: 8,
        fontFamily: fontes.medio,
        color: cores.cinza,
        textAlign: 'center',
        paddingBlock: 2,
        overflow:'hidden',
    },
    valorContainer: {
        width:'100%',
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    valorProduto: {
        fontSize: 12,
        fontFamily: fontes.negrito,
        color: cores.preto,
        textAlign: 'left',
    },
    btnAdicionar: {
    },
    imgAdicionar: {
        height:20,
        width: 20,
        
    },
});

export default homeStyles;
