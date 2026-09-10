import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import { detalhePedidoStyles } from "@/styles/detalhePedidoStyles";
import FooterScreen from "@/app/footer";


export default function DetalhePedidoScreen() {




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
                        <View style={detalhePedidoStyles.conteudo}>

                            <View style={detalhePedidoStyles.header}>
                                <View style={detalhePedidoStyles.conteudoHeader}>
                                    <Text style={detalhePedidoStyles.titulo}>Meus pedidos</Text>
                                    <View style={detalhePedidoStyles.bordaPerfil}>
                                        <Image
                                            style={detalhePedidoStyles.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={detalhePedidoStyles.subtitulo}>
                                    Acompanhe seus pedidos e seu histórico.
                                </Text>
                            </View>
                            <View style={detalhePedidoStyles.main}>    </View>

                        </View>


                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>

        //         style = {({ pressed }) => [pagamentoStyles.btnPgamento, pressed && globalStyle.pressBtn]
        // } onPress = {() => router.navigate('/pagamento')}

    )
}