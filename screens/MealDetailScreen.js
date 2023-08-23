import {
	Image,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Button,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import MealList from '../components/MealList';
import { useContext, useLayoutEffect } from 'react';
import Icon from '../components/Icon';
import { FavoritesContext } from '../store/context/favories-context';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

const MealDetailScreen = ({ route, navigation }) => {
	// const favoriteMealContext = useContext(FavoritesContext);
	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
	const dispatch = useDispatch();

	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	// const mealIsFavorite = favoriteMealContext.ids.includes(mealId);
	const mealIsFavorite = favoriteMealIds.includes(mealId);

	const selectFavoriteStatus = () => {
		if (mealIsFavorite) {
			dispatch(removeFavorite({ id: mealId }));
			// favoriteMealContext.removeFavorite(mealId);
		} else {
			dispatch(addFavorite({ id: mealId }));
			// favoriteMealContext.addFavorite(mealId);
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<Icon
						onPress={selectFavoriteStatus}
						color={'white'}
						icon={mealIsFavorite ? 'star' : 'star-outline'}
					/>
				);
			},
		});
	}, [navigation, selectFavoriteStatus]);

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<View>
				<MealDetails
					duration={selectedMeal.duration}
					affordability={selectedMeal.affordability}
					complexity={selectedMeal.complexity}
					textStyle={styles.text}
				/>
			</View>
			<View style={styles.listOuter}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<MealList data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<MealList data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};
export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		height: 200,
		width: '100%',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	text: {
		color: 'white',
	},
	listContainer: {
		maxWidth: '80%',
	},
	listOuter: {
		alignItems: 'center',
	},
});
