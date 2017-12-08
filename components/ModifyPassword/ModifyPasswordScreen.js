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
import CusButton from '../Public/CusButton/CusButton.js';
import comonStyles from '../../AppStyle.js';
import commonStyle from '../../AppStyle.js';
import theme from '../../theme.js';
class ModifyPasswordScreen extends Component {


	handleClick = () => {
		this.props.navigation.navigate("EditePassword");
	}
	render() {
		return <View style={styles.subject_contentcontent}>
			<View style={styles.line}>				
				<TextInput placeholder= "输入手机号"  placeholderTextColor={theme.lightgray} style={[comonStyles.input,styles.input]}/>
			</View>
			<View style={styles.line}>			
				<TextInput placeholder= "验证码" placeholderTextColor={theme.lightgray} style={[comonStyles.input,styles.input]}/>
		<Text style={styles.code}>获取短信验证码</Text>
			</View>	
			<CusButton style={styles.next} color={theme.themeColor} title="下一步" onPress ={this.handleClick} />	
		
		</View>
	}
}
const styles = StyleSheet.create({
	subject_contentcontent: {
		backgroundColor: theme.bodyColor,
		marginTop: 6,
		minHeight: 1280,
	},
	line: {
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomColor: theme.backgroundColor,
		borderBottomWidth: 1,

	},
	input: {
		flex: 1,
		borderColor: 'transparent',
		marginHorizontal: 20,
		fontSize: 14,
		height: 40,

	},
	inputCode: {
		flex: 1,
		borderColor: 'transparent',
	},
	code: {
		height: 40,
		width: 120,
		backgroundColor: theme.blue,
		justifyContent: 'center',
		color: 'white',
		paddingHorizontal: 25,
		paddingVertical: 10,
	},
	next: {
		width: 136,
		height: 36,
		alignSelf: 'center',
		marginTop: 32,
	},
	text_next: {
		color: theme.bodyColor,
		fontSize: 14,
	}
});
export default ModifyPasswordScreen;