import { StyleSheet, Text, View } from 'react-native';

const MealList = ({ data }) => {
	return data.map((dataPoint) => (
		<View style={styles.listItem} key={dataPoint}>
			<Text style={styles.itemText}>{dataPoint}</Text>
		</View>
	));
};
export default MealList;

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: '#b1b1b1',
	},
	itemText: {
		color: '#424242',
		textAlign: 'center',
	},
});
