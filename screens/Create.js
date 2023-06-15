import { useContext,useState} from "react";
import { AppContext } from "../Settings/globalVariables";
import { View,Text,StyleSheet,Alert } from "react-native";
import { SafeArea } from "../component/SafeArea";
import { Button,TextInput } from "react-native-paper";
import { Formik } from 'formik';
import * as yup from 'yup';
import { UseActivityIndicator } from "../component/ActivityIndicator";
import { db } from "../Settings/Firebase.setting";
import { addDoc, collection } from "firebase/firestore";


const validationRules = yup.object({
    title:yup.string().required('required filed'),
    desc:yup.string().required('required filed'),
    target:yup.number().required('required filed'),
});

export function Create ({navigation}){
const {uid} = useContext(AppContext);
const [modalVisible,setModalVisible] = useState(false)

    return uid !== null ?(
        <SafeArea>
            <UseActivityIndicator bool={modalVisible}/>
            <Text style={styles.mainTitle}>Create a fund Raiser</Text>
            <Text style={styles.crimeAlert}>This app is a demonstration 
            app built by a cohort of student and instructors at 
            early code. This app must not be used by any means for frudulent purposes. the 
            student and the institutions takes no responsible for any act of crime on this 
            app</Text>

            <Formik
            initialValues={{ title:'',desc:'',target:0, }}
            onSubmit={(values,action) => {

                setModalVisible(true)
                addDoc(collection(db,'projects'),{
                    title:values.title,
                    description:values.desc,
                    target:Number(values.target),
                    createdBy:uid,
                    status:'active',
                    createdAt:new Date().getTime()
                })
                .then(() => {
                    setModalVisible(false);
                    Alert.alert(
                        'Message',
                        'Fund Raisers Created',
                        [
                        {text:'Go to Raiser',onPress:() => navigation.navigate('Fund Raiser')},
                        {text:'Dismiss'}
                        ]
                    )
                })
                .catch(error => {
                    setModalVisible(false);
                    Alert.alert(
                        'Message',
                        error.message,
                        [{text:'Dismiss'}]
                    )
                })
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
                        label='Title'
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                        value={values.title}
                    />
                    {touched.title && errors.title 
                    ? <Text style={{color:'red'}}>{errors.title}</Text> 
                    : null}
                    </View>

                    <View>
                    <TextInput
                        outlineColor="gray"
                        activeOutlineColor="#5D9C59"
                        mode="outlined"
                        label='Descreption'
                        onChangeText={handleChange('desc')}
                        onBlur={handleBlur('desc')}
                        value={values.desc}
                        multiline={true}
                    />
                    {touched.desc && errors.desc 
                    ? <Text style={{color:'red'}}>{errors.desc}</Text> 
                    : null}
                    </View>

                    <View>
                    <TextInput
                        outlineColor="gray"
                        activeOutlineColor="#5D9C59"
                        mode="outlined"
                        label='Target amount'
                        onChangeText={handleChange('target')}
                        onBlur={handleBlur('target')}
                        value={values.target}
                        keyboardType="number-pad"
                    />
                    {touched.target && errors.target 
                    ? <Text style={{color:'red'}}>{errors.target}</Text> 
                    : null}
                    </View>
            
                    <Button
                    buttonColor="#5D9C59"
                    mode="contained"
                    onPress={handleSubmit}
                    contentStyle={{paddingVertical:6}}
                    style={{marginVertical:12}}>
                    Create Found Raiser
                    </Button>
                </View>
                )}
            </Formik>
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