import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Settings/globalVariables";
import { StyleSheet,Image,View,Text,ScrollView} from "react-native";
import { Theme } from "../Utils/theme";
import { db } from "../Settings/Firebase.setting";
import { getDoc,doc } from "firebase/firestore";
import { Button,TextInput} from "react-native-paper";
import { Formik } from 'formik';
import * as yup from 'yup';

const validationRules = yup.object({
    name:yup.string(),
    email:yup.string(),
    phoneNo:yup.number(),
    bio:yup.string(),
});

export function UpdateProfile ({navigation}) {
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
        <View style={styles.container}>
            <Image
            style={styles.headerImage}
            source={{uri:'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>   
        
            <View style={styles.body}>
                <ScrollView>
                    <Formik
                    initialValues={{ name:'',email:'',phoneNo:'',bio:'', }}
                    onSubmit={(values,action) => {
                        getDoc(doc(db,'users',uid),{
                        Name:values.name,
                        email:values.email,
                        phoneNumber:values.phoneNo,
                        bioInfo:values.bio,
                        })
                    }}
                    validationSchema={validationRules}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                        <View style={styles.form}>
                            <View>
                            <TextInput
                                outlineColor="gray"
                                activeOutlineColor="#80D8FF"
                                style={styles.input}
                                mode="outlined"
                                label='Name'
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                            {touched.name && errors.name ? <Text style={{color:'red'}}>{errors.fName}</Text> : null}
                            </View>
                            <View>
                            <TextInput
                                outlineColor="gray"
                                activeOutlineColor="#80D8FF"
                                style={styles.input}
                                mode="outlined"
                                label='Email'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            {touched.email && errors.email ? <Text style={{color:'red'}}>{errors.email}</Text> : null}
                            </View>
                
                            <View>
                            <TextInput
                                outlineColor="gray"
                                activeOutlineColor="#80D8FF"
                                style={styles.input}
                                mode="outlined"
                                label='Phone Number'
                                onChangeText={handleChange('phoneNo')}
                                onBlur={handleBlur('phoneNo')}
                                value={values.phoneNo}
                            />
                            {touched.phoneNo && errors.phoneNo  ? <Text style={{color:'red'}}>{errors.phoneNo}</Text>  : null}
                            </View>
                
                            <View>
                            <TextInput
                                outlineColor="gray"
                                activeOutlineColor="#80D8FF"
                                style={styles.input}
                                mode="outlined"
                                label='bio'
                                onChangeText={handleChange('bio')}
                                onBlur={handleBlur('bio')}
                                value={values.bio}
                                multiline={true}
                            />
                            {touched.bio && errors.bio ? <Text style={{color:'red'}}>{errors.bio}</Text> : null}
                            </View>
                    
                            <Button
                            buttonColor={Theme.colors.gray400}
                            mode="contained"
                            onPress={handleSubmit}
                            contentStyle={{paddingVertical:6}}
                            style={{width:'100%',marginTop:6}}>
                            UPDATE PROFILE
                            </Button>
                        </View>
                        )}
                    </Formik>
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
        paddingVertical:20
    },
    form:{
        gap:6
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