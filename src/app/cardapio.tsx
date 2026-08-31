import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';

import FooterScreen from "@/app/footer";
import cardapioStyle from "@/styles/cardapioStyles";
import { cores } from "@/styles/variaveis";


export default function CardapioScreen() {




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
                        <View style={cardapioStyle.conteudo}>

                            <View style={cardapioStyle.header}>
                                <View style={cardapioStyle.conteudoHeader}>
                                    <Text style={cardapioStyle.titulo}>Cardápio</Text>
                                    <View style={cardapioStyle.bordaPerfil}>
                                        <Image
                                            style={cardapioStyle.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={cardapioStyle.subtitulo}>
                                    Escolha suas delicias saudáveis.
                                </Text>
                            </View>
                            <View style={cardapioStyle.main}>

                                <View style={cardapioStyle.buscarProduto}>
                                    <TextInput
                                        style={cardapioStyle.txtProduto}
                                        placeholder="Buscar produto"
                                        placeholderTextColor={cores.cinza}
                                        keyboardType="email-address"
                                        autoCapitalize="none"

                                    />
                                    <Pressable style={cardapioStyle.btnBuscar}>
                                        <Image
                                            source={require('@/assets/images/img/lupa.png')}
                                            style={cardapioStyle.icone} />
                                    </Pressable>
                                </View>

                                <View style={cardapioStyle.conteudoCategoria} >
                                    <View style={cardapioStyle.itemCategoria}>
                                        <Image source={require('@/assets/images/img/bolo.png')} style={cardapioStyle.imgCategoria} />
                                        <Text style={cardapioStyle.txtCategoria}>Bolos</Text>
                                    </View>
                                    <View style={cardapioStyle.itemCategoria}>
                                        <Image source={require('@/assets/images/img/brigadeiro.png')} style={cardapioStyle.imgCategoria} />
                                        <Text style={cardapioStyle.txtCategoria}>Doces</Text>
                                    </View>
                                    <View style={cardapioStyle.itemCategoria}>
                                        <Image source={require('@/assets/images/img/torta.png')} style={cardapioStyle.imgCategoria} />
                                        <Text style={cardapioStyle.txtCategoria}>Tortas</Text>
                                    </View>
                                    <View style={cardapioStyle.itemCategoria}>
                                        <Image source={require('@/assets/images/img/copo-de-plastico.png')} style={cardapioStyle.imgCategoria} />
                                        <Text style={cardapioStyle.txtCategoria}>Bebidas</Text>
                                    </View>
                                    <View style={cardapioStyle.itemCategoria} >
                                        <Image source={require('@/assets/images/img/presente-de-supermercado.png')} style={cardapioStyle.imgCategoria} />
                                        <Text style={cardapioStyle.txtCategoria}>Kits</Text>
                                    </View>
                                </View>


                                <View style={cardapioStyle.categoria}>
                                    <Text style={cardapioStyle.tituloCategoria} >Bolos</Text>
                                    <View style={cardapioStyle.produtos}>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={() => router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito} >
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito} onPress={() => router.navigate('/detalheProduto')}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                                <View style={cardapioStyle.categoria}>
                                    <Text style={cardapioStyle.tituloCategoria} >Doces</Text>
                                    <View style={cardapioStyle.produtos}>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                                <View style={cardapioStyle.categoria}>
                                    <Text style={cardapioStyle.tituloCategoria} >Tortas</Text>
                                    <View style={cardapioStyle.produtos}>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                                <View style={cardapioStyle.categoria}>
                                    <Text style={cardapioStyle.tituloCategoria} >Bebidas</Text>
                                    <View style={cardapioStyle.produtos}>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                                <View style={cardapioStyle.categoria}>
                                    <Text style={cardapioStyle.tituloCategoria} >Kits</Text>
                                    <View style={cardapioStyle.produtos}>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={cardapioStyle.itemProduto}>
                                            <View style={cardapioStyle.caixaImagem} >
                                                <Image source={require('@/assets/images/img/bolo01.png')} style={cardapioStyle.imgDestaque} />
                                                <Pressable style={cardapioStyle.btnFavorito}>
                                                    <Text style={cardapioStyle.iconeFavorito}>★</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={cardapioStyle.nomeProduto}>Bolo de banana fit</Text>
                                            <Text style={cardapioStyle.descricaoProduto}>Banana Prata com
                                                canela e gergilim</Text>
                                            <View style={cardapioStyle.valorContainer}>
                                                <Text style={cardapioStyle.valorProduto}>R$ 18,00</Text>
                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={()=> router.navigate('/detalheProduto')}>
                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
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