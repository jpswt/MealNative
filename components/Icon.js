import { StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Icon = ({ icon, color, onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => (pressed ? styles.pressed : null)}
			onPress={onPress}
		>
			<Ionicons name={icon} size={24} color={color} />
		</Pressable>
	);
};
export default Icon;

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.55,
	},
});
