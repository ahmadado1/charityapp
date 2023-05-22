import { View,TouchableOpacity,Text,StyleSheet,} from "react-native";
import { useState,useCallback,useEffect } from "react";
import { SafeArea } from "../component/SafeArea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";


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
            <View style={style.com}>
                <Text>Charity App</Text>
            </View>
        </SafeArea>
    );
}

const style = StyleSheet.create({
    com:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
})