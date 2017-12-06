import {
	StyleSheet
} from 'react-native';
import theme from '../../theme.js';
export default StyleSheet.create({
	line: {
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
		marginTop: 20
	},
	left: {
		width: 80,
		textAlign: 'right',
	},
	input: {
		flex: 1,
	},
	next: {
		width: '40%',
		alignSelf: 'center',
		marginTop: 20,
	},
})