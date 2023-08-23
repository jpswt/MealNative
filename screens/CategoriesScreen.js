import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryTile from '../components/CategoryTile';

const CategoriesScreen = ({ navigation }) => {
	const renderCategory = (itemData) => {
		const pressHandler = () => {
			navigation.navigate('Meals', { categoryID: itemData.item.id });
		};

		return (
			<CategoryTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategory}
			numColumns={2}
		/>
	);
};
export default CategoriesScreen;

const styles = StyleSheet.create({});
