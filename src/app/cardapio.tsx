import { useState, useEffect, useRef } from "react";
import { router, useLocalSearchParams } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';

import FooterScreen from "@/app/footer";
import cardapioStyle from "@/styles/cardapioStyles";
import { cores } from "@/styles/variaveis";

const SERVIDOR = "http://localhost:8081";
const API = `${SERVIDOR}/api/v1`;
const IMAGEM = `${SERVIDOR}/davilla/images/`;


export default function CardapioScreen() {

    const [produtos, setProdutos] = useState<any[]>([]);
    const [categorias, setCategorias] = useState<any[]>([]);
    const [semImagem, setSemImagem] = useState<number[]>([]);
    const { categoria } = useLocalSearchParams();


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
                    .sort((a: any, b: any) => a.nome_produto - b.nome_produto);
                setProdutos(produtos)
                console.log('ta ai os produtos', produtos)
            } catch (erro) {
                console.log("deu b.o nos produtos", erro)
            }
        }
        carregarProdutos();

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


    const categoriasComProdutos = categorias
        .filter((categoria) =>
            produtos.some((produto) =>
                produto.categoria_produto.id_categoria === categoria.id_categoria
            ));

    const scrollRef = useRef<ScrollView>(null);
    const posicaoCategoria = useRef<{ [key: number]: number }>({});
    const scrollInicialRealizado = useRef(false);

    useEffect(() => {
        if (!categoria || scrollInicialRealizado.current)
        { return }
        const idCategoria = Number(categoria);
        const intervalo = setInterval(() => {
            const posicao = posicaoCategoria.current[idCategoria];
            if (posicao != undefined) {
                scrollRef.current?.scrollTo({
                    y: posicao, animated: true,
                });
                scrollInicialRealizado.current = true;
                clearInterval(intervalo);
            }
        }, 100);
    }, [])

    const alterarFavorito = (id: number) => {
        setProdutos((produtoFavorito) =>
            produtoFavorito.map((produto) =>
                produto.id_produto === id
                    ? { ...produto, favorito: !produto.favorito }
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
                    <Pressable style={globalStyle.btnVoltar} onPress={() => router.back}>
                        <Image style={globalStyle.imgVoltar} source={require('@/assets/images/img/voltar.png')} />
                    </Pressable>
                    <ScrollView
                        ref={scrollRef}
                        style={globalStyle.scrollConteudo}>
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
                                    {categoriasComProdutos.map((categoria) => (

                                        <Pressable
                                            key={categoria.id_categoria}
                                            style={({ pressed }) => [cardapioStyle.itemCategoria, pressed && globalStyle.pressBtn]}
                                            onPress={() => router.push({
                                                pathname: "/cardapio",
                                                params: {
                                                    categoria: categoria.id_categoria.toString(),
                                                },
                                            })}
                                        >

                                            <Text style={cardapioStyle.txtCategoria}>{categoria.nome_categoria}</Text>
                                        </Pressable>
                                    ))}

                                </View>


                                {categoriasComProdutos
                                    .map((categoria) => (
                                        <View
                                            key={categoria.id_categoria}
                                            style={cardapioStyle.categoria}
                                            onLayout={(event) => {
                                                posicaoCategoria.current[categoria.id_categoria] =
                                                    event.nativeEvent.layout.y;
                                            }}
                                        >
                                            <Text style={cardapioStyle.tituloCategoria} >{categoria.nome_categoria}</Text>

                                            <View style={cardapioStyle.produtos}>
                                                {produtos
                                                    .filter((produto) => produto.categoria_produto.id_categoria === categoria.id_categoria)
                                                    .map((produto) => (
                                                        <View
                                                            key={produto.id_produto}
                                                            style={cardapioStyle.itemProduto}>
                                                            <View style={cardapioStyle.caixaImagem} >
                                                                <Image
                                                                    source={
                                                                        semImagem.includes(produto.id_produto) || !produto.foto_produto
                                                                            ? { uri: `${IMAGEM}/produto/sem-imagem.png` }
                                                                            : { uri: `${IMAGEM}/${produto.foto_produto}` }
                                                                    }
                                                                    onError={() => {
                                                                        setSemImagem((imagem) => [
                                                                            ...imagem,
                                                                            produto.id_produto
                                                                        ]);
                                                                    }}

                                                                    style={cardapioStyle.imgDestaque} />
                                                                <Pressable onPress={() => alterarFavorito(produto.id_produto)} style={cardapioStyle.btnFavorito}>
                                                                    <Text style={cardapioStyle.iconeFavorito}>{produto.favorito ? "★" : "☆"}</Text>
                                                                </Pressable>
                                                            </View>
                                                            <Text style={cardapioStyle.nomeProduto}>{produto.nome_produto}</Text>
                                                            <Text style={cardapioStyle.descricaoProduto}>{produto.descricao_produto}</Text>
                                                            <View style={cardapioStyle.valorContainer}>
                                                                <Text style={cardapioStyle.valorProduto}>
                                                                    {Number(produto.valor_produto)
                                                                        .toLocaleString('pt-BR',
                                                                            {
                                                                                style: "currency",
                                                                                currency: "BRL",
                                                                            })}
                                                                </Text>
                                                                <Pressable style={cardapioStyle.btnAdicionar} onPress={() => router.navigate('/detalheProduto')}>
                                                                    <Image style={cardapioStyle.imgAdicionar} source={require('@/assets/images/img/mais.png')} />
                                                                </Pressable>
                                                            </View>
                                                        </View>

                                                    ))}

                                            </View>

                                        </View>

                                    ))}

                            </View>

                        </View>



                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>)
}