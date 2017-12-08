import React, {
	Component
} from 'react';
import {
	Text,
	View,
	CheckBox,
	FlatList,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import {
	Accordion,
} from 'antd-mobile';
import CusCheckBox from '../Public/CusCheckBox/CusCheckBox.js';
import commonStyle from '../../AppStyle.js';
import theme from '../../theme.js';
class PriceDetailScreen extends Component {
	static navigationOptions = (nav) => {
		return {
			headerTitle: "创建订单",
			headerRight: <Text/>,
		}
	};
	constructor(props) {
		super(props);
		this.param = this.props.navigation.state.params.param;
	}
	handleClick = () => {
		this.props.navigation.navigate("Customer");
	}

	render() {
		console.log(this.param);
		return <View style={styles.body}>
			<Text style={styles.title}>品牌：{this.param.name}  型号：{this.param.spec.version} {this.param.spec.spec}</Text>
			<View style={styles.content}>
				<View style={styles.contentTitle}>
					<Text style={[styles.contentBodyRow,styles.contentTitleRow]}>收费项</Text>
					<Text style={[styles.contentBodyRowMid,styles.contentTitleRowMid]}>费用明细</Text>
					<Text style={[styles.contentBodyRow,styles.contentTitleRow]}>金额</Text>
				</View>
				{this.param.question.map(item=>{
					return <View key='id' style={styles.contentBody}>
						<Text style={styles.contentBodyRow}>{item.name}</Text>
						<View style={styles.contentBodyRowMid}>
							<Text style={styles.contentBodyText}>更换屏幕配件</Text>
							<Text style={styles.contentBodyText}>(质保180天)</Text>
						</View>
						<Text style={styles.contentBodyRow}>100.00</Text>
					</View>
				})}
				<View style={styles.sum}>
					<Text style={styles.sumText}>前面还有<Text>5</Text>个订单</Text>
					<Text style={styles.sumText}>维修类型：到店维修</Text>
					<Text style={styles.sumText}>预计用时：4小时</Text>
				</View>
			</View>
			<View style={commonStyle.footer}>
				<View style={commonStyle.left}>
					<Text>合计：</Text>
					<Text style={commonStyle.leftText}>￥{this.param.total}</Text>
				</View>
				<Text style={commonStyle.right} onPress={this.handleClick}>下一步</Text>
			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	body: {
		flex: 1
	},
	title: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: theme.blue,
		color: 'white',
	},
	content: {
		flex: 1,
		backgroundColor: theme.backgroundColor,
		marginTop: 10,
	},
	contentTitle: {
		backgroundColor: theme.black,
		flexDirection: 'row',
	},
	contentTitleRow: {
		color: 'white',
	},
	contentTitleRowMid: {
		color: 'white',
		textAlign: 'center',
	},
	contentBody: {
		backgroundColor: 'white',
		borderBottomColor: theme.borderColor,
		borderColor: 'transparent',
		borderWidth: 0.5,
		flexDirection: 'row',
	},
	contentBodyRow: {
		width: '20%',
		textAlign: 'center',
		paddingVertical: 5,
		alignSelf: 'center',
	},
	contentBodyRowMid: {
		width: '60%',
		borderWidth: 0.5,
		paddingVertical: 5,
		borderLeftColor: theme.borderColor,
		borderRightColor: theme.borderColor,
		borderBottomColor: 'transparent',
		borderTopColor: 'transparent',
		alignSelf: 'center',
	},
	contentBodyText: {
		textAlign: 'center',
	},
	sum: {
		marginTop: 10,
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom: 10,
		backgroundColor: 'white',
	},
	sumText: {
		paddingBottom: 10,
	},
})
export default PriceDetailScreen;