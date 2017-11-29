import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	FlatList
} from 'react-native';
import {
	Grid
} from 'antd-mobile';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './HomeScreenStyle.js';
import commonStyles from '../../AppStyle.js';
import Storage from '../../Util/Storage.js';
class HomeScreen extends Component {

	static navigationOptions = (nav) => {
		return {
			headerTitle: "首页",
			headerTitleStyle: styles.headerTitleStyle,
			headerLeft: <Text/>,
			headerRight: <Icon style={styles.tabBarIcon} name="envelope"/>
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
				name: '王小明',
				key: "5",
			}, {
				id: '1d3242332432',
				name: '王小明',
				key: "6",
			}, {
				id: '1d3242332432',
				name: '王小明',
				key: "7",
			}, ],
			brandList: [{
				id: 1,
				name: "苹果"
			}, {
				id: 2,
				name: "华为"
			}, {
				id: 3,
				name: "小米"
			}, {
				id: 4,
				name: "魅族"
			}, {
				id: 5,
				name: "OPPO"
			}, {
				id: 6,
				name: "VIVO"
			}, {
				id: 7,
				name: "金立"
			}, {
				id: 8,
				name: "三星"
			}, ]
		};
	}
	componentDidMount() {
		console.log(88, "componentDidMount", Storage.get('user'));
		Storage.get('user').then(user => {
			console.log(82, user);
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

	render() {
		console.log(this.state.user);
		return <View style={styles.home}>
			<View style={styles.homeTitle}>
				<Text><Icon style={styles.homeTitleIcon} name="map-marker"/>  {this.state.user.shop}</Text>
				<Text>{this.state.user.name}</Text>
			</View>
			<View style={styles.homeContent}>
				<Text style={styles.brandListTitle}>选择品牌下单</Text>
				<Grid data={this.state.brandList}
					itemStyle={styles.brandItem}
					renderItem={item=><Text>{item.name}</Text>}
					columnNum={4} />
				<Text style={styles.orderTitle}>当前排队订单：{this.state.orderList.length}个</Text>
				<FlatList
	          		data={this.state.orderList}
	          		renderItem={({item}) => <Text style={styles.orderListIem}>订单编号：{item.id}   {item.name}</Text>}
	        	/>
			</View>
			<View style={styles.footer}>
	        	<TextInput placeholder="请输入客户电话号码" style={[commonStyles.input,styles.input]}/>
	        	<Text style={styles.repaireText}>快速返修</Text>
	        </View>
		</View>
	}
}
export default HomeScreen;