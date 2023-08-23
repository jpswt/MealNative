import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';

const CategoryTile = ({ title, color, onPress }) => {
	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.btnPressed : null,
				]}
				onPress={onPress}
			>
				<View style={[styles.tileContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};
export default CategoryTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		elevation: 4,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	button: {
		flex: 1,
	},
	btnPressed: {
		opacity: 0.5,
	},
	tileContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
});
