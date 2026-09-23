import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import { configStyles } from "@/styles/config.styles";
import FooterScreen from "@/app/footer";


export default function ConfigScreen() {

    const [notificacao, setNotificacao] = useState<"ativo" | "inativo">("inativo");


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
                        <View style={globalStyle.conteudo}>
                            <View style={globalStyle.header}>
                                <View style={globalStyle.conteudoHeader}>
                                    <Text style={globalStyle.titulo}>Configurações</Text>
                                    <View style={globalStyle.bordaPerfil}>
                                        <Image
                                            style={globalStyle.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={globalStyle.subtitulo}>
                                    Gerencie seu perfil, endereço, entre outro.
                                </Text>
                            </View>
                            <View style={globalStyle.main}>

                                <View style={configStyles.areaCliente}>
                                    <View style={configStyles.bordaPerfil}>

                                        <Image style={configStyles.imgCliente}
                                            source={require('@/assets/images/img/user.png')} />
                                    </View>
                                    <View style={configStyles.caixaCliente}>
                                        <Text style={configStyles.nomeCliente}>Olá, Cliente</Text>
                                        <Text style={configStyles.subtituloCliente}>Acesse e organize sua experiência no app</Text>
                                    </View>
                                </View>

                                <View style={configStyles.area}>
                                    <Text style={configStyles.tituloArea}>Minha conta</Text>

                                    <View style={configStyles.areaPerfil}>
                                        <Image
                                            source={require('@/assets/images/img/perfil.png')} style={configStyles.iconImg} />
                                        <View style={configStyles.itens} >
                                            <View  >
                                                <Text style={configStyles.titulo}>Perfil</Text>
                                                <Text style={configStyles.subtitulo} >Dados pessoais, telefone e e-mail.</Text>
                                            </View>
                                            <Pressable onPress={()=>router.navigate('/editarPerfil')} style={({ pressed }) => [configStyles.btn, pressed && globalStyle.pressBtn]}>

                                                <Text style={configStyles.txtBtn}>{'>'}</Text>
                                            </Pressable>
                                        </View>
                                    </View>

                                    <View style={configStyles.areaEndereco}>
                                        <Image source={require('@/assets/images/img/local.png')} style={configStyles.iconImg} />
                                        <View style={configStyles.itens} >
                                            <View  >
                                                <Text style={configStyles.titulo}>Endereços </Text>
                                                <Text style={configStyles.subtitulo} >Gerencie seus endereços de entrega</Text>
                                            </View>
                                            <Pressable onPress={()=>router.navigate('/enderecos')} style={({ pressed }) => [configStyles.btn, pressed && globalStyle.pressBtn]}>
                                                <Text style={configStyles.txtBtn}>{'>'}</Text>
                                            </Pressable>
                                        </View>
                                    </View>

                                    <View style={configStyles.areaSenha}>
                                        <Image source={require('@/assets/images/img/senha.png')} style={configStyles.iconImg} />
                                        <View style={configStyles.itens} >
                                            <View  >
                                                <Text style={configStyles.titulo}>Alterar senha</Text>
                                                <Text style={configStyles.subtitulo} >Atualize sua senha com segurança</Text>
                                            </View>
                                            <Pressable onPress={()=> router.navigate('/alterarSenha')} style={({ pressed }) => [configStyles.btn, pressed && globalStyle.pressBtn]}>
                                                <Text style={configStyles.txtBtn}>{'>'}</Text>
                                            </Pressable>
                                        </View>
                                    </View>


                                    <Text style={configStyles.tituloArea}>
                                        App
                                    </Text>



                                    <View style={configStyles.caixaApp} >
                                        <Image source={require('@/assets/images/img/download.png')} />
                                        <View style={configStyles.caixaItens}>
                                            <View>
                                                <Text style={configStyles.titulo}>Instalar aplicativo</Text>
                                                <Text style={configStyles.subtitulo}>Adicione o app à sua tela inicial</Text>
                                            </View>
                                            <Pressable style={({ pressed }) => [configStyles.btnInstalar, pressed && globalStyle.pressBtn]} >
                                                <Text style={configStyles.txtBtnInstalar} >Instalar</Text>
                                            </Pressable>
                                        </View>
                                    </View>


                                    <View style={configStyles.caixaFale}>
                                        <Image source={require('@/assets/images/img/notificacao.png')} />
                                        <View style={configStyles.caixaItens}>
                                            <View>
                                                <Text style={configStyles.titulo}>Ativar notificações</Text>
                                                <Text style={configStyles.subtitulo}>Receba avisos sobre pedidos e promoções</Text>
                                            </View>
                                            {
                                                notificacao === 'inativo' ? (<>
                                            <Pressable onPress={() => setNotificacao('ativo')}  style={({ pressed }) => [configStyles.btnNoti, pressed && globalStyle.pressBtn]}>
                                                <Image source={require('@/assets/images/img/inativo.png')} />
                                            </Pressable>
                                                
                                                
                                                </>): notificacao === 'ativo' ? (<Pressable onPress={() => setNotificacao('inativo')} style={({ pressed }) => [configStyles.btnNoti, pressed && globalStyle.pressBtn]}>
                                                    <Image source={require('@/assets/images/img/ativo.png')} />
                                                </Pressable>) : <></>
                                            }
                                        </View>
                                    </View>


                                    <Text style={configStyles.tituloArea}>
                                        Relacionamento
                                    </Text>



                                    <View style={configStyles.caixaDepo} >
                                        <Image source={require('@/assets/images/img/depoimento.png')} />
                                        <View style={configStyles.caixaItens}>
                                            <View>
                                                <Text style={configStyles.titulo}>Depoimento</Text>
                                                <Text style={configStyles.subtitulo}>Veja ou deixe sua avaliação</Text>
                                            </View>
                                            <Pressable onPress={()=>router.navigate('/depoimento')} style={({ pressed }) => [configStyles.btn, pressed && globalStyle.pressBtn]}>
                                                <Text style={configStyles.txtBtn}>{'>'}</Text>
                                            </Pressable>
                                        </View>
                                    </View>


                                    <View style={configStyles.caixaNotificao}>
                                        <Image source={require('@/assets/images/img/fale_conosco.png')} />
                                        <View style={configStyles.caixaItens}>
                                            <View>
                                                <Text style={configStyles.titulo}>Fale conosco</Text>
                                                <Text style={configStyles.subtitulo}>Tire suas dúvidas e envie sugestões</Text>
                                            </View>
                                            <Pressable onPress={() => router.navigate('/faleConosco')} style={({ pressed }) => [configStyles.btn, pressed && globalStyle.pressBtn]}>
                                                <Text style={configStyles.txtBtn}>{'>'}</Text>
                                            </Pressable>
                                        </View>
                                    </View>

                                    <Pressable  style={({ pressed }) => [configStyles.btnSair, pressed && globalStyle.pressBtn]}>
                                        <Text style={configStyles.txtBtnSair}> Sair da conta</Text>
                                    </Pressable>




                                </View>


                            </View>
                        </View>


                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View>

        //         style = {({ pressed }) => [globalStyle.btnPgamento, pressed && globalStyle.pressBtn]
        // } onPress = {() => router.navigate('/pagamento')}

    )
}