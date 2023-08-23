import { StyleSheet, Text, View } from 'react-native';
// import { useContext } from 'react';
// import { FavoritesContext } from '../store/context/favories-context';
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
	// const favMealContext = useContext(FavoritesContext);
	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

	const favMeal = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

	if (favMeal.length === 0) {
		return (
			<View style={styles.root}>
				<Text style={styles.text}>You have no favorite meals.</Text>
			</View>
		);
	}

	return <MealsList displayMeals={favMeal} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
});
