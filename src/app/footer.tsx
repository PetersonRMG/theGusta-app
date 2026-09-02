import { useState } from "react";
import { router } from "expo-router";


import { View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyle from '../styles/globalstyles';
import homeStyles from "@/styles/homeStyles";


export default function FooterScreen() {
    return (
        <View style={globalStyle.footer}>

            <Pressable onPress={() => router.navigate('/home')} style={({ pressed }) => [globalStyle.btnFooter, pressed && globalStyle.pressBtn]}>
                <Image style={globalStyle.iconeFooter} source={require('@/assets/images/img/home.png')} />
                <Text style={[globalStyle.textFooter, globalStyle.txtFooterAtivo]}>Home</Text>
            </Pressable>


            <Pressable onPress={() => router.navigate('/cardapio')}
                style={({ pressed }) => [globalStyle.btnFooter, pressed && globalStyle.pressBtn]}>
                <Image style={globalStyle.iconeFooter} source={require('@/assets/images/img/cardapio.png')} />
                <Text style={globalStyle.textFooter}>Cardápio</Text>
            </Pressable>

            <Pressable style={({ pressed }) => [globalStyle.btnFooter, pressed && globalStyle.pressBtn]} onPress={() => router.navigate('/sacola')}>
                <Image style={globalStyle.iconeFooter} source={require('@/assets/images/img/sacola.png')} />
                <Text style={globalStyle.textFooter}>Sacola</Text>
            </Pressable>

            <Pressable style={({ pressed }) => [globalStyle.btnFooter, pressed && globalStyle.pressBtn]}>
                <Image style={globalStyle.iconeFooter} source={require('@/assets/images/img/pedido.png')} />
                <Text style={globalStyle.textFooter}>Pedidos</Text>
            </Pressable>

            <Pressable style={({ pressed }) => [globalStyle.btnFooter, pressed && globalStyle.pressBtn]}>
                <Image style={globalStyle.iconeFooter} source={require('@/assets/images/img/config.png')} />
                <Text style={globalStyle.textFooter}>Config</Text>
            </Pressable>

        </View>
    );
}