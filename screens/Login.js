import { View,TouchableOpacity,Text,StyleSheet,} from "react-native";
import { SafeArea } from "../component/SafeArea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useState,useEffect,useCallback } from "react";
import { TextInput,Button } from 'react-native-paper';
import { Formik } from "formik";
import * as yup from 'yup';

const validationRules = yup.object({
  email:yup.string().required('you must fill this field').min(5).max(36),
  password:yup.string().required().min(4)
  .oneOf([yup.ref('passwordConfirmation'),null],'password must match')
  
});

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
               <Formik
                        initialValues={{ email: '',password:'',passwordConfirmation:'' }}
                        onSubmit={(values,action) => {
                          console.log(values.email)
                        }}
                        validationSchema={validationRules}
                      >
                          {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                            <View>
                              <View>
                                <TextInput
                                  mode="outlined"
                                  label='email'
                                  style={style.input}
                                  onChangeText={handleChange('email')}
                                  onBlur={handleBlur('email')}
                        value={values.email}
                      />
                      {touched.email && errors.email 
                      ? <Text style={{color:'red'}}>{errors.email}</Text> 
                      : null}
                      </View>

                      <View>
                      <TextInput
                        mode="outlined"
                        label='password'
                        style={style.input}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={true}
                      />
                      {touched.password && errors.password
                        ? <Text style={{color:'red'}}>{errors.password}</Text> 
                        : null}
                      </View>
                    
                      <Button 
                      mode="contained"
                      onPress={handleSubmit}
                      contentStyle={{paddingVertical:6}}
                      style={{marginVertical:12}}>Create account</Button>
                    </View>
                  )}
              </Formik>
                  
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