import React from "react"
import { View,Text,SafeAreaView,TouchableHighlight, TextInput} from "react-native"
import styles from "./Input.style"



const Input=({placeholder,onChangeText})=>{
    return(
        <View style={styles.input_container}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder} 
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default Input;