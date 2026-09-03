import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cores } from "@/styles/variaveis";
import globalStyle from '@/styles/globalstyles';
import { pagamentoStyles } from "@/styles/pagamento";

import FooterScreen from "@/app/footer";


export default function PagamentoScreen() {




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
                        <View style={pagamentoStyles.conteudo}>
                            <View style={pagamentoStyles.header}>
                                <View style={pagamentoStyles.conteudoHeader}>
                                    <Text style={pagamentoStyles.titulo}>Pagamento</Text>
                                    <View style={pagamentoStyles.bordaPerfil}>
                                        <Image
                                            style={pagamentoStyles.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={pagamentoStyles.subtitulo}>
                                    Confirme entrega e forma de pagamento.
                                </Text>
                            </View>
                            <View style={pagamentoStyles.main}>
                                <View style={pagamentoStyles.endereco}>
                                    <Image style={pagamentoStyles.enderecoImg}
                                        source={require('@/assets/images/img/local.png')}
                                        resizeMode="stretch" />
                                    <View style={pagamentoStyles.centroEndereco}>
                                        <Text style={pagamentoStyles.tituloEndereco}> Endereço de entrega</Text>
                                        <Text style={pagamentoStyles.residenciaEndereco}>Casa</Text>
                                        <Text style={pagamentoStyles.enderecoEndereco}>Avenida Marechal Tito,1500</Text>
                                        <Text style={pagamentoStyles.txtEndereco}>São Miguel Paulista - São Paulo - SP</Text>
                                        <Text style={pagamentoStyles.txtEndereco}>(11) 99999-9999</Text>

                                    </View>
                                    <View style={pagamentoStyles.direitaEndereco}>
                                        <Pressable style={({ pressed }) => [pagamentoStyles.btnEndereco, pressed && globalStyle.pressBtn]} >
                                            <Text style={pagamentoStyles.btntxtEndereco}>Alterar {'>'}</Text>
                                        </Pressable>

                                    </View>
                                </View>

                                <View style={pagamentoStyles.retirada}>
                                    <Image style={pagamentoStyles.imgRetirada}
                                        source={require('@/assets/images/img/delivery-laranja.png')} />
                                    <View style={pagamentoStyles.retiradaCentro}>
                                        <Text style={pagamentoStyles.tituloRetirada}>
                                            Endereço / Retira
                                        </Text>
                                        <View style={pagamentoStyles.btnRetirada}>
                                            <Pressable style={pagamentoStyles.btnEntregar}><Text style={pagamentoStyles.txt} >Entrega</Text></Pressable>
                                            <Pressable style={pagamentoStyles.btnRetirar}><Text style={pagamentoStyles.txt}>Retirada</Text></Pressable>
                                        </View>
                                    </View>
                                    <View style={pagamentoStyles.retiradaEsquerda}>
                                        <Text style={pagamentoStyles.tempoRetirada}>45 - 60 min</Text>
                                        <Text style={pagamentoStyles.previsaoRetirada}>Previsão</Text>
                                    </View>
                                </View>

                                <View style={pagamentoStyles.pagamento}>
                                    <Image
                                        source={require('@/assets/images/img/carteira.png')}
                                        style={pagamentoStyles.imgPagamento}
                                    />
                                    <View style={pagamentoStyles.infoPagamento}>
                                        <Text style={pagamentoStyles.tituloPagamento}>
                                            Forma de pagamento
                                        </Text>
                                        <View style={pagamentoStyles.tipoPagamento}>
                                            <Pressable style={pagamentoStyles.pix}>
                                                <Text style={pagamentoStyles.txtPagamento}>Pix</Text>
                                            </Pressable>
                                            <Pressable style={pagamentoStyles.cartao}>
                                                <Text style={pagamentoStyles.txtPagamento}>Cartão</Text>
                                            </Pressable>
                                            <Pressable style={pagamentoStyles.dinheiro}>
                                                <Text style={pagamentoStyles.txtPagamento} >Dinheiro</Text>
                                            </Pressable>
                                        </View>


                                    </View>

                                </View>

                                <View style={pagamentoStyles.obs}>
                                    <Image
                                        source={require('@/assets/images/img/mensagem.png')}
                                        style={pagamentoStyles.imgObs}
                                    />
                                    <View style={pagamentoStyles.infoObs}>
                                        <Text style={pagamentoStyles.tituloObs}>
                                            Observação
                                        </Text>
                                        <TextInput style={pagamentoStyles.inputObs}
                                            placeholderTextColor={cores.cinza}

                                            placeholder="Alguma observação para seu pedido?" />



                                    </View>

                                </View>

                                <View style={pagamentoStyles.resumo}>
                                    <View style={pagamentoStyles.topoResumo}>
                                        <Image style={pagamentoStyles.imgResumo}
                                            source={require('@/assets/images/img/pedido.png')} />
                                        <Text
                                            style={pagamentoStyles.tituloResumo}>Resumo do pedido</Text>
                                    </View>
                                    <View style={pagamentoStyles.infoResumo}>
                                        <View style={pagamentoStyles.caixaResumo}>
                                            <Image style={pagamentoStyles.imgItemResumo}
                                                source={require('@/assets/images/img/bolo01.png')} />
                                            <View style={pagamentoStyles.itemResumo}>
                                                <Text style={pagamentoStyles.txtResumo}>2x Bolo de Banana Fit</Text>
                                                <Text style={pagamentoStyles.txtValorResumo}>R$ 37,60</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={pagamentoStyles.infoResumo}>
                                        <View style={pagamentoStyles.caixaResumo}>
                                            <Image style={pagamentoStyles.imgItemResumo}
                                                source={require('@/assets/images/img/bolo01.png')} />
                                            <View style={pagamentoStyles.itemResumo}>
                                                <Text style={pagamentoStyles.txtResumo}>2x Bolo de Banana Fit</Text>
                                                <Text style={pagamentoStyles.txtValorResumo}>R$ 37,60</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={pagamentoStyles.infoResumo}>
                                        <View style={pagamentoStyles.caixaResumo}>
                                            <Image style={pagamentoStyles.imgItemResumo}
                                                source={require('@/assets/images/img/bolo01.png')} />
                                            <View style={pagamentoStyles.itemResumo}>
                                                <Text style={pagamentoStyles.txtResumo}>2x Bolo de Banana Fit</Text>
                                                <Text style={pagamentoStyles.txtValorResumo}>R$ 37,60</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={globalStyle.separador}></View>

                                    <View style={pagamentoStyles.areaSubtotal}>
                                        <Text style={pagamentoStyles.textSubtotal} >Subtotal</Text>
                                        <Text style={pagamentoStyles.valorSubtotal}
                                        >R$ 150,40</Text>
                                    </View>
                                    <View style={pagamentoStyles.areaEntrega}>
                                        <Text style={pagamentoStyles.txtEntrega} >Entrega</Text>
                                        <Text style={pagamentoStyles.valorEntrega}
                                        >R$ 8,00</Text>
                                    </View>

                                    <View style={pagamentoStyles.areaDesconto}>
                                        <Text style={pagamentoStyles.txtDesconto} >Desconto</Text>
                                        <Text style={pagamentoStyles.cupomDesconto}
                                        >THEGUSTA40</Text>
                                        <Text style={pagamentoStyles.valorDesconto}
                                        >R$ -15,84</Text>
                                    </View>
                                    <View style={globalStyle.separador}></View>
                                    <View style={pagamentoStyles.areaTotal}>
                                        <Text style={pagamentoStyles.txtTotal}>Total</Text>
                                        <Text style={pagamentoStyles.valorTotal}>R$ 142,56</Text>
                                    </View>


                                </View>



                                <Pressable style={({ pressed }) => [pagamentoStyles.btnPgamento, pressed && globalStyle.pressBtn]} onPress={() => router.navigate('/pagamento')}>
                                    <Text style={pagamentoStyles.txtConfirmar}>Confirmar Pedido</Text>
                                </Pressable>
                            </View>



                        </View>



                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>)
}