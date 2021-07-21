import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        //alignItems:"center",
        backgroundColor:"#42a5f5",
    },
    icon_container:{
        flex:1,
        alignItems:"center",
        margin:30,
        marginRight:53,
        marginBottom:50

    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        fontStyle:"italic"
    },
    icon:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height/4,
        resizeMode:"contain",
        tintColor:"white"
    },
    body_container:{
        flex:3,
        alignItems:"center"
    },
})