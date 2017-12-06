import React from 'react';
import {
	Button,
	View,
	Text,
	TextInput
} from 'react-native';
import styles from './TabBarStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const StackOptions = (nav) => {
	console.log(nav.navigation.state.params);
	var options = {
		headerTitle: <View style={styles.headerTitle}>
            	<TextInput value={nav.navigation.state.params?nav.navigation.state.params.searchText:""} style={styles.tabBarInput} onChangeText={nav.navigation.state.params?nav.navigation.state.params.handleText:null}/>
            	<Icon onPress={nav.navigation.state.params?nav.navigation.state.params.search:null} style={styles.tabBarTitleIcon} name="search"/>
            </View>,
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitleStyle,
		headerLeft: <Icon style={styles.tabBarIcon} name="indent"/>,
		headerRight: <Icon style={styles.tabBarIcon} name="envelope"/>

	}
	return options;
};
export default StackOptions;