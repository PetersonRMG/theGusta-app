import { useState } from "react";
import { View, Text, ImageBackground, Image, TextInput, Pressable } from "react-native";
import globalStyle from '../styles/globalstyles';
import loginStyle from "@/styles/loginStyle";


export default function LoginScreen() {
  const [verSenha, setVerSenha] = useState(false);

  return (
    <View style={globalStyle.container}>
      <ImageBackground
        source={require('@/assets/images/img/00_fundo.png')}
        style={globalStyle.background}
        resizeMode="stretch"
      >
        <View style={loginStyle.conteudo}>
          <Image
            style={loginStyle.logo}
            source={require('@/assets/images/img/logo.png')}
          />

          <Text style={loginStyle.titulo}>Bem-vindo(a)!</Text>
          <Text style={loginStyle.subtitulo}>Faça seu login para continuar</Text>

          {/* FORMULARIO */}
          <View style={loginStyle.form}>

            <View style={loginStyle.input}>
              <Image
                source={require('@/assets/images/img/email.png')}
                style={loginStyle.icone}
              />
              <TextInput
                style={loginStyle.txtInput}
                
             
                placeholder="E-mail"
                placeholderTextColor={'#888888'}
                keyboardType="email-address"
                autoCapitalize="none"                 
               
              />
            </View>

            <View style={loginStyle.input}>
              <Image
                source={require('@/assets/images/img/senha.png')}
                style={loginStyle.icone}
              />
              <TextInput
                placeholder="Senha"
                secureTextEntry={!verSenha}
                placeholderTextColor={'#888888'}
                keyboardType="visible-password"
                style={loginStyle.txtInput}
              />
              <Pressable
                style={loginStyle.btnMostrarSenha}
                onPress={() => setVerSenha((current)=> !current)}
              >
                <Image
                  source={verSenha ? require('@/assets/images/img/esconder.png') : require('@/assets/images/img/mostrar.png')}
                  style={loginStyle.mostrarSenha}
                />

              </Pressable>
            </View>

            <Pressable style={loginStyle.btnEsqueciSenha}>
              <Text style={loginStyle.txtEsqueciSenha}> Esqueci minha senha</Text>
            </Pressable>

            <Pressable>
              <Text>Entrar</Text>
            </Pressable>

            <Pressable>
              <Text>Criar Conta</Text>
            </Pressable>

          </View>

        </View>

      </ImageBackground>
    </View>
  );
}
