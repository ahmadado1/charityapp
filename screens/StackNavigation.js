import { createStackNavigator } from "@react-navigation/stack";
import {MyHome } from "./Home"
import {About } from "./About";
import {Login } from "./Login"; 
import { Signup } from "./Signup";
import {Donate } from "./Donate"
import { FundRaiser } from "./FoundRaisers";
import { Create } from "./Create";
import { ForgotPassword } from "./ForgotPassword";
import { CreateProfile } from "./CreateProfile";
import { Profile } from "./Profile";
import { UpdateProfile } from "./UpdateProfile";

const Stack = createStackNavigator();

export function StackNavigation() {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
            <Stack.Screen name="My Home" component={MyHome}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Donate" component={Donate}/>
            <Stack.Screen name="Fund Raiser" component={FundRaiser}/>
            <Stack.Screen name="Create" component={Create}/>
            <Stack.Screen name="Reset Password" component={ForgotPassword}/>
            <Stack.Screen name="Create Profile" component={CreateProfile}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Update Profile" component={UpdateProfile}/>
            
            
        </Stack.Navigator>
    )
}