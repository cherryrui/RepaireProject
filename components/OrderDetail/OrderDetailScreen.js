import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	FlatList,
	StyleSheet,
	ActivityIndicator
} from 'react-native';
import theme from '../../theme.js';
class OrderDetailScreen extends Component {
	render() {
		return <View style={styles.detail}>
			<View style={styles.header}>
				<Text style={styles.titleText}>状态：已付款</Text>
				<Text style={styles.titleText}>维修员：王某某(工号12321321)</Text>
			</View>
			<Text style={styles.title}>基本信息</Text>
			<View>
				
			</View>
		</View>
	}
}
const styles = StyleSheet.create({
	detail: {
		flex: 1,
	},
	header: {
		backgroundColor: theme.blue,
		paddingHorizontal: theme.horizontal,
		paddingVertical: 14,
	},
	titleText: {
		color: 'white',
		marginVertical: 6,
	},
	title: {
		color: 'white',
		paddingHorizontal: theme.horizontal,
	},
})

export default OrderDetailScreen;