import {
	StyleSheet
} from 'react-native';
import theme from '../../theme.js';
export default StyleSheet.create({
	homeContent: {
		backgroundColor: theme.bodyColor,
		padding: 10,
		flex: 1,
		height: '100%',
	},
	home: {
		backgroundColor: theme.bodyColor,
		flex: 1,
	},
	tabBarIcon: {
		fontSize: 20,
		paddingRight: 10
	},
	homeTitleIcon: {
		fontSize: 18,
		color: theme.themeColor,
	},
	homeTitle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		borderBottomColor: theme.borderColor,
		borderBottomWidth: 0.5,
		backgroundColor: 'white',
	},
	brandListTitle: {
		backgroundColor: theme.borderColor,
		paddingTop: 10,
		paddingBottom: 10,
		color: 'white',
		textAlign: 'center',
	},
	brandItem: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 0,
		height: 40,
	},
	orderTitle: {
		backgroundColor: theme.navigatorColor,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		marginTop: 20,
		marginBottom: 5,
	},
	orderListIem: {
		color: theme.blue,
		paddingTop: 5,
		paddingBottom: 5,
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	input: {
		flex: 1,
	},
	repaireText: {
		backgroundColor: theme.backgroundColor,
		paddingRight: 20,
		paddingLeft: 20,
		paddingTop: 10,
		paddingBottom: 10,
		color: 'white',
	}
});