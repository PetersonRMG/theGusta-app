import { useEffect, useState, useRef } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '../styles/globalstyles';
import homeStyles from "@/styles/homeStyles";
import { cores } from "@/styles/variaveis";
import FooterScreen from "./footer";

const SERVIDOR = "http://localhost:8081";
const API = `${SERVIDOR}/api/v1`;
const IMAGEM = `${SERVIDOR}/davilla/images/`;

export default function HomeScreen() {
    const [produtos, setProdutos] = useState<any[]>([]);
    const [categorias, setCategorias] = useState<any[]>([]);
    const [produtosEmDestaque, setProdutosEmDestaque] = useState<any[]>([]);

    console.log('teste', IMAGEM)

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const resposta = await fetch(`${API}/produtos`)
                const json = await resposta.json();

                const produtos = json.data
                    .filter((produto: any) => produto.status_produto === "ATIVO")
                    .map((produto: any) => ({
                        ...produto,

                        favorito: false,
                    }))
                setProdutos(produtos)

                const destaques = produtos.filter(
                    (produto: any) => produto.destaque_produto === "SIM")
                setProdutosEmDestaque(destaques);
                console.log('ta ai os produtos', produtos)
            } catch (erro) {
                console.log("deu b.o", erro)
            }
        }
        carregarProdutos()

        async function carregarCategorias() {
            try {
                const resposta = await fetch(`${API}/categorias`);
                const json = await resposta.json();
                const categoriasAtivas = json.data
                    .filter((categoria: any) => categoria.status_categoria === "ATIVO")
                    .sort((a: any, b: any) => a.ordem_categoria - b.ordem_categoria);
                setCategorias(categoriasAtivas);
                console.log('categorias', categoriasAtivas)

            } catch (erro) {
                console.log("deu b.o nas categorias", erro)
            }
        }
        carregarCategorias();

    }, [])

    const [semImg, setSemImg] = useState<number[]>([]);

    const categoriasComProdutos = categorias
        .filter((categoria) =>
            produtos.some((produto) =>
                produto.categoria_produto.id_categoria === categoria.id_categoria
            ));

    const alterarFavorito = (id: number) => {
        setProdutosEmDestaque((produtoFavorito) =>
            produtoFavorito.map((produto) =>
                produto.id_produto === id
                    ? { ...produto, favorito: !produto.favorito }
                    : produto,
            ),
        );
    };

    const posicaoCategoria = useRef<{ [key: number]: number }>({});
    const scrollRef = useRef<ScrollView>(null);
    
    function irParaCategoria(idCategoria: number) {
        const posicao = posicaoCategoria.current[idCategoria];
        if (posicao != undefined) {
            scrollRef.current?.scrollTo({ y: posicao, animated: true })
        }
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
                                    {categoriasComProdutos.map((categoria) => (

                                        <Pressable
                                            key={categoria.id_categoria}
                                            style={({ pressed }) => [homeStyles.itemCategoria, pressed && globalStyle.pressBtn]}
                                            onPress={() => router.push({
                                                pathname: "/cardapio",
                                                params: {
                                                    categoria:categoria.id_categoria.toString(),
                                                },
                                            })}
                                        >
                                            

                                            <Text style={homeStyles.txtCategoria}>{categoria.nome_categoria}</Text>
                                        </Pressable>
                                    ))}

                                </View>
                            </View>

                            <View style={homeStyles.destaque}>
                                <Text style={homeStyles.tituloSecao}>Destaques
                                </Text>
                                {produtosEmDestaque.length > 0 ? (
                                    <ScrollView
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={homeStyles.conteudoDestaque}

                                    >

                                        {produtosEmDestaque.map((produto) => (

                                            <View key={produto.id_produto} style={homeStyles.itemDestaque}>
                                                <View style={homeStyles.caixaImagem} >
                                                    <Image source={
                                                        semImg.includes(produto.id_produto) || !produto.foto_produto
                                                            ? { uri: `${IMAGEM}/produto/sem-imagem.png` }
                                                            : { uri: `${IMAGEM}/${produto.foto_produto}` }
                                                    }
                                                        onError={() => {
                                                            setSemImg((imagem) => [
                                                                ...imagem,
                                                                produto.id_prosuto
                                                            ]);
                                                        }}

                                                        style={homeStyles.imgDestaque} />
                                                    <Pressable onPress={() => alterarFavorito(produto.id_produto)} style={homeStyles.btnFavorito}>
                                                        <Text style={homeStyles.iconeFavorito}>
                                                            {produto.favorito ? "★" : "☆"}
                                                        </Text>
                                                    </Pressable>
                                                </View>
                                                <Text style={homeStyles.nomeProduto}>{produto.nome_produto}</Text>
                                                <Text style={homeStyles.descricaoProduto}>{produto.descricao_produto}</Text>
                                                <View style={homeStyles.valorContainer}>
                                                    {/* FORMATO DE CASAS DECIMAIS 
                                                 <Text style={homeStyles.valorProduto}>R$ {Number(produto.valor_produto).toFixed(2).replace(".", ",")}</Text> 
                                                 */}
                                                    {/* FORMATO MOEDA */}
                                                    <Text style={homeStyles.valorProduto}>
                                                        {Number(produto.valor_produto)
                                                            .toLocaleString('pt-BR',
                                                                {
                                                                    style: "currency",
                                                                    currency: "BRL",
                                                                })}
                                                    </Text>
                                                    <Pressable style={homeStyles.btnAdicionar}>
                                                        <Image style={homeStyles.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                    </Pressable>
                                                </View>
                                            </View>
                                        ))}
                                    </ScrollView>

                                ) : (
                                    <View>
                                        <Text>Nemhum produto em destaque</Text>
                                    </View>
                                )}
                            </View>

                        </View>
                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>
    )
}