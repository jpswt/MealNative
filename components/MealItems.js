import { useNavigation } from '@react-navigation/native';
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	Image,
	Platform,
} from 'react-native';
import MealDetails from './MealDetails';
const MealItems = ({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) => {
	const navigation = useNavigation();

	const selectMealItem = () => {
		navigation.navigate('MealDetail', {
			mealId: id,
		});
	};

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.btnPressed : null,
				]}
				onPress={selectMealItem}
			>
				<View style={styles.inner}>
					<View>
						<Image style={styles.image} source={{ uri: imageUrl }} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
};
export default MealItems;
const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: 'hidden',
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	image: {
		height: 200,
		width: '100%',
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		margin: 8,
	},
	inner: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	btnPressed: {
		opacity: 0.5,
	},
});
