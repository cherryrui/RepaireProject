import React, {
	Component
} from 'react';
import {
	Text,
	View,
	FlatList,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import {
	Accordion,
	List
} from 'antd-mobile';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../theme.js';
import commonStyle from '../../AppStyle.js';
class SpecScreen extends Component {
	constructor(props) {
		super(props);
		this.param = this.props.navigation.state.params.type;
		this.state = {
			versionList: [{
				id: 1,
				name: "苹果",
				specList: [{
					id: 1,
					name: '银色'
				}, {
					id: 2,
					name: '深灰色'
				}, ]
			}, {
				id: 2,
				name: "苹果",
				specList: [{
					id: 1,
					name: '银色'
				}, {
					id: 2,
					name: '深灰色'
				}, ]
			}, {
				id: 3,
				name: "苹果",
				specList: [{
					id: 1,
					name: '银色'
				}, {
					id: 2,
					name: '深灰色'
				}, ]
			}, {
				id: 4,
				name: "苹果",
				specList: [{
					id: 1,
					name: '银色'
				}, {
					id: 2,
					name: '深灰色'
				}, ]
			}, {
				id: 5,
				name: "苹果",
				specList: [{
					id: 1,
					name: '银色'
				}, {
					id: 2,
					name: '深灰色'
				}, ]
			}, {
				id: 6,
				name: "苹果",
				specList: [{
					id: 1,
					name: '银色'
				}, {
					id: 2,
					name: '深灰色'
				}, ]
			}, ]
		};
	}
	handleClick = (item, spec) => {
		this.param.spec = {
			version: item.name,
			spec: spec.name,

		}
		console.log(this.param);
		this.props.navigation.navigate("Question", {
			param: this.param
		});
	}

	render() {
		return <View>
			<Text style={styles.title}>{this.param.name}</Text>
			<Accordion >
				{this.state.versionList.map(spec=>{
					return <Accordion.Panel style={styles.versionHeader} key='id' header={spec.name}>
						<FlatList
							data={spec.specList}
			    			keyExtractor={(item, index) => item.id}
			    			ItemSeparatorComponent={()=><Text style={commonStyle.separator}></Text>}
							renderItem = {({item}) => <TouchableOpacity style={styles.item}
							onPress={this.handleClick.bind(this,spec,item)}>
			    				<Text>{item.name}</Text>
			    				<Icon name="home"/>
			   				</TouchableOpacity>}
						/>
					</Accordion.Panel>
				})}
			</Accordion>
		</View>
	}
}

const styles = StyleSheet.create({
	title: {
		backgroundColor: theme.blue,
		paddingVertical: 10,
		paddingHorizontal: 20,
		color: 'white',
	},
	versionHeader: {
		backgroundColor: 'white',
	},
	item: {
		backgroundColor: theme.backgroundColor,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 10,
	}
})
export default SpecScreen;