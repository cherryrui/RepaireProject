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
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyle from '../../AppStyle.js';
import theme from '../../theme.js';
class BrandScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			brandList: [{
				id: 1,
				name: "苹果"
			}, {
				id: 2,
				name: "苹果"
			}, {
				id: 3,
				name: "苹果"
			}, {
				id: 4,
				name: "苹果"
			}, {
				id: 5,
				name: "苹果"
			}, {
				id: 6,
				name: "苹果"
			}, ]
		};
	}
	handleClick = (item) => {
		this.props.navigation.navigate("Spec", {
			type: item
		});
	}

	render() {
		return <View style={styles.brand}>
			<FlatList 
				data={this.state.brandList}
			    keyExtractor={(item, index) => item.id}
			    ItemSeparatorComponent={()=><Text style={commonStyle.separator}>dsa</Text>}
				renderItem = {({item}) => <TouchableOpacity style={styles.item} onPress={this.handleClick.bind(this,item)}>
			    	<Text color={theme.black}>{item.name}</Text>
					<Icon name="home"/>
			   	</TouchableOpacity>}
			/>
		</View>
	}
}

const styles = StyleSheet.create({
	brand: {
		paddingTop: theme.vertical_6,
	},
	item: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: theme.horizontal,
		paddingVertical: theme.vertical_20,
		fontSize: 16,
		color: theme.black,
	}
})
export default BrandScreen;