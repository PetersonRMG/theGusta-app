import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import { editarPerfilStyles } from "@/styles/editarPerfilStyles";
import FooterScreen from "@/app/footer";


export default function ConfigScreen() {

    const [notificacao , setNotificacao] = useState(false)
 

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
                                    <Text style={globalStyle.titulo}>Editar perfil</Text>
                                    <View style={globalStyle.bordaPerfil}>
                                        <Image
                                            style={globalStyle.perfil}
                                            source={require('@/assets/images/img/logo.png')} />
                                    </View>
                                </View>
                                <Text style={globalStyle.subtitulo}>
                                    Atualize seus dados pessoais.
                                </Text>
                            </View>
                            <View style={globalStyle.main}>


                                <View style={editarPerfilStyles.areaCliente}>
                                    <View style={editarPerfilStyles.bordaPerfil}>

                                        <Image style={editarPerfilStyles.imgCliente}
                                            source={require('@/assets/images/img/user.png')} />
                                    </View>
                                    <View style={editarPerfilStyles.caixaCliente}>
                                        <Text style={editarPerfilStyles.nomeCliente}>Foto do perfil</Text>
                                        <Text style={editarPerfilStyles.subtituloCliente}>A foto do perfil ajuda a {"\n"} personalizar sua contah</Text>
                                    </View>

                                    <Pressable style={editarPerfilStyles.btnTrocar}>
                                        <Text style={editarPerfilStyles.txtBtnTrocar}>Alterar Foto</Text>
                                    </Pressable>

                                </View>

                                <View style={editarPerfilStyles.caixaEditar}>
                                    <View style={editarPerfilStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/perfil.png')}
                                            style={editarPerfilStyles.imgEditar} />
                                        <View style={editarPerfilStyles.textosEditar}>
                                            <Text style={editarPerfilStyles.labelEditar}>Nome completo</Text>
                                            <TextInput
                                                style={editarPerfilStyles.txtInput}
                                                placeholder="Seu nome completo aqui"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>
                                    
                                    <View style={editarPerfilStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/email.png')}
                                            style={editarPerfilStyles.imgEditar} />
                                        <View style={editarPerfilStyles.textosEditar}>
                                            <Text style={editarPerfilStyles.labelEditar}>Email</Text>
                                            <TextInput
                                                style={editarPerfilStyles.txtInput}
                                                placeholder="Seuemail@exemplo.com.br"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>

                                    <View style={editarPerfilStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/telefone.png')}
                                            style={editarPerfilStyles.imgEditar} />
                                        <View style={editarPerfilStyles.textosEditar}>
                                            <Text style={editarPerfilStyles.labelEditar}>Telefone</Text>
                                            <TextInput
                                                style={editarPerfilStyles.txtInput}
                                                placeholder="(11) 99999-9999"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>

                                    <View style={editarPerfilStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/documento.png')}
                                            resizeMode="stretch"
                                            style={editarPerfilStyles.imgEditar} />
                                        <View style={editarPerfilStyles.textosEditar}>
                                            <Text style={editarPerfilStyles.labelEditar}>CPF</Text>
                                            <TextInput
                                                style={editarPerfilStyles.txtInput}
                                                placeholder="000.000.000-00"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>

                                    <View style={editarPerfilStyles.areaEditar} >
                                        <Image source={require('@/assets/images/img/calendario.png')}
                                            style={editarPerfilStyles.imgEditar} />
                                        <View style={editarPerfilStyles.textosEditar}>
                                            <Text style={editarPerfilStyles.labelEditar}>Data de nascimento</Text>
                                            <TextInput
                                                style={editarPerfilStyles.txtInput}
                                                placeholder="dd/mm/aaaa"
                                                placeholderTextColor={'#888888'}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                aria-label="Nomeco"

                                            />
                                        </View>
                                    </View>
                                </View>

                                <View style={editarPerfilStyles.caixaNoti} >
                                    <Image source={require('@/assets/images/img/notificacao.png')}
                                        style={editarPerfilStyles.imgEditar} />
                                    <View style={editarPerfilStyles.areaNoti}>
                                        <View >
                                            <Text style={editarPerfilStyles.tituloNoti}>Receber novidades  e promoções </Text>
                                            <Text style={editarPerfilStyles.subtituloNoti}>Receba ofertas exclusivas e novidades da The Gusta</Text>
                                        </View>
                                        <Pressable onPress={()=> setNotificacao((current)=> !current) } style={({ pressed }) => [editarPerfilStyles.btnNoti, pressed && globalStyle.pressBtn]}>
        
                                            <Image
                                                style={editarPerfilStyles.imgBtnNoti} source={notificacao
                                                    ? require('@/assets/images/img/inativo.png')
                                                    : require('@/assets/images/img/ativo.png') } />
                                        </Pressable>
                                    </View>
                                </View>

                                <View style={editarPerfilStyles.areaBtns} >
                                    <Pressable style={({ pressed }) => [editarPerfilStyles.btnSalvar, pressed && globalStyle.pressBtn]} >
                                        <Text style={editarPerfilStyles.txtBtnSalvar}>Salvar alterações</Text>
                                    </Pressable>
                                    <Pressable style={({ pressed }) => [editarPerfilStyles.btnCancelar, pressed && globalStyle.pressBtn]} >
                                        <Text style={editarPerfilStyles.txtBtnCancelar}>Cancelar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>


                    </ScrollView>
                    <FooterScreen />
                </SafeAreaView>

            </ImageBackground>
        </View >

        //         style = {({ pressed }) => [editarPerfilStyles.btnSalvar, pressed && globalStyle.pressBtn]         } onPress = {() => router.navigate('/pagamento')}

    )
}