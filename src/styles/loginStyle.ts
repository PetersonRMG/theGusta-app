import { StyleSheet } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";

const loginStyle = StyleSheet.create({
	conteudo: {
		flex: 1,
		alignItems: 'center',
		justifyContent:'center'
		
	},
	logo: {
		width: 250,
		height: 230,
	},
	titulo: {
		marginTop: 50,
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
		marginTop:50,
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
		width:'100%',
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
	},
});

export default loginStyle;