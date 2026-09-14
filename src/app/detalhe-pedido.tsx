import { useState } from "react";
import { router } from "expo-router";

import { Linking } from "react-native";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import { detalhePedidoStyles } from "@/styles/detalhePedidoStyles";
import FooterScreen from "@/app/footer";


export default function DetalhePedidoScreen() {

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
                        <View style={detalhePedidoStyles.conteudo}>

                            <View style={detalhePedidoStyles.header}>
                                <View style={detalhePedidoStyles.conteudoHeader}>
                                    <Text style={detalhePedidoStyles.titulo}>Detalhes do pedidos</Text>
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
                            <View style={detalhePedidoStyles.main}>
                                <View style={detalhePedidoStyles.areaPedido}>
                                    <Image style={detalhePedidoStyles.imgPedido} source={require('@/assets/images/img/pedido.png')} />
                                    <View style={detalhePedidoStyles.resumoPedido}>
                                        <Text style={detalhePedidoStyles.numeroPedido}>Pedido {"#"} 1035</Text>
                                        <Text style={detalhePedidoStyles.horarioPedido}>Hoje, 08:00</Text>
                                    </View>
                                    <View style={detalhePedidoStyles.statusPedido}>
                                        <Image style={detalhePedidoStyles.imgStatus} source={require('@/assets/images/img/delivery-laranja.png')} />
                                        <Text style={detalhePedidoStyles.txtStatus}> Saiu para entrega</Text>
                                    </View>
                                </View>

                                <View style={detalhePedidoStyles.areaAcompanhar}>
                                    <View style={detalhePedidoStyles.acompanhamentoPedido}>
                                        <View style={[detalhePedidoStyles.areaIconeEtapa, detalhePedidoStyles.etapaFinalizada]}>
                                            <Image
                                                source={require('@/assets/images/img/preparando-verde.png')} style={detalhePedidoStyles.iconeEtapa} />

                                        </View>
                                        <View style={[detalhePedidoStyles.linha, detalhePedidoStyles.linhaFinalizada]}></View>
                                        <View
                                            style={[detalhePedidoStyles.areaIconeEtapa, detalhePedidoStyles.etapaEmAndamento]}>
                                            <Image source={require('@/assets/images/img/delivery-laranja.png')} style={detalhePedidoStyles.iconeEtapa} />
                                        </View>
                                        <View style={[detalhePedidoStyles.linha, detalhePedidoStyles.linhaEmAndamento]}></View>
                                        <View style={[detalhePedidoStyles.areaIconeEtapa]}>
                                            <Image source={require('@/assets/images/img/entregue-cinza.png')} style={detalhePedidoStyles.iconeEtapa} />
                                        </View>
                                    </View>
                                    <View style={detalhePedidoStyles.textoAcompanhar}>

                                        <Text style={detalhePedidoStyles.textoPedido}>Em Preparo</Text>

                                        <Text style={detalhePedidoStyles.textoPedido}>Saiu para entrega</Text>


                                        <Text style={detalhePedidoStyles.textoPedido}>Entrega realizada</Text>

                                    </View>
                                    <View style={detalhePedidoStyles.statusAcompanhar}>
                                        <Image style={detalhePedidoStyles.imgStatusAcompanhar} source={require('@/assets/images/img/previsao.png')} />
                                        <Text style={detalhePedidoStyles.txtStatusAcompanhar}> Saiu para entrega</Text>
                                        <Text style={detalhePedidoStyles.txtStatusTempo}> 40 - 55 min</Text>
                                    </View>
                                </View>

                                <View style={detalhePedidoStyles.resumo}>
                                    <View style={detalhePedidoStyles.topoResumo}>
                                        <Image style={detalhePedidoStyles.imgResumo}
                                            source={require('@/assets/images/img/pedido.png')} />
                                        <Text
                                            style={detalhePedidoStyles.tituloResumo}>Resumo do pedido</Text>
                                    </View>
                                    <View style={detalhePedidoStyles.infoResumo}>
                                        {itensResumo.map((item) => (
                                            <View style={detalhePedidoStyles.caixaResumo}
                                                key={item.id}>
                                                <Image style={detalhePedidoStyles.imgItemResumo}
                                                    source={item.image} />
                                                <View style={detalhePedidoStyles.itemResumo}>
                                                    <Text style={detalhePedidoStyles.txtResumo}> {item.qntd} X {item.nome}   </Text>
                                                    <Text style={detalhePedidoStyles.txtValorResumo}>{item.valor}</Text>

                                                </View>
                                            </View>


                                        ))}
                                    </View>

                                    <View style={globalStyle.separador}></View>

                                    <View style={detalhePedidoStyles.areaSubtotal}>
                                        <Text style={detalhePedidoStyles.textSubtotal} >Subtotal</Text>
                                        <Text style={detalhePedidoStyles.valorSubtotal}
                                        >R$ 150,40</Text>
                                    </View>
                                    <View style={detalhePedidoStyles.areaEntrega}>
                                        <Text style={detalhePedidoStyles.txtEntrega} >Entrega</Text>
                                        <Text style={detalhePedidoStyles.valorEntrega}
                                        >R$ 8,00</Text>
                                    </View>

                                    <View style={detalhePedidoStyles.areaDesconto}>
                                        <Text style={detalhePedidoStyles.txtDesconto} >Desconto</Text>
                                        <Text style={detalhePedidoStyles.cupomDesconto}
                                        >THEGUSTA40</Text>
                                        <Text style={detalhePedidoStyles.valorDesconto}
                                        >R$ -15,84</Text>
                                    </View>
                                    <View style={globalStyle.separador}></View>
                                    <View style={detalhePedidoStyles.areaTotal}>
                                        <Text style={detalhePedidoStyles.txtTotal}>Total</Text>
                                        <Text style={detalhePedidoStyles.valorTotal}>R$ 142,56</Text>
                                    </View>


                                </View>

                                <View style={detalhePedidoStyles.areaPagamento}>
                                    <View style={detalhePedidoStyles.tituloPagamento}>
                                        <Image source={require('@/assets/images/img/carteira.png')}
                                            resizeMode="stretch" style={detalhePedidoStyles.imgTituloPagamento} />
                                        <Text style={detalhePedidoStyles.txtTituloPagamento}>Forma de pagamento</Text>
                                    </View>
                                    <View style={detalhePedidoStyles.statusPagamento}>
                                        <Image source={require('@/assets/images/img/pix.png')}
                                            resizeMode="stretch" style={detalhePedidoStyles.imgForma} />
                                        <Text style={detalhePedidoStyles.txtForma}>Pix</Text>
                                    </View>
                                </View>


                                <View style={detalhePedidoStyles.obs}>
                                    <Image
                                        source={require('@/assets/images/img/mensagem.png')}
                                        style={detalhePedidoStyles.imgObs}
                                    />
                                    <View style={detalhePedidoStyles.infoObs}>
                                        <Text style={detalhePedidoStyles.tituloObs}>
                                            Observação
                                        </Text>
                                        <Text style={detalhePedidoStyles.txtObservação}
                                        > Nenhuma observação para seu pedido</Text>



                                    </View>

                                </View>

                                <View style={detalhePedidoStyles.botoesDetalhes} >
                                    <Pressable onPress={()=> Linking.openURL(`https://wa.me/5511981253353`)} style={({ pressed }) => [detalhePedidoStyles.btnDetalhes, pressed && globalStyle.pressBtn]
                                         }>
                                        <Image source={require('@/assets/images/img/mensagem.png')}
                                            resizeMode="stretch" style={detalhePedidoStyles.imgDetalhes} />
                                        <Text  style={detalhePedidoStyles.txtDetalhes}>Falar com a loja</Text>
                                    </Pressable>
                                    <Pressable onPress={()=>router.navigate('/pagamento')} style={({ pressed }) => [detalhePedidoStyles.btnDetalhes, pressed && globalStyle.pressBtn]
                                    }>
                                        <Image source={require('@/assets/images/img/repetir.png')}
                                            resizeMode="stretch" style={detalhePedidoStyles.imgDetalhes} />
                                        <Text style={detalhePedidoStyles.txtDetalhes}>Pedir novamente</Text>
                                    </Pressable>
                                </View>

                            </View>



                        </View>


                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>

        //         style = {({ pressed }) => [detalhePedidoStyles.btnPgamento, pressed && globalStyle.pressBtn]
        // } onPress = {() => router.navigate('/pagamento')}

    )
}