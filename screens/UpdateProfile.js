import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Settings/globalVariables";
import { StyleSheet,Image,View,Text,ScrollView,ActivityIndicator} from "react-native";
import { Theme } from "../Utils/theme";
import { db } from "../Settings/Firebase.setting";
import { getDoc,doc ,updateDoc,} from "firebase/firestore";
import { Button,TextInput} from "react-native-paper";
import { Formik } from 'formik';
import * as yup from 'yup';
import { UseActivityIndicator } from "../component/ActivityIndicator";

const validationRules = yup.object({
    fName:yup.string().required('required filed'),
    lName:yup.string().required('required filed'),
    city:yup.string().required('required filed'),
    mail:yup.string().required('required filed').min(16),
    dob:yup.string(),
    bio:yup.string(),
});

const useActivityIndicator = () => {
    return(
        <View>
            <ActivityIndicator/>
        </View>
    )
}

export function UpdateProfile ({navigation}) {
    const { uid } = useContext(AppContext);
    //updated useState after data is fetched
    const [userRecords,setUserRecords] = useState({});
    const [modalVisible,setModalVisible] = useState(false)

    //fetch data after component is loaded
    useEffect(() => {
        const handleGetUserRecords = async () => {
            const snapShot = await getDoc(doc(db,'users',uid));
            setUserRecords({id:snapShot.id,data:snapShot.data()});
        }
        handleGetUserRecords();
    },[]);

    const handleUpdateProfile = async (data) => {
        setModalVisible(true);
        await updateDoc(doc(db,'users',userRecords.id),{
            firstName:data.fName,
            lastName:data.lName,
            city:data.city,
            mailingAddress:data.mail,
            bioInfo:data.bio,
            
        }).then(() => {
            setModalVisible(false);
            navigation.navigate('Profile')
        }).catch(e => {
            setModalVisible(false);
            console.log(e);
        })
    }

    return (
        <View style={styles.container}>
            <UseActivityIndicator bool={modalVisible}/>

            <Image
            style={styles.headerImage}
            source={{uri:'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>   
        
            <View style={styles.body}>
                <ScrollView>
                    <Formik
                    initialValues={{ fName:'',lName:'',mail:'',city:'',bio:'', }}
                    onSubmit={(values,action) => {
                        handleUpdateProfile(values);
                    }}
                    validationSchema={validationRules}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                        <View style={styles.form}>
                            <View>
                                <TextInput
                                    outlineColor="gray"
                                    activeOutlineColor="#5D9C59"
                                    mode="outlined"
                                    label='first name'
                                    onChangeText={handleChange('fName')}
                                    onBlur={handleBlur('fName')}
                                    value={values.fName}
                                />
                                {touched.fName && errors.fName 
                                ? <Text style={{color:'red'}}>{errors.fName}</Text> 
                                : null}
                                </View>

                                <View>
                                <TextInput
                                    outlineColor="gray"
                                    activeOutlineColor="#5D9C59"
                                    mode="outlined"
                                    label='last name'
                                    onChangeText={handleChange('lName')}
                                    onBlur={handleBlur('lName')}
                                    value={values.lName}
                                />
                                {touched.lName && errors.lName 
                                ? <Text style={{color:'red'}}>{errors.lName}</Text> 
                                : null}
                                </View>

                                <View>
                                <TextInput
                                    outlineColor="gray"
                                    activeOutlineColor="#5D9C59"
                                    mode="outlined"
                                    label='current city'
                                    onChangeText={handleChange('city')}
                                    onBlur={handleBlur('city')}
                                    value={values.city}
                                />
                                {touched.city && errors.city 
                                ? <Text style={{color:'red'}}>{errors.city}</Text> 
                                : null}
                                </View>

                                <View>
                                <TextInput
                                    outlineColor="gray"
                                    activeOutlineColor="#5D9C59"
                                    mode="outlined"
                                    label='mailing address'
                                    onChangeText={handleChange('mail')}
                                    onBlur={handleBlur('mail')}
                                    value={values.mail}
                                    multiline={true}
                                />
                                {touched.mail && errors.mail 
                                ? <Text style={{color:'red'}}>{errors.mail}</Text> 
                                : null}
                                </View>

                                <View>
                                <TextInput
                                    outlineColor="gray"
                                    activeOutlineColor="#5D9C59"
                                    mode="outlined"
                                    label='bio'
                                    onChangeText={handleChange('bio')}
                                    onBlur={handleBlur('bio')}
                                    value={values.bio}
                                    multiline={true}
                                />
                                {touched.bio && errors.bio 
                                ? <Text style={{color:'red'}}>{errors.bio}</Text> 
                                : null}
                                </View>
                        
                            <Button
                            buttonColor={Theme.colors.gray400}
                            mode="contained"
                            onPress={handleSubmit}
                            contentStyle={{paddingVertical:6}}
                            style={{width:'100%',marginTop:6}}>
                            UPDATE PROFILE NOW
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