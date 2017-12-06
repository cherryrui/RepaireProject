import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity
} from 'react-native';
import comonStyles from '../../AppStyle.js';
import styles from './EditePasswordStyle.js';
import CusButton from '../Public/CusButton/CusButton.js';
class EditePasswordScreen extends Component {


	handleClick = () => {

	}
	render() {
		return <View>
			<View style={styles.line}>
				<Text style={styles.left}>新密码：</Text>
				<TextInput underlineColorAndroid="transparent" style={[comonStyles.input,styles.input]}/>
			</View>
			<View style={styles.line}>
				<Text style={styles.left}>确认密码：</Text>
				<TextInput underlineColorAndroid="transparent" style={[comonStyles.input,styles.input]}/>
			</View>
			<CusButton
				style={styles.next}
				title="确认修改"
				color="red"
				onPress={this.handleClick}/>
		</View>
	}
}
export default EditePasswordScreen;