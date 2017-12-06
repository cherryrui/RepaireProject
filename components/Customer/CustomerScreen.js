import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	ScrollView
} from 'react-native';
import PlainInput from '../Public/PlainInput/PlainInput.js';
import commonStyle from '../../AppStyle.js';
import theme from '../../theme.js';
import CusCheckBox from '../Public/CusCheckBox/CusCheckBox.js';
import CusRadio from '../Public/CusRadio/CusRadio.js';
class CustomerScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.param = {
			total: 200
		}
		this.options = [{
			id: 1,
			label: "是"
		}, {
			id: 2,
			label: "否"
		}, ]
	}

	render() {
		return <View style={styles.customer}>
			<ScrollView style={styles.body}>
				<View style={styles.content}>
					<PlainInput underlineColorAndroid={theme.borderColor} style={styles.input} placeholder="输入客户姓名"/>
					<PlainInput underlineColorAndroid={theme.borderColor} style={styles.input} placeholder="输入客户手机号"/>
					<PlainInput underlineColorAndroid={theme.borderColor} style={styles.input} placeholder="其他联系电话"/>
				</View>
				<Text>收件事项</Text>
				<View style={[styles.contentItem,styles.attention]}>
					<CusCheckBox style={styles.checkbox} title="已退SIM卡"/>
					<CusCheckBox style={styles.checkbox} title="已退内存卡"/>
					<CusCheckBox style={styles.checkbox} title="已取保护壳及吊坠"/>
				</View>
				<Text>数据处理</Text>
				<View>
					<CusRadio title="是否清空数据：" options={this.options}/>
				</View>
			</ScrollView>
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
	customer: {
		flex: 1
	},
	body: {
		flex: 1,
	},
	content: {
		backgroundColor: 'white',
		marginTop: 10,
	},
	input: {
		borderColor: 'transparent',
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	contentItem: {
		backgroundColor: 'white',
		padding: 20,
	},
	attention: {
		flexDirection: 'row',
	},
	checkbox: {
		marginRight: 20,
	},

})

export default CustomerScreen;