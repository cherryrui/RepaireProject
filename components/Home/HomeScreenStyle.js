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
		paddingTop: 20,
		flex: 1,
	},
	homeTitle: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		borderBottomColor: theme.borderColor,
		borderBottomWidth: 0.5,
	},
	typeBody: {
		backgroundColor: theme.blue,
		padding: 10,
	},
	typeTitle: {
		textAlign: 'center',
		color: 'white',
	},
	typeListItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: 'white',
		marginTop: 10,
	},
	input: {
		flex: 1,
		backgroundColor: 'white',
		margin: 0,
	},
	repaire: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 20,
	},
	repaireText: {
		backgroundColor: theme.black,
		paddingHorizontal: 20,
		paddingVertical: 9,
		color: 'white',
	},
	order: {
		backgroundColor: 'white',
		padding: 10,
		marginBottom: 10,
		flex: 1
	},
	orderTitle: {
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderColor: theme.borderColor,
		borderBottomWidth: 0.5,
		color: 'black',
	},
	orderListIem: {
		paddingTop: 5,
		paddingBottom: 5,
		paddingHorizontal: 5,
	},

});