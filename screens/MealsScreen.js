import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItems from '../components/MealItems';
import { useLayoutEffect } from 'react';

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

	const renderMeals = (itemData) => {
		const mealsProps = {
			id: itemData.item.id,
			title: itemData.item.title,
			imageUrl: itemData.item.imageUrl,
			duration: itemData.item.duration,
			complexity: itemData.item.complexity,
			affordability: itemData.item.affordability,
		};
		return <MealItems {...mealsProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMeals}
			/>
		</View>
	);
};
export default MealsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
