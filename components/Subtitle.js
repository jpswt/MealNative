import { StyleSheet, Text, View } from 'react-native';

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};
export default Subtitle;

const styles = StyleSheet.create({
	subtitle: {
		color: '#b1b1b1',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	subtitleContainer: {
		borderBottomColor: '#b1b1b1',
		borderBottomWidth: 2,
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
	},
});
