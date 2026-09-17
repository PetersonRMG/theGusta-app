import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import { enderecosStyles } from "@/styles/enderecosStyles";
import FooterScreen from "@/app/footer";


export default function EnderecosScreen() {




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
                                    <Text style={globalStyle.titulo}>Endereços</Text>
                                    <View style={globalStyle.bordaPerfil}>
                                        <Image
                                            style={globalStyle.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={globalStyle.subtitulo}>
                                    Gerencie seus endereços de entrega.
                                </Text>
                            </View>
                            <View style={globalStyle.main}>

                                <View style={enderecosStyles.caixa}>
                                    <View style={enderecosStyles.endereco}>
                                        <View style={enderecosStyles.bordaEndereco}>
                                            <Image source={require('@/assets/images/img/home.png')} />
                                        </View>
                                        <View style={enderecosStyles.caixaEndereco}>
                                            <View style={enderecosStyles.areaEndereco}>
                                                <Text style={enderecosStyles.titulo} >Casa</Text>
                                                <Image source={require('@/assets/images/img/depoimento.png')} />
                                            </View>
                                            <View style={enderecosStyles.areaEnderecoBaixo}>
                                                <Text style={enderecosStyles.subtitulo}> Avenida Marechal Tito, 1500{"\n"}
                                                    São Miguel Paulista{"\n"}
                                                    São Paulo - SP{"\n"}
                                                    CEP: 00000-000</Text>
                                                <Pressable style={enderecosStyles.btnAtivo}>
                                                    <Text style={enderecosStyles.txtAtivo}>Endereço ativo</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={globalStyle.separador}></View>

                                    <View style={enderecosStyles.caixaBtns}>
                                        <Pressable style={enderecosStyles.btnEditar}>
                                            <Text style={enderecosStyles.txtEditar}>Editar</Text>
                                        </Pressable>
                                        <Pressable style={enderecosStyles.btnExcluir}>
                                            <Text style={enderecosStyles.txtExcluir}>Excluir</Text>
                                        </Pressable>
                                    </View>
                                </View>


                                <View style={enderecosStyles.caixa}>
                                    <View style={enderecosStyles.endereco}>
                                        <View style={enderecosStyles.bordaEndereco}>
                                            <Image source={require('@/assets/images/img/trabalho.png')} />
                                        </View>
                                        <View style={enderecosStyles.caixaEndereco}>
                                            <View style={enderecosStyles.areaEndereco}>
                                                <Text style={enderecosStyles.titulo} >Trabalho</Text>
                                                <Image source={require('@/assets/images/img/depoimento.png')} />
                                            </View>
                                            <View style={enderecosStyles.areaEnderecoBaixo}>
                                                <Text style={enderecosStyles.subtitulo}> Avenida Marechal Tito, 1500{"\n"}
                                                    São Miguel Paulista{"\n"}
                                                    São Paulo - SP{"\n"}
                                                    CEP: 00000-000</Text>
                                                <Pressable style={enderecosStyles.btnAtivar}>
                                                    <Text style={enderecosStyles.txtAtivar}>Endereço ativo</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={globalStyle.separador}></View>

                                    <View style={enderecosStyles.caixaBtns}>
                                        <Pressable style={enderecosStyles.btnEditar}>
                                            <Text style={enderecosStyles.txtEditar}>Editar</Text>
                                        </Pressable>
                                        <Pressable style={enderecosStyles.btnExcluir}>
                                            <Text style={enderecosStyles.txtExcluir}>Excluir</Text>
                                        </Pressable>
                                    </View>
                                </View>


                                <View style={enderecosStyles.caixa}>
                                    <View style={enderecosStyles.endereco}>
                                        <View style={enderecosStyles.bordaEndereco}>
                                            <Image source={require('@/assets/images/img/academia.png')} />
                                        </View>
                                        <View style={enderecosStyles.caixaEndereco}>
                                            <View style={enderecosStyles.areaEndereco}>
                                                <Text style={enderecosStyles.titulo} >Academia</Text>
                                                <Image source={require('@/assets/images/img/depoimento.png')} />
                                            </View>
                                            <View style={enderecosStyles.areaEnderecoBaixo}>
                                                <Text style={enderecosStyles.subtitulo}> Avenida Marechal Tito, 1500{"\n"}
                                                    São Miguel Paulista{"\n"}
                                                    São Paulo - SP{"\n"}
                                                    CEP: 00000-000</Text>
                                                <Pressable style={enderecosStyles.btnAtivar}>
                                                    <Text style={enderecosStyles.txtAtivar}>Endereço ativo</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={globalStyle.separador}></View>

                                    <View style={enderecosStyles.caixaBtns}>
                                        <Pressable style={enderecosStyles.btnEditar}>
                                            <Text style={enderecosStyles.txtEditar}>Editar</Text>
                                        </Pressable>
                                        <Pressable style={enderecosStyles.btnExcluir}>
                                            <Text style={enderecosStyles.txtExcluir}>Excluir</Text>
                                        </Pressable>
                                    </View>
                                </View>

                                <View style={enderecosStyles.areaBtns} >
                                    <Pressable onPress={()=> router.navigate('/editarEndereco')} style={({ pressed }) => [enderecosStyles.btnSalvar, pressed && globalStyle.pressBtn]} >
                                        <Text style={enderecosStyles.txtBtnSalvar}>+ Adicionar endereço</Text>
                                    </Pressable>
                                    <Pressable style={({ pressed }) => [enderecosStyles.btnCancelar, pressed && globalStyle.pressBtn]} >
                                        <Text style={enderecosStyles.txtBtnCancelar}>Cancelar</Text>
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