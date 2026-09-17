import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import { depoimentoStyles } from "@/styles/depoimentoStyles";
import FooterScreen from "@/app/footer";


export default function DepoimentoScreen() {




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
                                    <Text style={globalStyle.titulo}>Depoimentos</Text>
                                    <View style={globalStyle.bordaPerfil}>
                                        <Image
                                            style={globalStyle.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={globalStyle.subtitulo}>
                                    Compartilhe sua experiência com a The Gusta.
                                </Text>
                            </View>
                            <View style={globalStyle.main}>
                                <View style={depoimentoStyles.caixaDepoimento}>
                                    <View style={depoimentoStyles.areaTituloDepo}>
                                        <Image style={depoimentoStyles.imgDepo} source={require('@/assets/images/img/depoimento.png')} />
                                        <Text style={depoimentoStyles.tituloDepo}>Deixe seu depoimento</Text>
                                    </View>
                                    <Text style={depoimentoStyles.subtituloDepo}>Sua avaliação</Text>
                                    <View style={depoimentoStyles.areaEstrelasDepo}>
                                        <Image style={depoimentoStyles.estrelaDepo}  source={require('@/assets/images/img/depoimento.png')}   />
                                        <Image style={depoimentoStyles.estrelaDepo} source={require('@/assets/images/img/depoimento.png')}  />
                                        <Image style={depoimentoStyles.estrelaDepo} source={require('@/assets/images/img/depoimento.png')}  />
                                        <Image style={depoimentoStyles.estrelaDepo} source={require('@/assets/images/img/depoimento.png')}  />
                                        <Image style={depoimentoStyles.estrelaDepo} source={require('@/assets/images/img/depoimento.png')}  />
                                    </View>
                                    <Text style={depoimentoStyles.subtituloDepo}>Seu depoimento</Text>
                                    <TextInput
                                        style={depoimentoStyles.textArea}
                                        placeholder="Digite sua mensagem..."
                                        placeholderTextColor={'#888888'}
                                        multiline
                                        numberOfLines={3}
                                        textAlignVertical="top"
                                    />
                                    <Pressable style={depoimentoStyles.btnDepo} >
                                        <Text style={depoimentoStyles.txtBtnDepo} >Enviar depoimento</Text>
                                    </Pressable>
                                </View>

                                <Text style={depoimentoStyles.tituloAva}>Suas avaliações</Text>

                                <View style={depoimentoStyles.caixaAva}>
                                    <View style={depoimentoStyles.areaEstrelasAva}>
                                        <Image style={depoimentoStyles.estrelaAva} source={require('@/assets/images/img/depoimento.png')} />
                                        <Image style={depoimentoStyles.estrelaAva} source={require('@/assets/images/img/depoimento.png')} />
                                        <Image style={depoimentoStyles.estrelaAva} source={require('@/assets/images/img/depoimento.png')} />
                                        <Image style={depoimentoStyles.estrelaAva} source={require('@/assets/images/img/depoimento.png')} />
                                        <Image style={depoimentoStyles.estrelaAva} source={require('@/assets/images/img/depoimento.png')} />
                                    </View>
                                    <Text style={depoimentoStyles.txtAva} >Produtos deliciosos e saudáveis! O sabor é incrível e a entrega foi
                                        super rápida. Já virei fâ da The Gusta.</Text>
                                </View>

                                <View style={depoimentoStyles.caixaAva}>
                                    <View style={depoimentoStyles.areaEstrelasAva}>
                                        <Image style={depoimentoStyles.estrelaAva} source={require('@/assets/images/img/depoimento.png')} />
                                        <Image style={depoimentoStyles.estrelaAva} source={require('@/assets/images/img/depoimento.png')} />
                                        <Image style={depoimentoStyles.estrelaAva} source={require('@/assets/images/img/depoimento.png')} />
                                        <Image style={depoimentoStyles.estrelaAva} source={require('@/assets/images/img/depoimento.png')} />
                                        <Image style={depoimentoStyles.estrelaAva} source={require('@/assets/images/img/depoimento.png')} />
                                    </View>
                                    <Text style={depoimentoStyles.txtAva}>Produtos deliciosos e saudáveis! O sabor é incrível e a entrega foi
                                        super rápida. Já virei fâ da The Gusta.</Text>
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