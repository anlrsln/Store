import React from "react"
import {View,Text,Image} from "react-native"
import styles from "./Detail.style"
import useFetch from "../../Hooks/useFetch"
import Config from "react-native-config"
import Loading from "../../Components/Loading"
import Error from "../../Components/Error"


const Detail=({route})=>{

    const id=route.params
    const {loading,error,data}=useFetch(`${Config.API_PRODUCT_URL}/${id}`)
    


    if(loading){
        return(
            <Loading/>
        )
    }

    if(error){
        return <Error/>
    }


    return(
        <View style={styles.container}>
            <Image style={styles.img} source={{uri:data.image}}/>
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}


export default Detail;