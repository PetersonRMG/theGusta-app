import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import { editarEnderecoStyles } from "@/styles/editarEnderecoStyles";
import FooterScreen from "@/app/footer";


export default function ConfigScreen() {




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
                                    <Text style={globalStyle.titulo}>Editar endereço</Text>
                                    <View style={globalStyle.bordaPerfil}>
                                        <Image
                                            style={globalStyle.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={globalStyle.subtitulo}>
                                    Edite o endereço selecionado.
                                </Text>
                            </View>
                            <View style={globalStyle.main}>

                                <View style={editarEnderecoStyles.caixaEditar}>
                                    <View style={editarEnderecoStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/local.png')}
                                            style={editarEnderecoStyles.imgEditar} />
                                        <View style={editarEnderecoStyles.textosEditar}>
                                            <Text style={editarEnderecoStyles.labelEditar}>Nome endereço</Text>
                                            <TextInput
                                                style={editarEnderecoStyles.txtInput}
                                                placeholder="Casa"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>

                                    <View style={editarEnderecoStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/local.png')}
                                            style={editarEnderecoStyles.imgEditar} />
                                        <View style={editarEnderecoStyles.textosEditar}>
                                            <Text style={editarEnderecoStyles.labelEditar}>Endereço</Text>
                                            <TextInput
                                                style={editarEnderecoStyles.txtInput}
                                                placeholder="Av. Marechal Tito, 1500"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>

                                    <View style={editarEnderecoStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/local.png')}
                                            style={editarEnderecoStyles.imgEditar} />
                                        <View style={editarEnderecoStyles.textosEditar}>
                                            <Text style={editarEnderecoStyles.labelEditar}>Bairro</Text>
                                            <TextInput
                                                style={editarEnderecoStyles.txtInput}
                                                placeholder="São Miguel"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>

                                    <View style={editarEnderecoStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/local.png')}
                                            resizeMode="stretch"
                                            style={editarEnderecoStyles.imgEditar} />
                                        <View style={editarEnderecoStyles.textosEditar}>
                                            <Text style={editarEnderecoStyles.labelEditar}>Cidade</Text>
                                            <TextInput
                                                style={editarEnderecoStyles.txtInput}
                                                placeholder="São Paulo"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>

                                    <View style={editarEnderecoStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/local.png')}
                                            style={editarEnderecoStyles.imgEditar} />
                                        <View style={editarEnderecoStyles.textosEditar}>
                                            <Text style={editarEnderecoStyles.labelEditar}>UF</Text>
                                            <TextInput
                                                style={editarEnderecoStyles.txtInput}
                                                placeholder="SP"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>
                                    <View style={editarEnderecoStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/local.png')}
                                            style={editarEnderecoStyles.imgEditar} />
                                        <View style={editarEnderecoStyles.textosEditar}>
                                            <Text style={editarEnderecoStyles.labelEditar}>CEP</Text>
                                            <TextInput
                                                style={editarEnderecoStyles.txtInput}
                                                placeholder="00000-000"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>
                                </View>

                                    <View style={editarEnderecoStyles.areaBtns} >
                                        <Pressable style={({ pressed }) => [editarEnderecoStyles.btnSalvar, pressed && globalStyle.pressBtn]} >
                                            <Text style={editarEnderecoStyles.txtBtnSalvar}>Salvar alterações</Text>
                                        </Pressable>
                                        <Pressable style={({ pressed }) => [editarEnderecoStyles.btnCancelar, pressed && globalStyle.pressBtn]} >
                                            <Text style={editarEnderecoStyles.txtBtnCancelar}>Cancelar</Text>
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