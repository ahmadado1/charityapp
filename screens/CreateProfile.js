import { useState,useEffect,useCallback,useContext } from "react";
import { AppContext } from "../Settings/globalVariables";
import { View,ActivityIndicator,Text,StyleSheet,Alert} from "react-native";
import { SafeArea } from "../component/SafeArea";
import { TextInput,Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';

import { db } from '../Settings/Firebase.setting';
import { setDoc,doc } from "firebase/firestore";

const validationRules = yup.object({
    fName:yup.string().required('required filed'),
    lName:yup.string().required('required filed'),
    city:yup.string().required('required filed'),
    mail:yup.string().required('required filed').min(16),
    dob:yup.string(),
    bio:yup.string(),
});

export function CreateProfile ({navigation}) {
  const {uid} = useContext(AppContext);
  const [eventActivityIndicator,setEventActivityIndicator] = useState(false);

  return (
  <SafeArea>
    <Text style={styles.title}>Create Your Profile</Text>
    {eventActivityIndicator ?   <ActivityIndicator size='large'/> : null}

    <Formik
      initialValues={{ fName:'',lName:'',mail:'',city:'',dob:'',bio:'', }}
      onSubmit={(values,action) => {

        setEventActivityIndicator(true);//start ActivityIndicator
        setDoc(doc(db,'users',uid),{
          firstName:values.fName,
          lastName:values.lName,
          mailingAddress:values.mail,
          city:values.city,
          dateOfBirth:'01/27/2000',
          bioInfo:values.bio,
          createdAt:new Date().getTime()
        })
        .then(() => {
          setEventActivityIndicator(false);
          Alert.alert(
            'Message',
            'Profile created!!',
            [
              {text:'Go to Home',onPress:() => navigation.navigate('My Home')},
              {text:'Go to Profile',onPress:() => navigation.navigate('Profile')}
            ]
          )
        })
        .catch(error => {
          setEventActivityIndicator(false);//stop ActivityIndicator
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
            buttonColor="#5D9C59"
            mode="contained"
            onPress={handleSubmit}
            contentStyle={{paddingVertical:6}}
            style={{marginVertical:12}}>
               {
                eventActivityIndicator
                ? <ActivityIndicator size='small'/>
                : 'Create Profile'
               }
            </Button>
          </View>
        )}
      </Formik>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  title:{
      fontSize:35,
      marginBottom:16
  },
  form:{
    flexDirection:'column',
    gap:4
  }
})