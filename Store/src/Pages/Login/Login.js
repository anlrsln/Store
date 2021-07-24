import React from "react"
import { View,Text,SafeAreaView,Image,Alert} from "react-native"
import {Formik} from "formik"
import Input from "../../Components/Input"
import styles from "./Login.style"
import Button from "../../Components/Button"
import usePost from "../../Hooks/usePost"
import Config from "react-native-config"
import {useDispatch} from "react-redux"




const Login=({navigation})=>{
    const {data,loading,error,post} = usePost()
    const dispatch=useDispatch();

    function handleLogin(values){
        post(Config.API_AUTH_URL+"/login",values)
        
    }

    if(error){
        Alert.alert("Store","Bir Hata Oluştu")
    }

    if(data){
        if(data.status==="Error"){
            Alert.alert("Store","Kullanıcı Bulunamadı")
        }else{
            dispatch({type:"SET_USER",payload:{user}})
        }

        
    }    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.icon_container}>
                <Image style={styles.icon} source={require("../../Assets/shopping.png")}/>
            </View>
            <Formik
                initialValues={{username:"",password:""}}
                onSubmit={handleLogin}>
            {({handleChange,handleSubmit,values})=>(
                    <View style={styles.body_container}>
                        <Input 
                            placeholder="Username" 
                            onType={handleChange("username")} 
                            value={values.username} icon={"account"}
                        />
                        <Input 
                            placeholder="Password" 
                            onType={handleChange("password")} 
                            value={values.password} icon={"key"}
                            hidePassword
                        />
                        <Button text={"Log In"} onPress={handleSubmit} loading={loading}/>
                    </View>
                )
            }
            </Formik>
        </SafeAreaView>
    )

}

export default Login;


const user= {
    "address": {
      "geolocation": {
        "lat": "-37.3159",
        "long": "81.1496"
      },
      "city": "kilcoole",
      "street": "new road",
      "number": 7682,
      "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
      "firstname": "john",
      "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
}