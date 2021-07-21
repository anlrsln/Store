import React from "react"
import { View,Text,SafeAreaView,Image} from "react-native"
import Input from "../../Components/Input"
import styles from "./Login.style"
import Button from "../../Components/Button"

const Login=({navigation})=>{
    
    function handleLogin(){
        navigation.navigate("ProductsScreen",("1987","Anil"))
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.icon_container}>
                <Image style={styles.icon} source={require("../../Assets/shopping.png")}/>
            </View>
            <View style={styles.body_container}>
                <Input placeholder="Kullanıcı Adını Giriniz" onChangeText={null}/>
                <Input placeholder="Şifrenizi Giriniz" onChangeText={null}/>
                <Button text={"Giriş Yap"} onPress={handleLogin}/>
            </View>
            
        </SafeAreaView>
    )

}


export default Login;