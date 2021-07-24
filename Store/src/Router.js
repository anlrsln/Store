import React from "react"
import {View,Text} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Login from "./Pages/Login"
import Products from "./Pages/Products"
import Detail from "./Pages/Detail"
import {useDispatch, useSelector} from "react-redux"
import Loading from "./Components/Loading"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const Stack=createStackNavigator();



const Router=()=>{

  const userSession=useSelector(s=>s.user)
  const isAuthLoading=useSelector(s=>s.isAuthLoading)
  //console.log(userSession);
  //console.log(isAuthLoading);
  const dispatch=useDispatch()

  function handleLogOut(){
    dispatch({type:"REMOVE_USER"})
  }

  return(
    <NavigationContainer >
        {isAuthLoading ? (
          <Loading/>
          ) : !userSession ? (
            <Stack.Navigator>
              <Stack.Screen 
                name="LoginScreen" 
                component={Login} 
                options={{
                  headerShown:false
                }}
              />
            </Stack.Navigator>
            ) : (
              <Stack.Navigator>
                <Stack.Screen 
                  name="ProductsScreen" 
                  component={Products} 
                  options={{
                      title:"STORE",
                      headerTitleAlign:"center",
                      headerTintColor:"white",
                      headerStyle:{backgroundColor:"#42a5f5"},
                      headerRight:()=> <Icon name="logout" size={30} color="white" onPress={handleLogOut}/>
                  }}
                />
                <Stack.Screen 
                  name="DetailScreen" 
                  component={Detail} 
                  options={{
                        title:"DETAIL",
                        headerTitleAlign:"center",
                        headerTintColor:"white",
                        headerStyle:{backgroundColor:"#42a5f5"}
                  }}
                />
              </Stack.Navigator>
            )
        } 
      
    </NavigationContainer>
  );
};

export default Router;