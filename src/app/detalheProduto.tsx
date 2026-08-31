import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import detalhesProdutoStyles from "@/styles/detalheProdutoStyles";
import FooterScreen from "@/app/footer";


export default function Basecreen() {




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
                        <View style={detalhesProdutoStyles.conteudo}>


                            <View style={detalhesProdutoStyles.header}>

                                <View style={detalhesProdutoStyles.conteudoHeader}>

                                    <Text style={detalhesProdutoStyles.titulo}>Bolo de Banana Fit</Text>
                                    <Pressable style={detalhesProdutoStyles.btnFavorito}>
                                        <Text style={detalhesProdutoStyles.iconeFavorito}>★</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>)
}