import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../../theme.js';
class CusRadio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: this.props.defaultValue ? this.props.defaultValue : 0,
		};
		this.iconName = this.props.iconName ? this.props.iconName : "circle-o";
		this.activeiIconName = this.props.activeiIconName ? this.props.activeiIconName : "dot-circle-o";
	}
	handleClick = () => {
		let checked = !this.state.checked;
		this.setState({
			checked: checked
		})
		this.props.onChange ? this.props.onChange(checked) : "";
	}
	render() {
		return <View style={[styles.body,this.props.style]}>
			<Text>{this.props.title}</Text>
			{this.props.options.map((item,index)=>{
				return <TouchableOpacity style={[styles.radio,this.props.optionStyle]} onPress={this.handleClick}>
					<Icon size={this.props.size} color={this.state.value==index?theme.themeColor:theme.grey} 
						name={this.state.value==index?this.activeiIconName:this.iconName}/>
					<Text style={styles.text}>{item.label}</Text>
				</TouchableOpacity>
			})}
		</View>
	}
}
const styles = StyleSheet.create({
	body: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	radio: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 20,
	},
	text: {
		marginLeft: 5,
	},
})
export default CusRadio;