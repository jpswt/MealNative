import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './components/Favorites';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#424242' },
				headerTintColor: 'white',
				sceneContainerStyle: { backgroundColor: '#292929' },
				drawerContentStyle: { backgroundColor: '#292929' },
				drawerInactiveTintColor: 'white',
				drawerActiveTintColor: '#424242',
				drawerActiveBackgroundColor: '#b1b1b1',
			}}
		>
			<Drawer.Screen
				name="Meal Categories"
				component={CategoriesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={Favorites}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: '#424242' },
						headerTintColor: 'white',
						contentStyle: { backgroundColor: '#292929' },
					}}
				>
					<Stack.Screen
						name="Categories"
						component={DrawerNav}
						options={{ headerShown: false }}
					/>
					{/* <Stack.Screen
						name="Categories"
						component={CategoriesScreen}
						// options={{
						// 	headerStyle: { backgroundColor: '#424242' },
						// 	headerTintColor: 'white',
						// 	contentStyle: { backgroundColor: '#292929' },
						// }}
					/> */}
					<Stack.Screen
						name="Meals"
						component={MealsScreen}
						// options={({ route, navigation }) => {
						// 	const catID = route.params.categoryID;
						// 	return {
						// 		title: catID,
						// 	};
						// }}
					/>
					<Stack.Screen name="MealDetail" component={MealDetailScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
