import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import comonStyles from '../../AppStyle.js';
import CusButton from '../Public/CusButton/CusButton.js';
class ModifyPasswordScreen extends Component {


	handleClick = () => {
		this.props.navigation.navigate("EditePassword");
	}
	render() {
		return <View>
			<View style={styles.line}>
				<Text>手机号：</Text>
				<TextInput underlineColorAndroid="transparent" style={[comonStyles.input,styles.input]}/>
			</View>
			<View style={styles.line}>
				<Text>验证码：</Text>
				<TextInput underlineColorAndroid="transparent" style={[comonStyles.input,styles.inputCode]}/>
				<CusButton title="获取验证码" onPress={this.handleClick}/>
			</View>
			<CusButton style={styles.next}
			  	title="下一步"
			  	color="red"
			  	onPress={this.handleClick}
			/>
		</View>
	}
}
const styles = StyleSheet.create({
	line: {
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
		marginTop: 20
	},
	input: {
		flex: 1,
	},
	inputCode: {
		flex: 1,
		marginRight: 10,
	},
	next: {
		width: '60%',
		alignSelf: 'center',
		marginTop: 20,
	},
});
export default ModifyPasswordScreen;