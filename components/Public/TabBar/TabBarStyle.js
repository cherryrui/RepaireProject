import {
	StyleSheet
} from 'react-native';
import theme from '../../../theme.js';
export default StyleSheet.create({
	header: {
		backgroundColor: theme.backgroundColor,
	},
	headerTitle: {
		borderRadius: 4,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		marginBottom: 10,
		backgroundColor: 'white',
		flex: 1
	},
	tabBarTitleIcon: {
		fontSize: 14,
	},
	tabBarIcon: {
		fontSize: 20,
		paddingLeft: 10,
		paddingRight: 10,
	},
	tabBarInput: {
		flex: 1,
	}
});