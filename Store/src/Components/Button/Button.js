import React from "react"
import { View,Text,SafeAreaView,TouchableOpacity, ActivityIndicator} from "react-native"
import styles from "./Button.style"



const Button=({text,onPress,loading})=>{
    return(
        <TouchableOpacity 
            style={styles.btn_container} 
            onPress={onPress}
            disabled={loading}
        >
        {
            loading ? <ActivityIndicator color="blue"/>
            : <Text style={styles.title}>{text}</Text>
        }
        </TouchableOpacity>
    )
}

export default Button;