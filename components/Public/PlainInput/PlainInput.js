import React, {
	Component
} from 'react';
import {
	View,
	TextInput,
	StyleSheet
} from 'react-native';
import theme from '../../../theme.js';
class PlainInput extends Component {
	render() {
		return <TextInput
	      autoCapitalize="none"
	      autoCorrect={false}
	      clearButtonMode="always"
	      underlineColorAndroid="transparent"
	      {...this.props}
	      style={[styles.input,this.props.style]}
	    />
	}
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 0.5,
		borderColor: theme.borderColor,
		fontSize: 13,
		padding: 4,
	}
})
export default PlainInput;