import { StyleSheet } from "react-native";


const cadClientStyle = StyleSheet.create({
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
        textAlign:'center',
    },
    subtitulo: {
        marginTop: 10,
        fontSize: 20,
        color:"#8888"  
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
    termosUso: {
        flexDirection: 'row',
        width:'100%',
    },
    btnTermos: {
        width: 20,
        height: 20,
        marginRight:10,
        
    },
    termoAceito: {
        backgroundColor:'#ff9800',
        alignItems: 'center',
        justifyContent: 'center',
 
    },
    checkOk: {
        fontSize: 15,
        marginTop:-4,
    },
    checkTermos: {
        width: '100%',
        height:'100%',
        borderColor: '#ff9800',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 5,
    },
    txtTermos: {
        fontSize: 15,
        color:'#888888'

        
    },
    linkTermos: {
        color: 'rgba(255, 152, 0, 1)',
        fontSize: 15,
        textDecorationLine: 'underline',
        
    },
    btnEntrar: {
        width: '80%',	
        height: 50,
        backgroundColor: '#ff9800',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginBottom:10,
    },
    btnEntrarPressed: {
        backgroundColor: '#c77802ff',
        alignItems: 'center',
        transform:' scale(1.1)',
        
    },
    txtEntrar: {
        fontSize: 25,
        color: '#000000',
        fontWeight:'bold',
    },
    separador: {
        width: '80%',		 
        flexDirection: 'row',
        alignItems: 'center',		
        
    },
    linha: {
        flex:1,
        height: 2,
        backgroundColor:'#ff9800'
    },
    txtSeparador: {
        margin: 10,		
        fontSize: 15,
        color:'#888888'
    },
    btnCriarConta: {
        width: '80%',
        height: 50,
        borderColor: '#ff9800',
        backgroundColor: "#FFE8C5",
        borderWidth:2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        transitionDuration: .5,
         
    },
    btnCriarContaPress: {
        alignItems: 'center',
        transform: 'scale(1.1)',
        backgroundColor: "#e7d2b2ff",
        transitionDuration:.5,
    },
    txtCriar: {
        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold',
    },
});

export default cadClientStyle;