import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import homeStyles from "@/styles/homeStyles";
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
                                    <Text style={globalStyle.titulo}></Text>
                                    <View style={globalStyle.bordaPerfil}>
                                        <Image
                                            style={globalStyle.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={globalStyle.subtitulo}>
                                    Confirme entrega e forma de pagamento.
                                </Text>
                            </View>
                            <View style={globalStyle.main}></View>
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