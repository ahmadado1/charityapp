import { View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Platform,
StatusBar, 
TextInput,
Button} from "react-native";
//leap year calculator
export default function App () {
  return(
   <SafeAreaView style={styles.container}>
    
      <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.leftheader}>
          <Image source={require('./assets/charityapp.png')}
          alt='app logo'
          style={styles.logo}/>
          <Text style={styles.brandName}>CharityApp</Text>
        </View>

        <Image source={require('./assets/user.png')}
        alt='app logo'
        style={styles.headerIcon}/>
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
            <View style={styles}>
              <View style={styles.donateDetails}>
                <Text style={styles.donationAmount}>₦1200</Text>
                <Text style={styles.donationInfo}> 1 minutes ago</Text>
              </View>
            </View>
            <Text style={styles.donateBy}>Donate by sample@gmail.com</Text>
        </View>
      </View>
      
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  
  },
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
    
  },
  actionBox:{
    width:'49%',
    height:'49%',
    borderRadius:10,
    backgroundColor:'#77037B',
  },
  wrapper:{
    flex:1,
    padding:12
  }
})