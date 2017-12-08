import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native';
import {
	Tabs,
	List,
} from 'antd-mobile';
import StackOptions from '../Public/TabBar/StackOptions.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../theme.js';
const Item = List.Item;
const Brief = Item.Brief;

class OrderListScreen extends Component {
	static navigationOptions = (nav) => {
		return StackOptions(nav);
	};
	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
			orderList: [{
				id: 1,
				name: "chenxians",
				category: 'sdsad'
			}, {
				id: 2,
				name: "chenxians",
				category: 'sdsad'
			}, {
				id: 3,
				name: "chenxians",
				category: 'sdsad'
			}, {
				id: 4,
				name: "chenxians",
				category: 'sdsad'
			}, {
				id: 5,
				name: "chenxians",
				category: 'sdsad'
			}, {
				id: 6,
				name: "chenxians",
				category: 'sdsad'
			}, {
				id: 7,
				name: "chenxians",
				category: 'sdsad'
			}, ],
		};
		this.searchText = '';
		this.page = 1;
		this.tabs2 = [{
			title: '全部',
			key: 0
		}, {
			title: '已接单',
			key: 1
		}, {
			title: '未付款',
			key: 2
		}, {
			title: '已付款',
			key: 3
		}, ];
		this.data = [{
			img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
			title: 'Meet hotel',
			des: '不是所有的兼职汪都需要风吹日晒',
		}, {
			img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
			title: 'McDonald\'s invites you',
			des: '不是所有的兼职汪都需要风吹日晒',
		}, {
			img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
			title: 'Eat the week',
			des: '不是所有的兼职汪都需要风吹日晒',
		}, ];
	}

	componentDidMount() {
		console.log("componentDidMount");
		this.props.navigation.setParams({
			search: this.search,
			searchText: this.searchText,
			handleText: this.handleText
		});

	}

	handleText = (text) => {
		console.log(28, text);
		this.searchText = text;
		this.props.navigation.setParams({
			search: this.search,
			searchText: this.searchText,
			handleText: this.handleText
		})
	}
	search = () => {
		console.log(20, 'search', this.searchText)
	}
	getOrder = (page) => {
		console.log(page, typeof(page));
		this.page = typeof(page) === 'number' ? page : this.page + 1;
		this.setState({
			refreshing: true
		})
		let orderList = this.state.orderList;
		for (let i = 0; i < 10; i++) {
			orderList.push({
				id: orderList.length + i
			});
		}
		this.setState({
			orderList: orderList,
			refreshing: false
		})
	}
	handleClick = () => {
		this.props.navigation.navigate("OrderDetail", {
			param: this.param
		});
	}
	render() {
		return <View style={styles.body}>
			<Tabs tabs={this.tabs2}
		      	renderTab={tab=><Text>{tab.title}</Text>}
		    >
		    	{this.tabs2.map((item,tab_index)=>{
		    		return <View key="key">
				      	<FlatList
				      		data={this.state.orderList}
				      		keyExtractor={(item, index) => item.id+index+""}
				      		renderItem={(item)=><Order onItemClick={this.handleClick}/>}
				      		onEndReached={this.getOrder}
				      		onRefresh={this.getOrder.bind(this,1)}
				      		refreshing={this.state.refreshing}
				      	/>
			    	</View>
		    	})}
		    </Tabs>
		</View>
	}
}

class Order extends React.PureComponent {

	handleClick = () => {
		this.props.onItemClick ? this.props.onItemClick(1) : "";
	}
	render() {
		return <TouchableOpacity style={styles.order} onPress={this.handleClick.bind(this,1)}>
			<View style={styles.orderTitle}>
				<Text style={styles.orderText}>2017-01-11 12:00:00</Text>
				<Text style={styles.orderText}>已接单</Text>
			</View>
			<View style={styles.orderBody}>
				<View style={styles.item}>
					<View style={styles.orderNo}>
						<Text >订单号：21312312321</Text>
						<Text style={true?[styles.status,styles.repair]:[styles.status,styles.diagnosis]}>返修</Text>
					</View>
					<Text style={styles.pay}>收款</Text>
				</View>
				<Text style={styles.item}>客户姓名：陈先生</Text>
				<Text>手机/苹果/ipone6/jine</Text>
			</View>
		</TouchableOpacity>
	}
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		borderTopColor: theme.borderColor,
		borderWidth: 0.5,
		borderColor: 'transparent',
	},
	order: {
		marginTop: theme.Vertical_6,
		backgroundColor: theme.bodyColor,
	},
	orderTitle: {
		backgroundColor: theme.black,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: theme.Horizontal,
	},
	orderText: {
		color: 'white',
	},
	orderBody: {
		paddingHorizontal: theme.Horizontal,
		paddingVertical: theme.Vertical,
	},
	item: {
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	orderNo: {
		flexDirection: 'row',
	},
	status: {
		borderRadius: 10,
		color: 'white',
		marginLeft: 10,
		paddingHorizontal: 10,
	},
	repair: {
		backgroundColor: theme.blue,
	},
	diagnosis: {
		backgroundColor: theme.red,
	},
	pay: {
		paddingHorizontal: 10,
		borderColor: theme.red,
		borderRadius: 2,
		color: theme.red,
		borderWidth: 1,
	},
})
export default OrderListScreen;