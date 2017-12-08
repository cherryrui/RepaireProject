import {
	StyleSheet
} from 'react-native';
import theme from '../../theme.js';
export default StyleSheet.create({
	home: {
		height: '100%'
	},
	homeContent: {
		paddingHorizontal: 40,
		paddingTop: theme.vertical_16,
		flex: 1,
	},
	homeTitle: {
		flexDirection: 'row',
		padding: 10,
		borderBottomColor: theme.borderColor,
		borderBottomWidth: 0.5,
		paddingHorizontal: theme.horizontal,
		color: theme.borderColor,
		alignItems: 'center',
		paddingVertical: theme.vertical_6,
	},
	addressIcon: {
		fontSize: 24,
		paddingRight: 6,
	},
	typeBody: {
		backgroundColor: theme.blue,
		padding: theme.horizontal,
		paddingTop: theme.vertical_6,
	},
	typeTitle: {
		textAlign: 'center',
		color: 'white',
		paddingVertical: theme.vertical_6,
	},
	typeListItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 0,
		paddingVertical: 0,
		backgroundColor: 'white',
		marginTop: 0,
		height: 48,
		marginTop: theme.vertical_6,
		color: theme.black,
	},
	bankIcon: {
		paddingLeft: theme.horizontal_24,
		fontSize: 24,
		color: theme.black,
	},
	bankName: {
		color: theme.black,
	},
	input: {
		flex: 1,
		backgroundColor: 'white',
		margin: 0,
	},
	repaire: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: theme.vertical_16,
	},
	repaireText: {
		backgroundColor: theme.black,
		paddingHorizontal: 20,
		paddingVertical: 9,
		color: 'white',
	},
	order: {
		backgroundColor: 'white',
		padding: 16,
		marginBottom: 10,
		flex: 1,
		marginBottom: 40,

	},
	orderTitle: {
		paddingVertical: theme.vertical_6,
		paddingHorizontal: 5,
		borderColor: theme.borderColor,
		borderBottomWidth: 0.5,
		color: 'black',
	},
	orderListIem: {
		paddingTop: theme.vertical_16,
		paddingHorizontal: 5,
	},

});