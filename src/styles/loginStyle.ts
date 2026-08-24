import { StyleSheet } from "react-native";

import { fontes } from "./variaveis";
 

const loginStyle = StyleSheet.create({
	conteudo: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical:30,
		
	},
	logo: {
		width: 195,
		height: 180,
	},
	titulo: {
		marginTop: 30,
		fontSize: 40,
		fontWeight: 'bold',
		color: '#00000',
		textAlign: 'center',
		fontFamily: fontes.negrito,
		
	},
	subtitulo: {
		marginTop: 10,
		fontSize: 20,
		color: "#8888",  
		fontFamily:fontes.comum
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
		marginVertical:10,
		
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
	btnEsqueciSenha: {
		alignSelf: 'flex-end',

		
	},
	txtEsqueciSenha: {
		color: 'rgba(255, 152, 0, 1)',
		textDecorationLine: 'underline',
		fontSize: 12,
		fontFamily:fontes.negrito
	},
	btnEntrar: {
		width: '80%',	
		height: 50,
		backgroundColor: '#ff9800',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		marginTop:20,
	},
	btnEntrarPressed: {
		backgroundColor: '#c77802ff',
		alignItems: 'center',
		transform:' scale(0.9)',
		
	},
	txtEntrar: {
		fontSize: 25,
		color: '#000000',
		fontFamily: fontes.negrito
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
		color: '#888888',
		fontFamily: fontes.fina
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
		transform: 'scale(0.9)',
		backgroundColor: "#e7d2b2ff",
		transitionDuration:.5,
	},
	txtCriar: {
		fontSize: 25,
		color: '#000000',
		fontFamily:fontes.negrito
	},
});

export default loginStyle;