import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import { alterarSenhaStyles } from "@/styles/alterarSenhaStyles";
import FooterScreen from "@/app/footer";


export default function AlterarSenhaScreen() {

    const [verSenha, setVerSenha] = useState(false);
    const [confirmarSenha, setConfirmarSenha] = useState(false);


    return (
        <View style={globalStyle.container}>
            <ImageBackground
                source={require('@/assets/images/img/00_fundo.png')}
                style={globalStyle.background}
                resizeMode="stretch"
            >
                <SafeAreaView style={globalStyle.areaConteudo}>
                    <Pressable style={globalStyle.btnVoltar} onPress={() => router.back}>
                        <Image style={globalStyle.imgVoltar} source={require('@/assets/images/img/voltar.png')} />
                    </Pressable>

                    <ScrollView style={globalStyle.scrollConteudo}>
                        <View style={globalStyle.conteudo}>
                            <View style={globalStyle.header}>
                                <View style={globalStyle.conteudoHeader}>
                                    <Text style={globalStyle.titulo}>Alterar senha</Text>
                                    <View style={globalStyle.bordaPerfil}>
                                        <Image
                                            style={globalStyle.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={globalStyle.subtitulo}>
                                    Atualize sua senha com segurança.
                                </Text>
                            </View>
                            <View style={globalStyle.main}>

                                <View style={alterarSenhaStyles.caixaEditar}>

                                    <View style={alterarSenhaStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/senha.png')}
                                            style={alterarSenhaStyles.imgEditar} />
                                        <View style={alterarSenhaStyles.textosEditar}>
                                            <Text style={alterarSenhaStyles.labelEditar}>Senha atual</Text>
                                            <View style={alterarSenhaStyles.areaInput}>
                                                <TextInput
                                                    placeholder="Senha"
                                                    secureTextEntry={!verSenha}
                                                    placeholderTextColor={'#888888'}
                                                    keyboardType="visible-password"
                                                    style={alterarSenhaStyles.txtInput}
                                                />
                                                <Pressable
                                                    style={alterarSenhaStyles.btnMostrarSenha}
                                                    onPress={() => setVerSenha((current) => !current)}
                                                >
                                                    <Image
                                                        source={
                                                            verSenha
                                                                ? require('@/assets/images/img/esconder.png')
                                                                : require('@/assets/images/img/mostrar.png')
                                                        }
                                                        style={alterarSenhaStyles.mostrarSenha}
                                                    />
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={alterarSenhaStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/senha.png')}
                                            style={alterarSenhaStyles.imgEditar} />
                                        <View style={alterarSenhaStyles.textosEditar}>
                                            <Text style={alterarSenhaStyles.labelEditar}>Nova senha</Text>
                                            <View style={alterarSenhaStyles.areaInput}>
                                                <TextInput
                                                    placeholder="Senha"
                                                    secureTextEntry={!verSenha}
                                                    placeholderTextColor={'#888888'}
                                                    keyboardType="visible-password"
                                                    style={alterarSenhaStyles.txtInput}
                                                />
                                                <Pressable
                                                    style={alterarSenhaStyles.btnMostrarSenha}
                                                    onPress={() => setVerSenha((current) => !current)}
                                                >
                                                    <Image
                                                        source={verSenha ? require('@/assets/images/img/esconder.png') : require('@/assets/images/img/mostrar.png')}
                                                        style={alterarSenhaStyles.mostrarSenha}
                                                    />
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={alterarSenhaStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/senha.png')}
                                            style={alterarSenhaStyles.imgEditar} />
                                        <View style={alterarSenhaStyles.textosEditar}>
                                            <Text style={alterarSenhaStyles.labelEditar}>Confirmar nova senha</Text>
                                            <View style={alterarSenhaStyles.areaInput}>
                                                <TextInput
                                                    placeholder="Senha"
                                                    secureTextEntry={!confirmarSenha}
                                                    placeholderTextColor={'#888888'}
                                                    keyboardType="visible-password"
                                                    style={alterarSenhaStyles.txtInput}
                                                />
                                                <Pressable
                                                    style={alterarSenhaStyles.btnMostrarSenha}
                                                    onPress={() => setConfirmarSenha((current) => !current)}
                                                >
                                                    <Image
                                                        source={confirmarSenha ? require('@/assets/images/img/esconder.png') : require('@/assets/images/img/mostrar.png')}
                                                        style={alterarSenhaStyles.mostrarSenha}
                                                    />
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>

                                    
                                </View>

                                <View style={alterarSenhaStyles.areaDica}>
                                    <Image source={require('@/assets/images/img/info.png')} style={alterarSenhaStyles.imgDica} />
                                    <View style={alterarSenhaStyles.areaTxtDica}>
                                        <Text style={alterarSenhaStyles.tituloDica}>Dicas para uma senha segura</Text>
                                        <Text style={alterarSenhaStyles.subtituloDica}> {"•"} Use pelo menos 8 caracteres</Text>
                                        <Text style={alterarSenhaStyles.subtituloDica}> {"•"} Combine letras e números</Text>
                                    </View>
                                </View>

                                <View style={alterarSenhaStyles.areaBtns} >
                                    <Pressable style={({ pressed }) => [alterarSenhaStyles.btnSalvar, pressed && globalStyle.pressBtn]} >
                                        <Text style={alterarSenhaStyles.txtBtnSalvar}>Salvar nova senha</Text>
                                    </Pressable>
                                    <Pressable style={({ pressed }) => [alterarSenhaStyles.btnCancelar, pressed && globalStyle.pressBtn]} >
                                        <Text style={alterarSenhaStyles.txtBtnCancelar}>Cancelar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>


                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>

        //         style = {({ pressed }) => [globalStyle.btnPgamento, pressed && globalStyle.pressBtn]
        // } onPress = {() => router.navigate('/pagamento')}

    )
}