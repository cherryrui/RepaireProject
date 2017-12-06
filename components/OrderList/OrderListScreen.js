import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	FlatList,
	ActivityIndicator
} from 'react-native';
import {
	Tabs,
	List,
} from 'antd-mobile';
import StackOptions from '../Public/TabBar/StackOptions.js';
import Icon from 'react-native-vector-icons/FontAwesome';
const Item = List.Item;
const Brief = Item.Brief;

class OrderListScreen extends Component {
	static navigationOptions = (nav) => {
		return StackOptions(nav);
	};
	constructor(props) {
		super(props);
		this.state = {
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
		this.tabs2 = [{
			title: '全部',
			key: 0
		}, {
			title: '已接单',
			sub: 1
		}, {
			title: '未付款',
			sub: 2
		}, {
			title: '已付款',
			sub: 3
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
	render() {
		console.log("render");
		return <View style={{flex:1}}>
			<Tabs tabs={this.tabs2}
		      	renderTab={tab=><Text>{tab.title}</Text>}
		    >
			    <View>
			      	<FlatList
			      		data={this.state.orderList}
			      		keyExtractor={(item, index) => item.id}
			      		renderItem={(item)=><Order/>}
			      	/>
			    </View>
		      	<View>
					<List>
		      			{this.state.orderList.map(item=>{
		      				return <Item key={item.id} arrow="horizontal" multipleLine onClick={() => {}}>
		      					{item.name}<Brief>subtitle</Brief>
		      				</Item>
		      			})}
		      		</List>
		      	</View>
		      	<View>
		      		 <ActivityIndicator animating={false} size="large" color="#0000ff" />
				        <ActivityIndicator size="small" color="#00ff00" />
				        <ActivityIndicator size="large" color="#0000ff" />
				        <ActivityIndicator size="small" color="#00ff00" />
			    </View>
		      	<View>
		      		<FlatList
			      		data={this.state.orderList}
			      		keyExtractor={(item, index) => item.id}
			      		renderItem={(item)=><Order/>}
			      	/>
			    </View>
		    </Tabs>
		</View>
	}
}

class Order extends React.PureComponent {

	render() {
		return <View>
			<View>
				<Text>2017-01-11 12:00:00</Text>
				<Text>已接单</Text>
			</View>
			<View>
				<Text>订单号：21312312321</Text>
				<Text>返修</Text>
			</View>
			<Text>客户姓名：陈先生</Text>
			<Text>手机/苹果/ipone6/jine</Text>
		</View>
	}
}
export default OrderListScreen;