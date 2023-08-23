import { StyleSheet, FlatList, View } from 'react-native';
import MealItems from './MealItems';

const MealsList = ({ displayMeals }) => {
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
export default MealsList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
