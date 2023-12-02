import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import NewScreen from './src/screens/NewScreen';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
	  	screenOptions={{
			headerStyle: {
				backgroundColor: '#228CDB'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
                fontFamily: 'Roboto',
                fontWeight: 'bold',
            }
		}}
      initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
		options={({navigation}) => ({
			headerRight:() => (
				<Icon
				name="align-justify"
				type="feather"
				color="#fff"
				containerStyle={style.headerIcon}
				onPress={() => navigation.navigate('New')}
				/>
			)
		})}
        />
		<Stack.Screen
		name="New"
		component={NewScreen} 
		/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
	headerIcon: {
		marginRight: 10
	}
});