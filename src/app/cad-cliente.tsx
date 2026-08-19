import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import globalStyle from '../styles/globalstyles';
import cadClientStyle from "@/styles/cadCliente";


export default function CadCliente() {
    const [verSenha, setVerSenha] = useState(false);
    const [verConfSenha, setVerConfSenha] = useState(false);
    const [aceitarTermos, setAceitarTermos] = useState(false);



    return (
        <View style={globalStyle.container}>
            <ImageBackground
                source={require('@/assets/images/img/00_fundo.png')}
                style={globalStyle.background}
                resizeMode="stretch"
            >

                <SafeAreaView style={globalStyle.areaConteudo}>
                    <ScrollView style={globalStyle.scrollConteudo}>
                        <View style={cadClientStyle.conteudo}>
                            <Image
                                style={globalStyle.logoMaior}
                                source={require('@/assets/images/img/logo.png')}
                            />

                            <Text style={cadClientStyle.titulo}>Criar conta</Text>
                            <Text style={cadClientStyle.subtitulo}>Cadastre-se para fazer seus pedidos</Text>

                            {/* FORMULARIO */}
                            <View style={cadClientStyle.form}>
                                {/* nome */}
                                <View style={cadClientStyle.input}>
                                    <Image
                                        source={require('@/assets/images/img/user.png')}
                                        style={cadClientStyle.icone}
                                    />
                                    <TextInput
                                        style={cadClientStyle.txtInput}
                                        placeholder="Nome Completo"
                                        placeholderTextColor={'#888888'}


                                    />
                                </View>

                                {/* email */}
                                <View style={cadClientStyle.input}>
                                    <Image
                                        source={require('@/assets/images/img/email.png')}
                                        style={cadClientStyle.icone}
                                    />
                                    <TextInput
                                        style={cadClientStyle.txtInput}
                                        placeholder="E-mail"
                                        placeholderTextColor={'#888888'}
                                        keyboardType="email-address"
                                        autoCapitalize="none"

                                    />
                                </View>

                                {/* telefone */}
                                <View style={cadClientStyle.input}>
                                    <Image
                                        source={require('@/assets/images/img/telefone.png')}
                                        style={cadClientStyle.icone}
                                    />
                                    <TextInput
                                        style={cadClientStyle.txtInput}
                                        placeholder="Telefone"
                                        placeholderTextColor={'#888888'}
                                        keyboardType="phone-pad"

                                    />
                                </View>

                                {/* senha */}
                                <View style={cadClientStyle.input}>
                                    <Image
                                        source={require('@/assets/images/img/senha.png')}
                                        style={cadClientStyle.icone}
                                    />
                                    <TextInput
                                        placeholder="Senha"
                                        secureTextEntry={!verSenha}
                                        placeholderTextColor={'#888888'}
                                        keyboardType="visible-password"
                                        style={cadClientStyle.txtInput}
                                    />
                                    <Pressable
                                        style={cadClientStyle.btnMostrarSenha}
                                        onPress={() => setVerSenha((current) => !current)}
                                    >
                                        <Image
                                            source={verSenha ? require('@/assets/images/img/esconder.png') : require('@/assets/images/img/mostrar.png')}
                                            style={cadClientStyle.mostrarSenha}
                                        />

                                    </Pressable>
                                </View>

                                {/* Confirmar senha  */}
                                <View style={cadClientStyle.input}>
                                    <Image
                                        source={require('@/assets/images/img/senha.png')}
                                        style={cadClientStyle.icone}
                                    />
                                    <TextInput
                                        placeholder="Confirmar Senha"
                                        secureTextEntry={!verConfSenha}
                                        placeholderTextColor={'#888888'}
                                        keyboardType="visible-password"
                                        style={cadClientStyle.txtInput}
                                    />
                                    <Pressable
                                        style={cadClientStyle.btnMostrarSenha}
                                        onPress={() => setVerConfSenha((current) => !current)}
                                    >
                                        <Image
                                            source={verConfSenha ? require('@/assets/images/img/esconder.png') : require('@/assets/images/img/mostrar.png')}
                                            style={cadClientStyle.mostrarSenha}
                                        />

                                    </Pressable>
                                </View>


                                {/* termos de uso */}
                                <View style={cadClientStyle.termosUso}>
                                    <Pressable style={cadClientStyle.btnTermos}
                                        onPress={() => setAceitarTermos((current) => !current)}>
                                        <View style={[cadClientStyle.checkTermos, aceitarTermos && cadClientStyle.termoAceito]} >
                                            {aceitarTermos && (
                                                <Text style={cadClientStyle.checkOk}>✔️</Text>
                                            )
                                            }
                                        </View>
                                    </Pressable>
                                    <Text style={cadClientStyle.txtTermos}> Aceito os </Text>
                                    <Pressable>
                                        <Text style={cadClientStyle.linkTermos}>
                                            termos de uso
                                        </Text>
                                    </Pressable>
                                </View>



                                <Pressable style={({ pressed }) => [cadClientStyle.btnEntrar, pressed && cadClientStyle.btnEntrarPressed]}
                                onPress={()=> router.navigate('/')}>
                                    <Text style={cadClientStyle.txtEntrar}>Criar Conta</Text>
                                </Pressable>


                                <Pressable style={({ pressed }) => [cadClientStyle.btnCriarConta, pressed && cadClientStyle.btnCriarContaPress]}
                                    onPress={() => router.navigate('/')}>
                                    <Text style={cadClientStyle.txtCriar}>Já tenho conta</Text>
                                </Pressable>

                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>

            </ImageBackground>
        </View>
    );
}
