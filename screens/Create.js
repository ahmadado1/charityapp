import { useContext } from "react";
import { AppContext } from "../Settings/globalVariables";
import { View,Text,StyleSheet } from "react-native";
import { SafeArea } from "../component/SafeArea";
import { Button,TextInput } from "react-native-paper";

export function Create ({navigation}){
const {uid} = useContext(AppContext);

    return uid !== null ?(
        <SafeArea>
            <Text style={styles.mainTitle}>Create a fund Raiser</Text>
            <Text style={styles.crimeAlert}>This app is a demonstration 
            app built by a cohort of student and instructors at 
            early code. This app must not be used by any means for frudulent purposes. the 
            student and the institutions takes no responsible for any act of crime on this 
            app</Text>
        </SafeArea>
    )
    : (
        <SafeArea>
            <View style={styles.wrapper}>
           <Text style={styles.subHeader2}>Sign In First to create a fund raiser</Text>
           <Button mode="contained" onPress={() => navigation.navigate('Login')}
           contentStyle={{paddingVertical:4}}>Go to sign in</Button>
        </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
     wrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:16
     },
     subHeader2:{
        fontSize:18
     },
     mainTitle:{
        fontSize:26,
        marginBottom:6
     },
     crimeAlert:{
        fontSize:12,
        color:'gray',
        marginBottom:8
     }
})