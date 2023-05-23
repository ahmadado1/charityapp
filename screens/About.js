import { View,TouchableOpacity,Button,StyleSheet,Text, ImageBackground,} from "react-native";
import { useState,useCallback,useEffect } from "react";
import { SafeArea } from "../component/SafeArea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Theme } from "../Utils/theme";

export function About () {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
        try {
          // Pre-load fonts, make any API calls you need to do here
          await Font.loadAsync({Pacifico_400Regular});
          // Artificially delay for two seconds to simulate a slow loading
          // experience. Please remove this if you copy and paste the code!
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          setAppIsReady(true);
        }
      }
  
      prepare();
    }, []);
  
    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
        // This tells the splash screen to hide immediately! If we call this after
        // `setAppIsReady`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync();
      }
    }, [appIsReady]);
  
    if (!appIsReady) {
      return null;
    }
    return (
        <SafeArea>
            <View style={style.color}>
            <View style={style.com}>
                <Text style={style.title}>Charity App</Text>
                <Text style={style.course}>Donate to a worthy course</Text>
                <View style={style.border}>
                    <Text style={style.text}>
                    The Charity App
                    Foundation's mission-unchanged 
                    since 1913. is to promote the wellbeing 
                    of humanity throughout the world.
                    Today the Foundation 
                    advances new frontiers of 
                    science, data, policy, and 
                    innovation to solve global 
                    challenges related to health, food, power, and 
                    economic mobility
                    </Text>
                </View>
                <View style={style.button}>
                <Button
                    title="Make a Donation"
                    color='white'
                    onPress={() => Alert.alert('Simple Button pressed')}
                /></View>
            </View>
            </View>
        </SafeArea>
    );
   
}

const style = StyleSheet.create({
    color:{
        flex:1,
        //backgroundColor:(Theme.colors.purple100)
    },
    com:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    title:{
        fontSize:35,
        fontFamily:'Pacifico_400Regular'
    },course:{
        marginTop:15,
        fontSize:20
    },
    border:{
        borderWidth:0.2,
        borderRadius:8,
        marginTop:10,
        backgroundColor:'blue',
        padding:30,
        margin:50
    },
    text:{
        fontSize:20,
        color:'white'
    },
    button:{
        borderWidth:1,
        borderRadius:5,
        padding:7,
        width:270,
        backgroundColor:'blue'
    }
    
})