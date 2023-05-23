import { View,TouchableOpacity,Text,StyleSheet,} from "react-native";
import { SafeArea } from "../component/SafeArea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useState,useEffect,useCallback } from "react";
import { TextInput,Button } from 'react-native-paper';

export function Login ({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {

        async function prepare() {
          try {
            await Font.loadAsync({Pacifico_400Regular});
            await new Promise(resolve => setTimeout(resolve, 2000));
          } catch (e) {
            console.warn(e);
          } finally {
            setAppIsReady(true);
          }
        }
    
        prepare();
      }, []);
    
      const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          await SplashScreen.hideAsync();
        }
      }, [appIsReady]);
    
      if (!appIsReady) {
        return null;
      }
    

    return(
        <SafeArea>
            <View style={style.heding}>
                <Text style={style.title}>Charity App</Text>
                <Text style={style.title2}>Login to your Charity App account</Text>
                <TextInput
                    style={style.input}
                    label="Email"
                    mode="outlined"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    style={style.input}
                    label="Password"
                    mode="outlined"
                    value={number}
                    secureTextEntry={true}
                    onChangeText={number => setNumber(number)}
                />
                  <View style={style.button}>
                      <Button mode="contained" onPress={() => navigation.navigate('Donate')}>
                      Login
                      </Button>
                          </View>
                          <View style={style.account}>
                          <Text >Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={style.sign}>Sign up</Text></TouchableOpacity>
                    
                    </View>
              </View>
          </SafeArea>
    )
}

const style = StyleSheet.create({
    heding:{ 
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:280
        },
    title:{
        fontSize:35,
        fontFamily:'Pacifico_400Regular'
         },
    title2:{
        marginTop:15
    },
    input:{
        marginTop:15,
        width:300
    },
    button:{
      marginTop:20,
      width:300,
      height:70
    },
    account:{
      flexDirection:'row'
    },
    sign:{
      
      color:'blue'
    },
})