import { useContext } from "react";
import { AppContext } from "../Settings/globalVariables";
import { SafeArea } from "../component/SafeArea";
import { Button } from "react-native-paper";
import { View ,StyleSheet,Image,Text} from "react-native";


export function Donate () {
    const {Uid} = useContext(AppContext);
    console.log(Uid);
    return(
        <SafeArea>
            <View style={styles.view}>
             <Image source={require('../assets/hand.jpg')}
             style={styles.pic}/>
              <Text style={styles.text}> Donate to sport</Text>
              
              <Text style={styles.vat}>Help to Raise $500 now</Text>
              
            </View>
            <View style={styles.button}>
            <Button  mode="contained"
             onPress={() => console.log('Pressed')}>
                Donate now
            
            </Button></View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    view:{
      borderWidth:0.1,
      width:250,
      height:300,
      padding:2,
      margin:30,
      borderBottomWidth:2,
      borderBottomColor:'green'
    },
    pic:{
        height:250,
        width:250,
        alignItems:'center'
    },
    text:{
        marginTop:20,
        fontSize:17,
        color:'green'
       
    },
    vat:{
        marginTop:10
    },
    button:{
        marginTop:20,
        width:200
    }
})