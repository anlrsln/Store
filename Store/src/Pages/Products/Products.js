import React from "react"
import {View,FlatList} from "react-native"
import Config from "react-native-config"
import ProductCard from "../../Components/ProductCard"
import useFetch from "../../Hooks/useFetch"
import Loading from "../../Components/Loading"
import Error from "../../Components/Error"


const Products=({navigation,route})=>{
    const {loading,data,error} = useFetch(Config.API_URL);

    function handleProductSelect(id){
        navigation.navigate("DetailScreen",(id))
    }  

    function renderProducts({item}){
        return <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>
    }

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }



    return(
        <View>
            <FlatList data={data} renderItem={renderProducts}/>
        </View>
    )
}


export default Products;