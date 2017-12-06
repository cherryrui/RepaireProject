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
class QuestionScreen extends Component {
	static navigationOptions = (nav) => {
		return {
			headerTitle: "创建订单",
			headerRight: <Text/>,
		}
	};
	constructor(props) {
		super(props);
		this.param = this.props.navigation.state.params.param;
		this.state = {
			total: 200,
			trouble: [{
				id: 1,
				name: "屏幕问题",
				list: [{
					id: 1,
					name: "外屏碎",
					price: 200
				}, {
					id: 2,
					name: "内屏碎",
					price: 300
				}]
			}, {
				id: 2,
				name: "电池电源问题",
				list: [{
					id: 1,
					name: "外屏碎",
					price: 200
				}, {
					id: 2,
					name: "内屏碎",
					price: 300
				}]
			}, {
				id: 3,
				name: "电池电源问题",
				list: [{
					id: 1,
					name: "外屏碎",
					price: 200
				}, {
					id: 2,
					name: "内屏碎",
					price: 300
				}]
			}, {
				id: 4,
				name: "电池电源问题",
				list: [{
					id: 1,
					name: "外屏碎",
					price: 200
				}, {
					id: 2,
					name: "内屏碎",
					price: 300
				}]
			}, ]
		};
	}
	handleChange = (trouble, question, checked) => {
		console.log(trouble, question, checked, this.param);
		let questionList = this.param.question ? this.param.question : [];
		console.log(84, question);
		let flag = true;
		questionList.map((item, index) => {
			if (item.id == question.id && item.parentId == trouble.id) {
				flag = false;
				if (!checked) {
					questionList.splice(index, 1);
				}
			}
		})
		if (flag) {
			question.parentId = trouble.id;
			questionList.push(question);
		}
		this.param.question = questionList;
	}
	handleClick = () => {
		this.props.navigation.navigate("PriceDetail", {
			param: this.param
		});
	}


	render() {
		console.log(this.props.navigation.state.params);
		return <View style={styles.body}>
			<Text style={styles.title}>品牌：{this.param.name}  型号：{this.param.spec.version} {this.param.spec.spec}</Text>
			<Accordion style={styles.accordion}>
				{this.state.trouble.map(spec=>{
					return <Accordion.Panel style={styles.versionHeader} key='id' header={spec.name}>
						<FlatList
							data={spec.list}
			    			keyExtractor={(item, index) => item.id}
			    			ItemSeparatorComponent={()=><Text style={commonStyle.separator}></Text>}
							renderItem = {({item}) => <View style={styles.item}>
			    				<CusCheckBox title={item.name}
			    				 	size={18} style={styles.checkbox}
			    				 	onChange={this.handleChange.bind(this,spec,item)}/>
			    				<Text>￥{item.price}</Text>
			   				</View>}
						/>
					</Accordion.Panel>
				})}
			</Accordion>
			<View style={commonStyle.footer}>
				<View style={commonStyle.left}>
					<Text>合计：</Text>
					<Text style={commonStyle.leftText}>￥{this.state.total}</Text>
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
	accordion: {
		flex: 1,
		backgroundColor: theme.backgroundColor,
	},
	versionHeader: {
		backgroundColor: 'white',
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: theme.backgroundColor,
	},
})
export default QuestionScreen;