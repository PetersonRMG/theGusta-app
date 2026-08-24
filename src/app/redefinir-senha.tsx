import { router } from "expo-router";
import { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import {
    Image,
    ImageBackground,
    Pressable,
    Text,
    TextInput,
    View,
    ScrollView,
} from "react-native";

import redefinirSenhaStyle from "@/styles/redifinirSenhaStyles";
import globalStyle from "@/styles/globalstyles";
import LinkSenhaModal from "@/components/linkSenhaModal";

export default function RedefinirSenhaScreen() {
    const [verSenha, setVerSenha] = useState(false);
    const [verConfSenha, setVerConfSenha] = useState(false);


    return (
        <View style={globalStyle.container}>
            <ImageBackground
                source={require("@/assets/images/img/00_fundo.png")}
                style={globalStyle.background}
                resizeMode="cover"
            >
                <SafeAreaView style={globalStyle.areaConteudo}>
                    <ScrollView style={globalStyle.scrollConteudo}>
                        <View style={redefinirSenhaStyle.conteudo}>
                            <Image
                                source={require("@/assets/images/img/logo.png")}
                                style={globalStyle.logoMaior}
                            />
                            <Text style={redefinirSenhaStyle.titulo}>
                                Redefinir minha senha
                            </Text>
                            <Text style={redefinirSenhaStyle.subtitulo}>
                                Informe seu e-mail para receber {'\n'} o link de redefinição
                            </Text>

                            <View style={redefinirSenhaStyle.form}>

                                {/* senha */}
                                <View style={redefinirSenhaStyle.input}>
                                    <Image
                                        source={require('@/assets/images/img/senha.png')}
                                        style={redefinirSenhaStyle.icone}
                                    />
                                    <TextInput
                                        placeholder="Senha"
                                        secureTextEntry={!verSenha}
                                        placeholderTextColor={'#888888'}
                                        keyboardType="visible-password"
                                        style={redefinirSenhaStyle.txtInput}
                                    />
                                    <Pressable
                                        style={redefinirSenhaStyle.btnMostrarSenha}
                                        onPress={() => setVerSenha((current) => !current)}
                                    >
                                        <Image
                                            source={verSenha ? require('@/assets/images/img/esconder.png') : require('@/assets/images/img/mostrar.png')}
                                            style={redefinirSenhaStyle.mostrarSenha}
                                        />

                                    </Pressable>
                                </View>

                                {/* Confirmar senha  */}
                                <View style={redefinirSenhaStyle.input}>
                                    <Image
                                        source={require('@/assets/images/img/senha.png')}
                                        style={redefinirSenhaStyle.icone}
                                    />
                                    <TextInput
                                        placeholder="Confirmar Senha"
                                        secureTextEntry={!verConfSenha}
                                        placeholderTextColor={'#888888'}
                                        keyboardType="visible-password"
                                        style={redefinirSenhaStyle.txtInput}
                                    />
                                    <Pressable
                                        style={redefinirSenhaStyle.btnMostrarSenha}
                                        onPress={() => setVerConfSenha((current) => !current)}
                                    >
                                        <Image
                                            source={verConfSenha ? require('@/assets/images/img/esconder.png') : require('@/assets/images/img/mostrar.png')}
                                            style={redefinirSenhaStyle.mostrarSenha}
                                        />

                                    </Pressable>
                                </View>

                                <Pressable
                                    style={({ pressed }) => [
                                        redefinirSenhaStyle.btnConfirmarSenha,
                                        pressed && redefinirSenhaStyle.btnConfirmarPress,
                                    ]}
                                    onPress={() => router.navigate('/')}
                                >
                                    <Text style={redefinirSenhaStyle.txtEnviar}>Redefinir Senha</Text>
                                </Pressable>

                                <Pressable style={({ pressed }) => [redefinirSenhaStyle.btnVoltarLogin, pressed && redefinirSenhaStyle.btnVoltarPress]}
                                    onPress={() => router.navigate('/')}>
                                    <Text style={redefinirSenhaStyle.txtVoltar}>Criar Conta</Text>
                                </Pressable>


                            </View>
                        </View>
                    </ScrollView>

 
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
