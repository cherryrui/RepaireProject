import React from 'react';
import {
	Button,
	View,
	Text,
	TextInput
} from 'react-native';
import styles from './TabBarStyle.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StackOptions = (nav) => {
	console.log(nav.navigation.state.params);
	var options = {
		headerTitle: <View style={styles.headerTitle}>
            	<TextInput value={nav.navigation.state.params?nav.navigation.state.params.searchText:""} 
            	style={styles.tabBarInput}
            	onChangeText={nav.navigation.state.params?nav.navigation.state.params.handleText:null}/>
            </View>,
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitleStyle,
		headerRight: <Icon color="#2e2b2e" style={styles.tabBarIcon} name="autorenew"/>

	}
	return options;
};
export default StackOptions;