import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	FlatList,
	TouchableOpacity
} from 'react-native';
import {
	Grid
} from 'antd-mobile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlainInput from '../Public/PlainInput/PlainInput.js';
import commonStyles from '../../AppStyle.js';
import Storage from '../../Util/Storage.js';
import styles from './HomeScreenStyle.js';
class HomeScreen extends Component {

	static navigationOptions = (nav) => {
		return {
			headerTitle: "首页",
			headerLeft: <Text style={commonStyles.tabBarRightIcon}>签到</Text>,
			headerRight: <Icon style={commonStyles.tabBarLeftIcon} name='message-reply-text'/>
		}
	};
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			orderList: [{
				id: '1d3242332432',
				name: '王小明',
				key: "1",
			}, {
				id: '1d3242332432',
				name: '王小明',
				key: "2",
			}, {
				id: '1d3242332432',
				name: '王小明',
				key: "3",
			}, {
				id: '1d3242332432',
				name: '王小明',
				key: "4",
			}, {
				id: '1d3242332432',
				name: '李四',
				key: "5",
			}, {
				id: '1d3242332432',
				name: '张三',
				key: "6",
			}, {
				id: '1d3242332432',
				name: '张三三',
				key: "7",
			}, ],
			typeList: [{
				id: 1,
				name: "手机",
				img: "",
			}, {
				id: 2,
				name: "平板",
				img: "",
			}, {
				id: 3,
				name: "电脑",
				img: "",
			}]
		};
	}
	componentDidMount() {
		Storage.get('user').then(user => {
			this.setState({
				user: user
			})
		})
	}
	handleText = (text) => {
		console.log(this.props.navigation);
		if (text) {
			this.setState({
				show: true
			})
		}
	}
	handleBrand = (element) => {
		console.log(element);
		this.props.navigation.navigate("Brand", {
			type: element
		});
	}

	render() {
		return <View style={styles.home}>
			<View style={styles.homeTitle}>
		<Icon style={styles.addressIcon} name="home"/>
				<Text>{this.state.user.shop}</Text>
			</View>
			<View style={styles.homeContent}>
				<View style={styles.typeBody}>

					<Text style={styles.typeTitle}>选择品牌下单</Text>
					{this.state.typeList.map(item=>{
						return <TouchableOpacity key={item.id} style={styles.typeListItem} onPress={this.handleBrand.bind(this,item)}>
							<Icon style={styles.bankIcon} name="home"/>
							<Text style={styles.bankName}>{item.id}{item.name}</Text>
							<Text/>
						</TouchableOpacity>
					})}
				</View>
				<View style={styles.repaire}>
	        		<PlainInput placeholder="请输入客户电话号码" style={styles.input}/>
	        		<Text style={styles.repaireText}>快速返修</Text>
	        	</View>
	        	<View style={styles.order}>
					<Text style={styles.orderTitle}>当前排队订单：{this.state.orderList.length}个</Text>
					<FlatList
		          		data={this.state.orderList}
		          		keyExtractor={(item, index) => item.key}
		          		renderItem={({item}) => <Text style={styles.orderListIem}>订单编号：{item.id}   {item.name}</Text>}
		        	/>
	        	</View>
			</View>
		</View>
	}
}
export default HomeScreen;