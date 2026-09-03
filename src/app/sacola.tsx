import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cores } from "@/styles/variaveis";
import globalStyle from '@/styles/globalstyles';
import { sacolaStyles } from "@/styles/sacola.Style";

import FooterScreen from "@/app/footer";


export default function SacolaScreen() {




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
                        <View style={sacolaStyles.conteudo}>
                            <View style={sacolaStyles.header}>
                                <View style={sacolaStyles.conteudoHeader}>
                                    <Text style={sacolaStyles.titulo}>Sacola</Text>
                                    <View style={sacolaStyles.bordaPerfil}>
                                        <Image
                                            style={sacolaStyles.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={sacolaStyles.subtitulo}>
                                    Revise seus itens antes de finalizar.
                                </Text>
                            </View>
                            <View style={sacolaStyles.main}>
                                <View style={sacolaStyles.itemSacola}>
                                    <Image style={sacolaStyles.itemImg}
                                        source={require('@/assets/images/img/bolo01.png')}
                                    resizeMode="stretch"/>
                                    <View style={sacolaStyles.centroItem}>
                                        <Text style={sacolaStyles.tituloItem}> Bolo de Banana Fit</Text>
                                        <Text style={sacolaStyles.descricaoItem}>Banana Prata com canela e gergilim</Text>
                                        <View style={sacolaStyles.valoresItem}>
                                            <Text style={sacolaStyles.valorUnitItem}>R$ 18,80</Text>
                                            <Text style={sacolaStyles.valorTotalItem}>R$ 37,60</Text>
                                        </View>
                                    </View>
                                    <View style={sacolaStyles.direitaItem}>
                                        <Pressable style={sacolaStyles.btnExcluir}>
                                            <Image
                                                style={sacolaStyles.imgExcluir}
                                                source={require('@/assets/images/img/lixeira.png')}
                                            />
                                        </Pressable>
                                        <View style={sacolaStyles.caixaQntde}>
                                            <Pressable style={sacolaStyles.btnQntde}><Image style={sacolaStyles.imgQntde}
                                                source={require('@/assets/images/img/retirar.png')}/></Pressable>
                                            <Text style={sacolaStyles.quantidade}>2</Text>
                                            <Pressable style={sacolaStyles.btnQntde}>
                                                <Image style={sacolaStyles.imgQntde} source={require('@/assets/images/img/adicionar.png')} />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>

                                <View style={sacolaStyles.itemSacola}>
                                    <Image style={sacolaStyles.itemImg}
                                        source={require('@/assets/images/img/bolo01.png')}
                                        resizeMode="stretch" />
                                    <View style={sacolaStyles.centroItem}>
                                        <Text style={sacolaStyles.tituloItem}> Bolo de Banana Fit</Text>
                                        <Text style={sacolaStyles.descricaoItem}>Banana Prata com canela e gergilim</Text>
                                        <View style={sacolaStyles.valoresItem}>
                                            <Text style={sacolaStyles.valorUnitItem}>R$ 18,80</Text>
                                            <Text style={sacolaStyles.valorTotalItem}>R$ 37,60</Text>
                                        </View>
                                    </View>
                                    <View style={sacolaStyles.direitaItem}>
                                        <Pressable style={sacolaStyles.btnExcluir}>
                                            <Image
                                                style={sacolaStyles.imgExcluir}
                                                source={require('@/assets/images/img/lixeira.png')}
                                            />
                                        </Pressable>
                                        <View style={sacolaStyles.caixaQntde}>
                                            <Pressable style={sacolaStyles.btnQntde}><Image style={sacolaStyles.imgQntde}
                                                source={require('@/assets/images/img/retirar.png')} /></Pressable>
                                            <Text style={sacolaStyles.quantidade}>2</Text>
                                            <Pressable style={sacolaStyles.btnQntde}>
                                                <Image style={sacolaStyles.imgQntde} source={require('@/assets/images/img/adicionar.png')} />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>

                                <View style={sacolaStyles.itemSacola}>
                                    <Image style={sacolaStyles.itemImg}
                                        source={require('@/assets/images/img/bolo01.png')}
                                        resizeMode="stretch" />
                                    <View style={sacolaStyles.centroItem}>
                                        <Text style={sacolaStyles.tituloItem}> Bolo de Banana Fit</Text>
                                        <Text style={sacolaStyles.descricaoItem}>Banana Prata com canela e gergilim</Text>
                                        <View style={sacolaStyles.valoresItem}>
                                            <Text style={sacolaStyles.valorUnitItem}>R$ 18,80</Text>
                                            <Text style={sacolaStyles.valorTotalItem}>R$ 37,60</Text>
                                        </View>
                                    </View>
                                    <View style={sacolaStyles.direitaItem}>
                                        <Pressable style={sacolaStyles.btnExcluir}>
                                            <Image
                                                style={sacolaStyles.imgExcluir}
                                                source={require('@/assets/images/img/lixeira.png')}
                                            />
                                        </Pressable>
                                        <View style={sacolaStyles.caixaQntde}>
                                            <Pressable style={sacolaStyles.btnQntde}><Image style={sacolaStyles.imgQntde}
                                                source={require('@/assets/images/img/retirar.png')} /></Pressable>
                                            <Text style={sacolaStyles.quantidade}>2</Text>
                                            <Pressable style={sacolaStyles.btnQntde}>
                                                <Image style={sacolaStyles.imgQntde} source={require('@/assets/images/img/adicionar.png')} />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>

                                <View style={sacolaStyles.cupom}>
                                    <View style={sacolaStyles.cupomEsquerdo}>
                                        <Text style={sacolaStyles.tituloCupom} >Cupom de desconto</Text>
                                        <TextInput style={sacolaStyles.txtCupom} placeholder="Digite seu cupom"
                                            placeholderTextColor={cores.cinza}
                                        />
                                    </View>
                                    <Pressable  style={({ pressed }) => [globalStyle.btnFooter, pressed && globalStyle.pressBtn]} >
                                        <Text style={sacolaStyles.txtAplicar}>Aplicar {'>'}</Text></Pressable>
                                </View>

                                <View style={sacolaStyles.endereco}>
                                    <Image
                                        source={require('@/assets/images/img/delivery-laranja.png')}
                                    style={sacolaStyles.imgEndereco}
                                    />
                                    <View style={sacolaStyles.infoEndereco}>
                                        <Text style={sacolaStyles.tituloEndereco}>Entrega em:</Text>
                                        <Text style={sacolaStyles.enderecoCompleto}>Avenida Marechal Tito, 1500 - São Miguel Paulista - São Paulo - SP</Text>
                                        <Text style={sacolaStyles.telefone}>{'('}11{')'}9 9999-9999</Text>
                                        <View style={sacolaStyles.entrega}>
                                            <Text style={sacolaStyles.tituloEntrega}>Entrega estimada em :</Text>
                                            <Text style={sacolaStyles.tempoEntrega}>40 - 60 min</Text>
                                            <Pressable style={sacolaStyles.btnEndereco}>
                                                <Text style={sacolaStyles.txtEndereco}>Trocar endereço</Text>
                                            </Pressable>
                                        </View>
                                        

                                    </View>

                                </View>

                                <View style={sacolaStyles.subtotal}>
                                    <View style={sacolaStyles.areaSubtotal}>
                                        <Text style={sacolaStyles.textSubtotal} >Subtotal</Text>
                                        <Text style={sacolaStyles.valorSubtotal} 
                                        >R$ 150,40</Text>
                                    </View>
                                    <View style={sacolaStyles.areaEntrega}>
                                        <Text style={sacolaStyles.txtEntrega} >Entrega</Text>
                                        <Text style={sacolaStyles.valorEntrega}
                                        >R$ 8,00</Text>
                                    </View>
 
                                    <View style={sacolaStyles.areaDesconto}>
                                        <Text style={sacolaStyles.txtDesconto} >Desconto</Text>
                                        <Text style={sacolaStyles.cupomDesconto}
                                        >THEGUSTA40</Text>
                                        <Text style={sacolaStyles.valorDesconto}
                                        >R$ -15,84</Text>
                                    </View>
                                    <View style={globalStyle.separador}></View>
                                    <View style={sacolaStyles.areaTotal}>
                                        <Text style={sacolaStyles.txtTotal}>Total</Text>
                                        <Text style={sacolaStyles.valorTotal}>R$ 142,56</Text>
                                    </View>
                                    
                                </View>
                            
                                <Pressable   style={({ pressed }) => [sacolaStyles.btnPgamento, pressed && globalStyle.pressBtn]} onPress={()=> router.navigate('/pagamento')}>
                                    <Text style={sacolaStyles.txtPagamento}>Continuar para pagamento</Text>
                                </Pressable>
                            </View>


                            
                        </View>



                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>)
}