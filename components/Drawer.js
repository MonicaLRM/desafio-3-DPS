import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator} from '@react-navigation/drawer'
import {Ingreso} from "./Ingreso"
import {Mostrar} from "./Mostrar"
import {NavigationContainer} from '@react-navigation/native'

const Drawer = createDrawerNavigator();

export default function drawer(){
  return(
    <NavigationContainer>
    <Drawer.Navigator 
    initialRouteName={"Ingreso"}
    screenOptions={{
              headerStyle: {
                backgroundColor: '#b30000',
              },
              headerTintColor: '#fff',
            }}
    >
    <Drawer.Screen name={"Ingreso"} component={Ingreso}/>
        <Drawer.Screen name={"Mostrar"} component={Mostrar}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}