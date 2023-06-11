import { useContext,useEffect, useState, } from "react";
import { View,StyleSheet,Text,SafeAreaView,Image } from "react-native";
import { AppContext } from "../Settings/globalVariables";
import { SafeArea } from "../component/SafeArea";
import { Theme } from "../Utils/theme";
import { Button } from "react-native-paper";
import { db } from "../Settings/Firebase.setting";
import { getDoc,doc } from "firebase/firestore";

export function Profile ({navigation}) {
    const { uid } = useContext(AppContext);
    //updated useState after data is fetched
    const [userRecords,setUserRecords] = useState({});

    //fetch data after component is loaded
    useEffect(() => {
        const handleGetUserRecords = async () => {
            const snapShot = await getDoc(doc(db,'users',uid));

            setUserRecords(snapShot.data());
        }

        handleGetUserRecords();
    },[]);

    return (
        <>
        <View style={styles.color}>
        <Image  style={styles.image}
        source={require('../assets/man1.jpg')}/>
        </View>
        <SafeAreaView>
            
        </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    container:{
       backgroundColor:Theme.colors.lime100,
    },
    image:{
        flexDirection:'column',
        justifyContent:'center',
        width:220,
        height:200,
        marginTop:55
    },
    color:{
        flex:0.3,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'green'
    }
   
})