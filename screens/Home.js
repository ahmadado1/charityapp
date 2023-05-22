import { useState,useEffect,useCallback } from "react";
import { View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  
TextInput,Alert,
Button,} from "react-native";
import { sampleData} from '../assets/data/sample-data';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { SafeArea } from "../component/SafeArea";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Donate } from "./Donate";
import { About } from "./About";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Theme } from "../Utils/theme";


const Tab = createBottomTabNavigator()


function Home () {
    const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({Pacifico_400Regular});
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return(
    <SafeArea>
        <View style={styles.header}>
          <View style={styles.leftheader}>
            <Image source={require('../assets/charityapp.png')}
            alt='app logo'
            style={styles.logo}/>
            <Text style={styles.brandName}>CharityApp</Text>
          </View>

          <FontAwesomeIcon icon={faUser}
           color='#5C469C' size={36}/>
        </View>

        <View style={styles.body}>
          <View style={styles.actionBlock}>
            <View style={styles.actionBox}>
              
               </View>
                <View style={styles.actionBox}>
              
                 </View>
                 <View style={styles.actionBox}>
              
                 </View>
                <View style={styles.actionBox}>
              
            </View>
          </View>

          <View style={styles.recent}>
            <Text style={styles.recentTitle}>Recent Donation</Text>
              <View style={styles.recentScroll}>
                <FlatList
                 data={sampleData}
                  renderItem={({item}) => {
                  return(
                    <View style={styles.recentblock}>
                     <View style={styles.donateDetails}>
                      <Text style={styles.donationAmount}>₦{item.amount}</Text>
                      <Text style={styles.donationInfo}> {item.time} minutes ago</Text>
                      </View>
                      <Text style={styles.donateBy}>Donate by {item.email}</Text>
                    </View>
                  )
                }}
                key={({item}) => item.id}
                showsVerticalScrollIndicator={false}/>
              </View>
           </View>
          </View> 
          </SafeArea>
    )
  }

export function MyHome({navigation,route}){
    const {firstName,myClass} = route.params;
    console.log(firstName);
    return(
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home-sharp'
                  : 'home-outline';
                  } else if (route.name === 'Donate') {
                    iconName = focused ? 'heart-circle-outline' : 'heart-circle-outline';
                  } else if (route.name === 'About') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                  }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: Theme.colors.purple300,
                  tabBarInactiveTintColor: 'gray',
                })}
              >
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Tab.Screen name="Donate" component={Donate} options={{headerShown:false}}/>
          <Tab.Screen name="About" component={About} options={{headerShown:false}}/>
      </Tab.Navigator>
    )
  }
const styles = StyleSheet.create({
  
  make:{
    borderWidth:1,

  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  leftheader:{
    flexDirection:'row',
    alignItems:'center'
  },
  logo:{
    width:52,
    height:52,
    marginRight:4
  },
  brandName:{
    fontFamily:'Pacifico_400Regular',
    fontSize:28,
    fontWeight:'bold',
    color:'red'
  },
  headerIcon:{
    width:48,
    height:48,
  },
  body:{
    flex:1,
   marginTop:10
  },
  actionBlock:{
    flex:2.5,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    gap:6,
    backgroundColor:'#E34DA2',
    padding:8,
    borderRadius:10
  },
  recent:{
    flex:3.5,
    marginTop:8,
    padding:8,
    borderRadius:8,
    backgroundColor:'#FDE2F3',
  },
  actionBox:{
    width:'49%',
    height:'49%',
    borderRadius:10,
    backgroundColor:'#77037B',
  },
   
  recentblock:{
    backgroundColor:'#5C469C',
    paddingHorizontal:6,
    paddingVertical:8,
    gap:4,
    borderRadius:8,
    marginBottom:3
  },
  recentTitle:{
    fontSize:22,
    marginBottom:2
  },
  donateBy:{
    color:'#D4ADFC'
  },
  donateDetails:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  donationInfo:{
    color:'#D4ADFC'
  },
  donationAmount:{
    fontSize:20,
    color:'#fff'
  },
  recentScroll:{
    flex:1,
    flexDirection:'column'
  }
})