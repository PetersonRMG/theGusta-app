import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import { faleConoscoStyles } from "@/styles/faleConoscoStyles";
import FooterScreen from "@/app/footer";


export default function FaleConoscoSreen() {




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
                                    <Text style={globalStyle.titulo}>Fale conosco</Text>
                                    <View style={globalStyle.bordaPerfil}>
                                        <Image
                                            style={globalStyle.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={globalStyle.subtitulo}>
                                    Envie sua mensagem para a The Gusta.
                                </Text>
                            </View>
                            <View style={globalStyle.main}>
                                <View style={faleConoscoStyles.caixa} >
                                    <View style={faleConoscoStyles.areaInput}>
                                        <Image source={require('@/assets/images/img/assunto.png')} style={faleConoscoStyles.imgInput} />
                                        <TextInput style={faleConoscoStyles.input}
                                            placeholder="Assunto"/>
                                    </View>
                                    <View style={faleConoscoStyles.caixaTextareaInput} >
                                        <Image
                                            source={require('@/assets/images/img/mensagem.png')}    style={faleConoscoStyles.imgInput} />
                                        <TextInput
                                            style={faleConoscoStyles.textareaInput}
                                           
                                            placeholder="Digite sua mensagem..."
                                            multiline
                                            numberOfLines={5}
                                            textAlignVertical="top"/>
                                    </View>
                                    <Pressable style={faleConoscoStyles.btn}>
                                        <Text style={faleConoscoStyles.txtBtn}>Enviar mensagem</Text>
                                    </Pressable>
                                </View>
                                <Text style={faleConoscoStyles.txtContatos}>Contatos</Text>
                                <View style={faleConoscoStyles.caixa}>  
                                    <Text style={faleConoscoStyles.tituloAtendimento}> Atendimento</Text>
                                    <View style={faleConoscoStyles.areaAtendimento}>
                                        <Text style={faleConoscoStyles.titulo} >Whatsapp</Text>
                                        <Text style={faleConoscoStyles.subtitulo}>(11) 99999-9999</Text>
                                    </View>
                                    <View style={faleConoscoStyles.areaAtendimento}>
                                        <Text style={faleConoscoStyles.titulo} >E-mail</Text>
                                        <Text style={faleConoscoStyles.subtitulo} >contato@thegusta.com.bt</Text>
                                    </View>
                                    <View style={faleConoscoStyles.areaAtendimento}>
                                        <Text style={faleConoscoStyles.titulo} >Horario de atendimento</Text>
                                        <Text style={faleConoscoStyles.subtitulo}>Seg à Sab, das 9h às 18hh</Text>
                                    </View>
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