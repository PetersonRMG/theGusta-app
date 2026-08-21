import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
        <SafeAreaView style={globalStyle.areaConteudo}>

          <ScrollView style={globalStyle.scrollConteudo}>
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
                    onPress={() => setVerSenha((current) => !current)}
                  >
                    <Image
                      source={verSenha ? require('@/assets/images/img/esconder.png') : require('@/assets/images/img/mostrar.png')}
                      style={loginStyle.mostrarSenha}
                    />

                  </Pressable>
                </View>

                <Pressable style={loginStyle.btnEsqueciSenha} onPress={()=> router.navigate('/esqueciSenha')}>
                  <Text style={loginStyle.txtEsqueciSenha}> Esqueci minha senha</Text>
                </Pressable>

                <Pressable style={({ pressed }) => [loginStyle.btnEntrar, pressed && loginStyle.btnEntrarPressed]}>
                  <Text style={loginStyle.txtEntrar}>Entrar</Text>
                </Pressable>

                <View style={loginStyle.separador}>
                  <View style={loginStyle.linha}></View>
                  <Text style={loginStyle.txtSeparador}>ou</Text>
                  <View style={loginStyle.linha}></View>
                </View>

                <Pressable style={({ pressed }) => [loginStyle.btnCriarConta, pressed && loginStyle.btnCriarContaPress]}
                  onPress={() => router.navigate('/cad-cliente')}>
                  <Text style={loginStyle.txtCriar}>Criar Conta</Text>
                </Pressable>

              </View>

            </View>

          </ScrollView>
        </SafeAreaView>

      </ImageBackground>
    </View>
  );
}
