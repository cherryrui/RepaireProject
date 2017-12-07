import React, {
	Component
} from 'react';
import {
	View,
	Button,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import theme from '../../../theme.js';

class CusButton extends Component {
	render() {
		return <View style={[styles.button,this.props.style]}>
			<Button {...this.props}/>
		</View>
	}
}

const styles = StyleSheet.create({
	button: {}
})
export default CusButton;