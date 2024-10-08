import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator} from '@react-navigation/drawer'
import drawer from './components/Drawer';
import Mostrar from './components/Mostrar';
import {NavigationContainer} from '@react-navigation/native'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Ingreso from './components/Ingreso'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Drawer.Navigator 
    initialRouteName={"Ingreso"}>
    <Drawer.Screen name={"Ingreso"} component={Ingreso} options={{
                drawerItemStyle: { display: 'none' }, // Oculta la opción de Boletos en el drawer
                headerShown: false,
              }}/>
    <Drawer.Screen name={"Mostrar"} component={Mostrar} options={{
                drawerItemStyle: { display: 'none' }, // Oculta la opción de Boletos en el drawer
                headerShown: false,
              }}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

