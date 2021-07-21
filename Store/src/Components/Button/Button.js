import React from "react"
import { View,Text,SafeAreaView,TouchableOpacity} from "react-native"
import styles from "./Button.style"



const Button=({text,onPress})=>{
    return(
        <TouchableOpacity style={styles.btn_container} onPress={onPress}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;