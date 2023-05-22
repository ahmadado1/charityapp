import { createStackNavigator } from "@react-navigation/stack";
import {MyHome } from "./Home"
import {About } from "./About";
import {Login } from "./Login"; 
import { Signup } from "./Signup";
import {Donate } from "./Donate"

const Stack = createStackNavigator();

export function StackNavigation() {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
            <Stack.Screen name="My Home" component={MyHome}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Donate" component={Donate}/>
            
            
        </Stack.Navigator>
    )
}