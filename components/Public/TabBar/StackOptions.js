import {
	Button
} from 'react-native';
import styles from './TabBarStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export const StackOptions = (navigation) => {
	var options = {
		headerTitle: <View style={styles.headerTitle}>
            	<Icon style={styles.tabBarTitleIcon} name="search"/>
            	<TextInput style={styles.tabBarInput} onChangeText={nav.navigation.state.params?nav.navigation.state.params.handleText:null}/>
            	<Text style={[styles.tabBarTitleIcon,{display:nav.navigation.state.params&&nav.navigation.state.params.show?"block":"none"}]}>X</Text>
            </View>,
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitleStyle,
		headerLeft: <Icon style={styles.tabBarIcon} name="indent"/>,
		headerRight: <Icon style={styles.tabBarIcon} name="envelope"/>

	}
	return options
};