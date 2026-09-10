import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '@/styles/globalstyles';
import homeStyles from "@/styles/homeStyles";
import FooterScreen from "@/app/footer";


export default function Basecreen() {




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



                    </ScrollView>
                    <FooterScreen/>
                </SafeAreaView>

            </ImageBackground>
        </View>

//         style = {({ pressed }) => [pagamentoStyles.btnPgamento, pressed && globalStyle.pressBtn]
// } onPress = {() => router.navigate('/pagamento')}
    
    )
}