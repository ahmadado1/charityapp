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
   
})