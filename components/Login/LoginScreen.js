import React, {
	Component
} from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';
import commonStyles from '../../AppStyle.js';
import Storage from '../../Util/Storage.js';
import PlainInput from '../Public/PlainInput/PlainInput.js';
import CusButton from '../Public/CusButton/CusButton.js';
import theme from '../../theme.js';
import {
	Toast
} from 'antd-mobile';
class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			account: "",
			password: "",
		};
	}

	handleClick = () => {
		if (this.state.account && this.state.password) {
			Storage.set('user', {
				id: 1,
				name: "王小明",
				shop: "大上海维修点"
			})
			this.props.navigation.navigate("Home");
		} else {
			Toast.fail('请输入账号和密码', 3);
		}
	}
	handleModify = () => {
		console.log('handleModify');
		this.props.navigation.navigate("ModifyPassword");
	}
	updateText = (info) => {

	}
	render() {
		return <View style={styles.continner}>
			<View style={styles.body}>
				<Text>LOGO</Text>
				<PlainInput
			        style={styles.input}
			        placeholder="账号"
			        iconName="account-circle"
			        size={18}
			        onChangeText={(account) => this.setState({account})}
			        underlineColorAndroid="transparent"
			        value={this.state.text}
			    />
			    <PlainInput
			        style={styles.input}
			        placeholder="密码"
			        iconName="lock-open"
			        size={18}
			        onChangeText={(password) => this.setState({password})}
			        value={this.state.text}
			    />
			    <CusButton style={styles.button} color={theme.themeColor} title="确定" onPress ={this.handleClick} />
				<Text onPress={this.handleModify} style={styles.modify}>忘记密码？</Text>
			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	continner: {
		paddingHorizontal: '10%',
		paddingTop: '20%',
		flex: 1,
	},
	body: {
		backgroundColor: 'white',
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	input: {
		width: "100%",
		marginTop: 20,
		borderRadius: 4,
	},
	button: {
		width: "100%",
		marginTop: 20,
	},
	modify: {
		alignSelf: 'flex-start',
		marginTop: 20,
	}
});
export default LoginScreen;