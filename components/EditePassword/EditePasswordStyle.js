import {
	StyleSheet
} from 'react-native';
import theme from '../../theme.js';
export default StyleSheet.create({
	subject_contentcontent: {
		flex: 1,
		backgroundColor: theme.bodyColor,

		minHeight: 1280,
	},
	line: {
		alignItems: 'center',
		flexDirection: 'row',

		borderBottomColor: theme.backgroundColor,
		borderBottomWidth: 1,
	},
	left: {
		width: 80,
		textAlign: 'right',
	},
	input: {
		flex: 1,
		borderColor: 'transparent',
		marginHorizontal: 20,
		height: 40,
	},
	subject_contentcontent: {
		backgroundColor: theme.bodyColor,
		marginTop: 10,
		minHeight: 1280,
	},
	next: {
		width: 136,
		height: 36,
		alignSelf: 'center',
		marginTop: 32,
	},
	text_next: {
		color: theme.bodyColor,
		fontSize: 14,
	}
})