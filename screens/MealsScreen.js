import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItems from '../components/MealItems';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList';

const MealsScreen = ({ route, navigation }) => {
	const catID = route.params.categoryID;

	const displayMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catID) >= 0;
	});

	const categoryTitle = CATEGORIES.find((cat) => cat.id === catID).title;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catID, navigation]);

	return <MealsList displayMeals={displayMeals} />;
};
export default MealsScreen;

const styles = StyleSheet.create({});
