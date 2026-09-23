import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '../styles/globalstyles';
import homeStyles from "@/styles/homeStyles";
import { cores } from "@/styles/variaveis";
import FooterScreen from "./footer";


export default function HomeScreen() {

    const [produtosDestaque, setProdutosDestaque] = useState([
        {
            id: 1,
            nome: "Bolo de Banana Fit",
            descricao: "Banana prata com canela e gergilim",
            categoria: "Bolos",
            valor: "18,80",
            imagem: require('@/assets/images/img/bolo01.png'),
            status: "ativo",
            favorito: false

        },
        {
            id: 2,
            nome: "Bolo de chocolate",
            descricao: "Chocolate com cobertura cremosa",
            categoria: "Bolos",
            valor: "21,80",
            imagem: require('@/assets/images/img/bolo01.png'),
            status: "ativo",
            favorito: false
        },
        {
            id: 3,
            nome: "Bolo de Cenoura",
            descricao: "Cenoura com cobertura de chocolate",
            categoria: "Bolos",
            valor: "19,80",
            imagem: require('@/assets/images/img/bolo01.png'),
            status: "ativo",
            favorito: false
        },
        {
            id: 4,
            nome: "Brigadeiro Gourmet",
            descricao: "Brigadeiro de chocolate com cobertura de chantily",
            categoria: "Doces",
            valor: "6,80",
            imagem: require('@/assets/images/img/bolo01.png'),
            status: "ativo",
            favorito: false
        }
    ]);

    const alterarFavorito = (id: number) => {
        setProdutosDestaque((produtoFavorito) =>
            produtoFavorito.map((produto) =>
                produto.id === id
                    ? {...produto , favorito: !produto.favorito}
                    : produto,
            ),
        );
    };
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
                                    horizontal
                                    nestedScrollEnabled={true}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={homeStyles.conteudoDestaque}
                                    
                                >

                                    {produtosDestaque.map((produto) => (

                                        <View key={produto.id} style={homeStyles.itemDestaque}>
                                            <View style={homeStyles.caixaImagem} >
                                                <Image source={produto.imagem} style={homeStyles.imgDestaque} />
                                                <Pressable onPress={()=>alterarFavorito(produto.id)} style={homeStyles.btnFavorito}>
                                                    <Text style={homeStyles.iconeFavorito}>
                                                        {produto.favorito ? "★" : "☆"}
                                                    </Text>
                                                </Pressable>
                                            </View>
                                            <Text style={homeStyles.nomeProduto}>{produto.nome}</Text>
                                            <Text style={homeStyles.descricaoProduto}>{produto.descricao}</Text>
                                            <View style={homeStyles.valorContainer}>
                                                <Text style={homeStyles.valorProduto}>R$ {produto.valor}</Text>
                                                <Pressable style={homeStyles.btnAdicionar}>
                                                    <Image style={homeStyles.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                </Pressable>
                                            </View>
                                        </View>


                                    ))}
                                </ScrollView>
                            </View>

                        </View>
                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>
    )
}