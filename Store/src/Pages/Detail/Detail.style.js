import { StyleSheet,Dimensions} from "react-native";

const deviceSize=Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        padding:10,
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:10
    },
    img:{
        height:deviceSize.height/3,
        width:deviceSize.width,
        resizeMode:"contain"
        
    },
    body_container:{
        flex:1,
        padding:10,
        paddingLeft:5,
    },
    title:{fontWeight:"bold",fontSize:25,marginTop:10},
    description:{fontStyle:"italic",fontSize:17,marginVertical:10},
    price:{fontStyle:"italic",fontSize:22,textAlign:"right",marginTop:40}
})