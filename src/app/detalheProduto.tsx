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
                                    <Image style={detalhesProdutoStyles.img} source={require('@/assets/images/img/bolo01.png')} />
                                    <Text style={detalhesProdutoStyles.tituloDetalhe}>Bolos</Text>
                                    <Text style={detalhesProdutoStyles.valorDetalhe}>R$ 18,80</Text>
                                    <Text style={detalhesProdutoStyles.descricaoDetalhe}>  Feito com aveia e adoçado naturalmente  pela fruta
                                        sem adição de açucar ou farinha de trigo. A opção
                                        perfeita  e saudavel para acompanhar seu café.</Text>
                                    <Text style={detalhesProdutoStyles.tituloDescricao}>Descrição</Text>
                                    <Text style={detalhesProdutoStyles.descricaoDetalhe}>  Bolo de banana fit, uma alternativa leve, saudavel e
                                        cheia de energia para sua rotina. Desenvolvido sem
                                        farinha de trigo e sem açucar refinado, ele é adoçado
                                        exclusivamente pela doçura, natural das bananas
                                        maduras, garantindo um sabor autêntico e
                                        aconchegante.
                                        Rico em fibras graças á adição de aveia, este bolo é
                                        uma excelente fibra de saciedade e energia natural,
                                        ideial para o pré-treino, café da manhã ou lanche da
                                        tarde. </Text>
                                    <View>


                                        <View style={detalhesProdutoStyles.caixaQntde}>
                                            <Pressable style={detalhesProdutoStyles.btnQntde}><Image style={detalhesProdutoStyles.imgQntde}
                                                source={require('@/assets/images/img/retirar.png')} /></Pressable>
                                            <Text style={detalhesProdutoStyles.quantidade}>2</Text>
                                            <Pressable style={detalhesProdutoStyles.btnQntde}>
                                                <Image style={detalhesProdutoStyles.imgQntde} source={require('@/assets/images/img/adicionar.png')} />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>)
}