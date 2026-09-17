import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import { pedidosStyles } from "@/styles/pedidosStyles";
import FooterScreen from "@/app/footer";


export default function PedidoScreen() {
    const [tipoRetirada, setTipoRetirada] = useState<"entrega" | "retirada">("entrega");

    const itensResumo = [
        {
            id: 1,
            image: require('@/assets/images/img/bolo01.png'),
            valor: 'R$ 150,40',
            nome: ' Bolo de Banana Fit',
            qntd: 2,
            preco: 'R$ 37,60',

        },
        {
            id: 2,
            image: require('@/assets/images/img/bolo01.png'),
            valor: 'R$ 150,40',
            nome: ' Bolo de Banana Fit',
            qntd: 2,
            preco: 'R$ 37,60',
        },
        {
            id: 3,
            image: require('@/assets/images/img/bolo01.png'),
            valor: 'R$ 150,40',
            nome: ' Bolo de Banana Fit',
            qntd: 2,
            preco: 'R$ 37,60',
        },
    ];



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
                        <View style={pedidosStyles.conteudo}>
                            <View style={pedidosStyles.header}>
                                <View style={pedidosStyles.conteudoHeader}>
                                    <Text style={pedidosStyles.titulo}>Meus pedidos</Text>
                                    <View style={pedidosStyles.bordaPerfil}>
                                        <Image
                                            style={pedidosStyles.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={pedidosStyles.subtitulo}>
                                    Acompanhe seus pedidos e seu histórico.
                                </Text>
                            </View>
                            <View style={pedidosStyles.main}>
                                <View style={pedidosStyles.posicaoPedido}>

                                    <View style={pedidosStyles.btnAndamento}>
                                        <Pressable onPress={() => setTipoRetirada('entrega')}
                                            style={[
                                                pedidosStyles.btnOpcao,
                                                pedidosStyles.btnOpcaoEsquerda,
                                                tipoRetirada === "entrega" && pedidosStyles.btnAtivo,
                                            ]}><Text style={[
                                                    pedidosStyles.txt,
                                                    tipoRetirada === "entrega"
                                                        ? pedidosStyles.txtAtivo
                                                        : pedidosStyles.txtInativo,
                                                ]}>Entrega</Text></Pressable>
                                        <Pressable onPress={() => setTipoRetirada('retirada')} style={[
                                            pedidosStyles.btnOpcao,
                                            pedidosStyles.btnOpcaoDireita,
                                            tipoRetirada === "retirada" && pedidosStyles.btnAtivo,
                                        ]}><Text style={[
                                            pedidosStyles.txt,
                                            tipoRetirada === "retirada"
                                                ? pedidosStyles.txtAtivo
                                                : pedidosStyles.txtInativo,
                                        ]}>Retirada</Text></Pressable>
                                    </View>
                                </View>

                                <View style={pedidosStyles.resumo}>

                                    <View style={pedidosStyles.topoResumo}>
                                        <View style={pedidosStyles.esquerdatopoResumo}>
                                            <Image style={pedidosStyles.imgPreparo}
                                                source={require('@/assets/images/img/preparando-laranja.png')} />
                                            <Text
                                                style={pedidosStyles.tituloResumo}>Pedido {'#'}1035</Text>
                                        </View>
                                        <View style={pedidosStyles.statusPedido}>
                                            <Image style={pedidosStyles.imgStatus}

                                                source={require('@/assets/images/img/preparando-laranja.png')} />
                                            <Text style={pedidosStyles.txtStatus}>Em preparo</Text>
                                        </View>
                                    </View>


                                    <View style={pedidosStyles.areaResumo}>

                                        <View style={pedidosStyles.infoResumo}>
                                            {itensResumo.map((item) => (
                                                <View style={pedidosStyles.caixaResumo}
                                                    key={item.id}>
                                                    <Image style={pedidosStyles.imgItemResumo}
                                                        source={item.image} />
                                                    <View style={pedidosStyles.itemResumo}>
                                                        <Text style={pedidosStyles.txtResumo}> {item.qntd} X {item.nome}   </Text>

                                                    </View>
                                                </View>


                                            ))}

                                        </View>
                                        <Image style={pedidosStyles.imgResumo}
                                            source={require('@/assets/images/img/preparando-laranja.png')}
                                            resizeMode="stretch" />
                                    </View>


                                    <View style={globalStyle.separador}></View>

                                    <View style={pedidosStyles.rodapeResumo}>

                                        <View style={pedidosStyles.areaTotal}>
                                            <Text style={pedidosStyles.txtTotal}>Total</Text>
                                            <Text style={pedidosStyles.valorTotal}>R$ 142,56</Text>
                                        </View>
                                        <View style={pedidosStyles.areaPrevisao}>
                                            <Image style={pedidosStyles.imgPrevisao}
                                                source={require('@/assets/images/img/previsao.png')}
                                                resizeMode="stretch" />

                                            <View style={pedidosStyles.tempoPrevisao}>
                                                <Text style={pedidosStyles.txtPrevisao}>Previsão</Text>
                                                <Text style={pedidosStyles.txtTempoPrevisao} >45 - 60 min</Text>
                                            </View>

                                        </View>
                                    </View>
                                    <View style={pedidosStyles.areaPrevisao}>

                                    </View>
                                    <Pressable onPress={() => router.navigate('/detalhe-pedido')} style={({ pressed }) => [pedidosStyles.btnDetalhes, pressed && globalStyle.pressBtn]}>
                                        <Text style={pedidosStyles.txtDetalhes}> Ver detalhes</Text>
                                    </Pressable>



                                </View>

                                <View style={pedidosStyles.resumo}>

                                    <View style={pedidosStyles.topoResumo}>
                                        <View style={pedidosStyles.esquerdatopoResumo}>
                                            <Image style={pedidosStyles.imgPreparo}
                                                source={require('@/assets/images/img/preparando-laranja.png')} />
                                            <Text
                                                style={pedidosStyles.tituloResumo}>Pedido {'#'}1032</Text>
                                        </View>
                                        <View style={pedidosStyles.statusPedido}>
                                            <Image style={pedidosStyles.imgStatus}

                                                source={require('@/assets/images/img/aguardando-laranja.png')} />
                                            <Text style={pedidosStyles.txtStatus}>Aguardando</Text>
                                        </View>
                                    </View>


                                    <View style={pedidosStyles.areaResumo}>

                                        <View style={pedidosStyles.infoResumo}>
                                            {itensResumo.map((item) => (
                                                <View style={pedidosStyles.caixaResumo}
                                                    key={item.id}>
                                                    <Image style={pedidosStyles.imgItemResumo}
                                                        source={item.image} />
                                                    <View style={pedidosStyles.itemResumo}>
                                                        <Text style={pedidosStyles.txtResumo}> {item.qntd} X {item.nome}   </Text>

                                                    </View>
                                                </View>


                                            ))}

                                        </View>
                                        <Image style={pedidosStyles.imgResumo}
                                            source={require('@/assets/images/img/aguardando-laranja.png')}
                                            resizeMode="stretch" />
                                    </View>


                                    <View style={globalStyle.separador}></View>

                                    <View style={pedidosStyles.rodapeResumo}>

                                        <View style={pedidosStyles.areaTotal}>
                                            <Text style={pedidosStyles.txtTotal}>Total</Text>
                                            <Text style={pedidosStyles.valorTotal}>R$ 142,56</Text>
                                        </View>
                                        <View style={pedidosStyles.areaPrevisao}>
                                            <Image style={pedidosStyles.imgPrevisao}
                                                source={require('@/assets/images/img/previsao.png')}
                                                resizeMode="stretch" />

                                            <View style={pedidosStyles.tempoPrevisao}>
                                                <Text style={pedidosStyles.txtPrevisao}>Previsão</Text>
                                                <Text style={pedidosStyles.txtTempoPrevisao} >45 - 60 min</Text>
                                            </View>

                                        </View>
                                    </View>
                                    <View style={pedidosStyles.areaPrevisao}>

                                    </View>
                                    <Pressable onPress={() => router.navigate('/detalhe-pedido')} style={({ pressed }) => [pedidosStyles.btnDetalhes, pressed && globalStyle.pressBtn]}>
                                        <Text style={pedidosStyles.txtDetalhes}> Ver detalhes</Text>
                                    </Pressable>



                                </View>

                                <View style={pedidosStyles.resumo}>

                                    <View style={pedidosStyles.topoResumo}>
                                        <View style={pedidosStyles.esquerdatopoResumo}>
                                            <Image style={pedidosStyles.imgPreparo}
                                                source={require('@/assets/images/img/delivery-laranja.png')} />
                                            <Text
                                                style={pedidosStyles.tituloResumo}>Pedido {'#'}1031</Text>
                                        </View>
                                        <View style={pedidosStyles.statusPedido}>
                                            <Image style={pedidosStyles.imgStatus}

                                                source={require('@/assets/images/img/delivery-laranja.png')} />
                                            <Text style={pedidosStyles.txtStatus}>Aguardando</Text>
                                        </View>
                                    </View>


                                    <View style={pedidosStyles.areaResumo}>

                                        <View style={pedidosStyles.infoResumo}>
                                            {itensResumo.map((item) => (
                                                <View style={pedidosStyles.caixaResumo}
                                                    key={item.id}>
                                                    <Image style={pedidosStyles.imgItemResumo}
                                                        source={item.image} />
                                                    <View style={pedidosStyles.itemResumo}>
                                                        <Text style={pedidosStyles.txtResumo}> {item.qntd} X {item.nome}   </Text>

                                                    </View>
                                                </View>


                                            ))}

                                        </View>
                                        <Image style={pedidosStyles.imgResumo}
                                            source={require('@/assets/images/img/delivery-laranja.png')}
                                            resizeMode="stretch" />
                                    </View>


                                    <View style={globalStyle.separador}></View>

                                    <View style={pedidosStyles.rodapeResumo}>

                                        <View style={pedidosStyles.areaTotal}>
                                            <Text style={pedidosStyles.txtTotal}>Total</Text>
                                            <Text style={pedidosStyles.valorTotal}>R$ 142,56</Text>
                                        </View>
                                        <View style={pedidosStyles.areaPrevisao}>
                                            <Image style={pedidosStyles.imgPrevisao}
                                                source={require('@/assets/images/img/previsao.png')}
                                                resizeMode="stretch" />

                                            <View style={pedidosStyles.tempoPrevisao}>
                                                <Text style={pedidosStyles.txtPrevisao}>Previsão</Text>
                                                <Text style={pedidosStyles.txtTempoPrevisao} >45 - 60 min</Text>
                                            </View>

                                        </View>
                                    </View>
                                    <View style={pedidosStyles.areaPrevisao}>

                                    </View>
                                    <View style={pedidosStyles.btnPedido}>
                                        <Pressable onPress={() => router.navigate('/detalhe-pedido')} style={({ pressed }) => [pedidosStyles.btnDetalhes, pressed && globalStyle.pressBtn]}>
                                            <Text style={pedidosStyles.txtDetalhes}> Ver detalhes</Text>
                                        </Pressable>
                                        <Pressable style={({ pressed }) => [pedidosStyles.btnRastrear, pressed && globalStyle.pressBtn]}>
                                            <Text style={pedidosStyles.txtRastrear}>Rastrear</Text>
                                        </Pressable>
                                    </View>



                                </View>
                            </View>
                        </View>



                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View >)
}