import {
	StyleSheet
} from 'react-native';
import theme from './theme.js';
export default StyleSheet.create({
	hide: {
		height: 50,
		display: 'none'
	},
	buttonBlack: {
		backgroundColor: theme.themeColor,
		borderColor: theme.themeColor,
	},
	header: {
		elevation: 0,
		shadowOpacity: 0,
		backgroundColor: theme.navigatorColor,
		color: theme.black,
	},
	tabBarIndicator: {
		height: 0,
		backgroundColor: 'red',
	},
	headerTitleStyle: {
		alignSelf: 'center',
		fontWeight: 'normal',
		fontSize: 16,
	},
	input: {
		borderWidth: 0.5,
		borderColor: theme.borderColor,
		fontSize: 13,
		padding: 4,
	},
	separator: {
		height: 0.5,
		backgroundColor: 'rgb(200, 199, 204)',
	},
	footer: {
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	left: {
		paddingLeft: 20,
		paddingVertical: 15,
		flex: 1,
		flexDirection: 'row',
	},
	leftText: {
		color: theme.blue,
		fontWeight: 'bold',
	},
	right: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		backgroundColor: theme.blue,
		justifyContent: 'center',
		color: 'white',
	},
	tabBarRightIcon: {
		fontSize: 14,
		paddingLeft: theme.horizontal,
		color: theme.black,
	},
	tabBarLeftIcon: {
		fontSize: 24,
		paddingRight: theme.horizontal,
		color: theme.black,
	},
});