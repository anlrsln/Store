import React from "react"
import {View,Text} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"



import Products from "./Pages/Products"
import Detail from "./Pages/Detail"

const Stack=createStackNavigator();



const Router=()=>{
  return(
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="ProductsScreen" component={Products} options={
          {
            title:"STORE",
            headerTitleAlign:"center",
            headerTintColor:"white",
            headerStyle:{backgroundColor:"#42a5f5"},
          }
        }
        />
        <Stack.Screen name="DetailScreen" component={Detail} options={
                    {
                      title:"DETAIL",
                      headerTitleAlign:"center",
                      headerTintColor:"white",
                      headerStyle:{backgroundColor:"#42a5f5"}
                    }
        }/>
      </Stack.Navigator>
    </NavigationContainer>

  )

}

export default Router;