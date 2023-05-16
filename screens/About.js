import { View,TouchableOpacity,TextInput,StyleSheet,} from "react-native";
import { useState } from "react";

export function About () {
    const [text, setText] = useState("");

    return (
        <View>
      <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      /></View>
    );
}