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
import theme from '../../theme.js';
import CusButton from '../Public/CusButton/CusButton.js';
class EditePasswordScreen extends Component {


	handleClick = () => {

	}
	render() {
		return <View style={styles.subject_contentcontent}>
			<View style={styles.line}>				
				<TextInput underlineColorAndroid="transparent" placeholder= "输入新密码"  placeholderTextColor={theme.lightgray}  style={[comonStyles.input,styles.input]}/>
			</View>
			<View style={styles.line}>				
		<TextInput underlineColorAndroid="transparent" placeholder= "确认密码"  placeholderTextColor={theme.lightgray}  style={[comonStyles.input,styles.input]}/>
			</View>
			<View  onPress={this.handleClick} style={styles.next}>
		<Text style={styles.text_next}>确认修改</Text>
			</View>
			
		</View>
	}
}
export default EditePasswordScreen;