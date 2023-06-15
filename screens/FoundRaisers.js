import { useContext } from "react";
import { StyleSheet } from "react-native";
import { AppContext } from "../Settings/globalVariables";
import { SafeArea } from "../component/SafeArea";
import { Card } from "react-native-paper";


export function FundRaiser () {
    const {uid} = useContext(null);
    console.log(uid);
    return(
        <SafeArea>
             <ScrollView>
            <Card>
                {/* <Card.Cover source={require('../assets/app_images/sick.png')}/>       */}
                <Card.Title title="NIGERIA,NIG" subtitle="" left={LeftContent} />

                <Card.Content>
                    <Text variant="titleLarge">HELP THE SICK AND CREATE MORE AWARENESS</Text>
                    <Text variant="bodyMedium">support the sick </Text>
                </Card.Content>

                <View>
                    <Text style={styles.first}>__________________________________________________</Text>
                    <Text style={styles.second}> $50 raised - Donation</Text>
                </View>
                

                <Card.Actions>
                <Button>Donate</Button>
                <Button>Cancel</Button>
                </Card.Actions>
                
            </Card>
            </ScrollView>
        </SafeArea>
    )
}

const styles=StyleSheet.create({
    first:{
        paddingLeft:15
    },
    second:{
        paddingLeft:13
    }
})