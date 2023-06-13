import { useContext,useEffect, useState, } from "react";
import { View,StyleSheet,Text,SafeAreaView,Image,ScrollView } from "react-native";
import { AppContext } from "../Settings/globalVariables";
import { SafeArea } from "../component/SafeArea";
import { Theme } from "../Utils/theme";
import { Button } from "react-native-paper";
import { db } from "../Settings/Firebase.setting";
import { getDoc,doc } from "firebase/firestore";

export function Profile ({navigation}) {
    const { uid } = useContext(AppContext);
    
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
        <View style={styles.container}>
            <Image
            style={styles.headerImage}
            source={{uri:'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>   
        
            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.contentBox}>
                        <View style={{paddingLeft:9}}>
                        <Text style={{fontWeight:'bold'}}>Name :</Text>
                        <Text style={{fontWeight:'bold',fontSize:28}}>{userRecords.firstName} {userRecords.lastName}</Text> 
                        </View>
                    </View>

                    <View style={styles.contentBox}>
                        <View style={{paddingLeft:9}}>
                        <Text style={{fontWeight:'bold'}}>Date Of Birth :</Text>
                        <Text style={{fontWeight:'bold',fontSize:28}}>{userRecords.dateOfBirth}</Text>
                        </View>
                    </View>

                    <View style={styles.contentBox}>
                        <View style={{paddingLeft:9}}>
                        <Text style={{fontWeight:'bold'}}>City :</Text>
                        <Text style={{fontWeight:'bold',fontSize:28}}>{userRecords.city}</Text>
                        </View>
                    </View>

                    <View style={styles.contentBox}>
                        <View style={{paddingLeft:9}}>
                        <Text style={{fontWeight:'bold'}}>Bio :</Text>
                        <Text style={{fontWeight:'bold',fontSize:28}}>{userRecords.bioInfo}</Text>
                        </View>
                    </View>

                    <View style={{marginHorizontal:12}}>
                        <Button
                        contentStyle={{paddingVertical:16}}
                        style={{borderRadius:6}} 
                        textColor="white"
                        buttonColor={Theme.colors.gray300}
                        onPress={() => navigation.navigate('Update Profile')}>
                            Update profile
                        </Button>
                    </View>
                </ScrollView>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerImage:{
        flex:2,
        height:'100%',
        width:'300%',
        resizeMode:'contain',
        alignSelf:'center',
    },
    body:{
        flex:4,
        paddingHorizontal:16,
        paddingBottom:28,
    },
    contentBox:{
        backgroundColor:'white',
        marginHorizontal:12,
        marginBottom:12,
        borderRadius:8,
        padding:25,
        borderWidth:1,
        borderColor:Theme.colors.gray100,
        marginTop:10
    }
})
      
//       return (
//         <>
//         <View style={styles.color}>
//         <Image  style={styles.image}
//         source={require('../assets/trans.png')}/>
//         </View>
//         <SafeAreaView style={styles.container}>
//             <View style={styles.name}>
//                 <Text style={styles.sub}>Name</Text>
//                 <Text style={styles.firstName} >Ahmad Ado</Text>
//             </View>
//             <View style={styles.name1}>
//                 <Text style={styles.sub}>City</Text>
//                 <Text style={styles.firstName} >Kano</Text>
//             </View>
//             <View style={styles.name2}>
//                 <Text style={styles.sub}>Mailing Address</Text>
//                 <Text style={styles.firstName} >Gwarinpa, Abuja, Nigeria</Text>
//             </View>
//             <View style={styles.name3}>
//                 <Text style={styles.sub}>Bio</Text>
//                 <Text style={styles.firstName} >Spider</Text>
//             </View>
//             <View style={styles.button}>
//             <Button mode="contained" buttonColor="#00bfff"
//             contentStyle={{paddingVertical:6,}}
//             style={{marginVertical:17,}}>
//                 Update Profile
//             </Button>
//             </View>
//         </SafeAreaView>
//         </>
//     )

// }


// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         marginTop:Platform.OS == 'android' ? StatusBar.currentHeight : 0,
//         backgroundColor:'#fffff0'
//     },
//     image:{
//         flexDirection:'column',
//         justifyContent:'center',
//         width:220,
//         height:200,
//         marginTop:53
//     },
//     background:{
//         backgroundColor:'gray'
//     },
//     color:{
//         flex:0.45,
//         flexDirection:'row',
//         justifyContent:'center',
//         backgroundColor:Theme.colors.lime400
//     },
//     name:{
//         marginTop:30,
//         margin:30,
//         borderWidth:1,
//         padding:15,
//         backgroundColor:`#ffffff`,
//         borderRadius:10
//     },
//     name1:{
//         marginTop:10,
//         margin:30,
//         borderWidth:1,
//         padding:15,
//         backgroundColor:`#ffffff`,
//         borderRadius:10
//     },
//     name2:{
//         marginTop:10,
//         margin:30,
//         borderWidth:1,
//         padding:15,
//         backgroundColor:`#ffffff`,
//         borderRadius:10
//     },
//     name3:{
//         marginTop:10,
//         margin:30,
//         borderWidth:1,
//         padding:15,
//         backgroundColor:`#ffffff`,
//         borderRadius:10,
//         marginBottom:2
//     },
//     sub:{
//         color:`#c0c0c0`,
//         marginBottom:10
//     },
//     firstName:{
//         marginLeft:10
//     },
//     button:{
//         margin:30,
//         marginBottom:20
//     }
    
   
// })
