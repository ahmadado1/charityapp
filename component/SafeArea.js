import { SafeAreaView,StatusBar,StyleSheet,View } from "react-native";

export function SafeArea ({children}) {
    return(
        <SafeAreaView style={style.container}>
           <View style={style.wrapper}>
               {children}
           </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.OS == 'android' ? StatusBar.currentHeight : 0,

    },
    wrapper:{
        flex:1,
        paddingHorizontal:12,

    },
})