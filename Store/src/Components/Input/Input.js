import React from "react"
import { View,Text,SafeAreaView,TouchableHighlight, TextInput} from "react-native"
import styles from "./Input.style"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers"



const Input=({placeholder,onType,value,icon,hidePassword})=>{
    return(
        <View style={styles.input_container}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder} 
                onChangeText={onType}
                value={value}
                secureTextEntry={hidePassword}
            />
            <Icon name={icon} size={30} color="grey"/>
        </View>
    )
}

export default Input;