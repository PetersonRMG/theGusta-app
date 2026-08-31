import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '../styles/globalstyles';
import homeStyles from "@/styles/homeStyles";
import { cores } from "@/styles/variaveis";
import FooterScreen from "./footer";


export default function HomeScreen() {
    return (
        <View style={globalStyle.container}>
            <ImageBackground
                source={require('@/assets/images/img/00_fundo.png')}
                style={globalStyle.background}
                resizeMode="stretch"
            >
                <SafeAreaView style={globalStyle.areaConteudo}>

                    <ScrollView style={globalStyle.scrollConteudo}>
                        <View style={homeStyles.header}>
                            <View style={homeStyles.conteudo}>
                                <Text style={homeStyles.titulo}>Olá, Cliente</Text>
                                <View style={homeStyles.bordaPerfil}>
                                    <Image
                                        style={homeStyles.perfil}
                                        source={require('@/assets/images/img/user.png')} />
                                </View>
                            </View>
                            <Text style={homeStyles.subtitulo}>
                                O que vai adoçar o seu dia hoje ?
                            </Text>
                        </View>

                        <View style={homeStyles.main}>
                            <View style={homeStyles.buscarProduto}>
                                <TextInput
                                    style={homeStyles.txtProduto}
                                    placeholder="Buscar produto"
                                    placeholderTextColor={cores.cinza}
                                    keyboardType="email-address"
                                    autoCapitalize="none"

                                />
                                <Pressable style={homeStyles.btnBuscar}>
                                    <Image
                                        source={require('@/assets/images/img/lupa.png')}
                                        style={homeStyles.icone} />
                                </Pressable>
                            </View>

                            <Image
                                style={homeStyles.banner}
                                source={require('@/assets/images/img/banner.png')}
                                resizeMode="stretch"
                            />


                            <View style={homeStyles.categoria}>
                                <Text style={homeStyles.tituloSecao}>Categorias
                                </Text>
                                <View style={homeStyles.conteudoCategoria} >
                                    <View style={homeStyles.itemCategoria}>
                                        <Image source={require('@/assets/images/img/bolo.png')} style={homeStyles.imgCategoria} />
                                        <Text style={homeStyles.txtCategoria}>Bolos</Text>
                                    </View>
                                    <View style={homeStyles.itemCategoria}>
                                        <Image source={require('@/assets/images/img/brigadeiro.png')} style={homeStyles.imgCategoria} />
                                        <Text style={homeStyles.txtCategoria}>Doces</Text>
                                    </View>
                                    <View style={homeStyles.itemCategoria}>
                                        <Image source={require('@/assets/images/img/torta.png')} style={homeStyles.imgCategoria} />
                                        <Text style={homeStyles.txtCategoria}>Tortas</Text>
                                    </View>
                                    <View style={homeStyles.itemCategoria}>
                                        <Image source={require('@/assets/images/img/copo-de-plastico.png')} style={homeStyles.imgCategoria} />
                                        <Text style={homeStyles.txtCategoria}>Bebidas</Text>
                                    </View>
                                    <View style={homeStyles.itemCategoria} >
                                        <Image source={require('@/assets/images/img/presente-de-supermercado.png')} style={homeStyles.imgCategoria} />
                                        <Text style={homeStyles.txtCategoria}>Kits</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={homeStyles.destaque}>
                                <Text style={homeStyles.tituloSecao}>Destaques
                                </Text>
                                <ScrollView
                                    contentContainerStyle={homeStyles.conteudoDestaque}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={homeStyles.itemDestaque}>
                                        <View style={homeStyles.caixaImagem} >
                                            <Image source={require('@/assets/images/img/bolo01.png')} style={homeStyles.imgDestaque} />
                                            <Pressable style={homeStyles.btnFavorito}>
                                                <Text style={homeStyles.iconeFavorito}>★</Text>
                                            </Pressable>
                                        </View>
                                        <Text style={homeStyles.nomeProduto}>Bolo de banana fit</Text>
                                        <Text style={homeStyles.descricaoProduto}>Banana Prata com
                                            canela e gergilim</Text>
                                        <View style={homeStyles.valorContainer}>
                                            <Text style={homeStyles.valorProduto}>R$ 18,00</Text>
                                            <Pressable style={homeStyles.btnAdicionar}>
                                                <Image style={homeStyles.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                            </Pressable>
                                        </View>
                                    </View>
                                    <View style={homeStyles.itemDestaque}>
                                        <View style={homeStyles.caixaImagem} >
                                            <Image source={require('@/assets/images/img/bolo01.png')} style={homeStyles.imgDestaque} />
                                            <Pressable style={homeStyles.btnFavorito}>
                                                <Text style={homeStyles.iconeFavorito}>★</Text>
                                            </Pressable>
                                        </View>
                                        <Text style={homeStyles.nomeProduto}>Bolo de banana fit</Text>
                                        <Text style={homeStyles.descricaoProduto}>Banana Prata com
                                            canela e gergilim</Text>
                                        <View style={homeStyles.valorContainer}>
                                            <Text style={homeStyles.valorProduto}>R$ 18,00</Text>
                                            <Pressable style={homeStyles.btnAdicionar}>
                                                <Image style={homeStyles.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                            </Pressable>
                                        </View>
                                    </View>
                                    <View style={homeStyles.itemDestaque}>
                                        <View style={homeStyles.caixaImagem} >
                                            <Image source={require('@/assets/images/img/bolo01.png')} style={homeStyles.imgDestaque} />
                                            <Pressable style={homeStyles.btnFavorito}>
                                                <Text style={homeStyles.iconeFavorito}>★</Text>
                                            </Pressable>
                                        </View>
                                        <Text style={homeStyles.nomeProduto}>Bolo de banana fit</Text>
                                        <Text style={homeStyles.descricaoProduto}>Banana Prata com
                                            canela e gergilim</Text>
                                        <View style={homeStyles.valorContainer}>
                                            <Text style={homeStyles.valorProduto}>R$ 18,00</Text>
                                            <Pressable style={homeStyles.btnAdicionar}>
                                                <Image style={homeStyles.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                            </Pressable>
                                        </View>
                                    </View>


                                </ScrollView>
                            </View>

                        </View>
                    </ScrollView>
                    <FooterScreen/>
                </SafeAreaView>

            </ImageBackground>
        </View>
    )
}