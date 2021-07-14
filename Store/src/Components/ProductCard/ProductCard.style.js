import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        margin:10,
        padding:10,
        borderWidth:1,
        borderColor:"#eceff1",
        backgroundColor:"white",
        borderRadius:10
    },
    img:{
        height:150,
        width:150,
        resizeMode:"contain"
    },
    body_container:{
        flex:3,
        justifyContent:"space-between"
    },
    title:{
        margin:10,
        fontSize:18,
        fontWeight:"bold"
    },
    price:{
        fontSize:17,
        textAlign:"right",
        fontStyle:"italic"
    },
})