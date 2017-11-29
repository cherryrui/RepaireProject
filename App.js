/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './AppStyle.js';
import LoginScreen from './components/Login/LoginScreen.js';
import HomeScreen from './components/Home/HomeScreen.js';
import OrderListScreen from './components/OrderList/OrderListScreen.js';
import MineScreen from './components/Mine/MineScreen.js';
import QuestionScreen from './components/Question/QuestionScreen.js';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom
} from 'react-navigation';

/**
 * faye注册tab
 */
let routes = [{
    name: 'Home',
    screen: HomeScreen,
    iconName: 'home',
}, {
    name: 'OrderList',
    screen: OrderListScreen,
    iconName: 'list-alt',
}, {
    name: 'Mine',
    screen: MineScreen,
    iconName: 'bar-chart',
}, ];
/**
 * faye 根据路由注册路由
 */
const formatRoutes = () => {
    let temp = {};
    routes.map(item => {
        item.navigationOptions = ({
            navigation
        }) => ({
            tabBarIcon: ({
                focused,
                tintColor
            }) => (
                <Icon name={item.iconName} style={{color:tintColor,fontSize:25}}/>),
        })
        temp[item.name] = item;
    })
    return temp;
}

const Tab = TabNavigator(formatRoutes(), {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior: 'initialRoute',
    initialRouteName: "Home",
    lazy: true,
    indicatorStyle: styles.tabBarIndicator,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#06c1ae',
        inactiveTintColor: '#979797',
        style: {
            backgroundColor: '#f7f7f7',
        },
    },
})

/**
 * faye 根据路由注册页面
 */
const Navigator = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerStyle: styles.hide
        }
    },
    Tab: {
        screen: Tab,
    },
    Question: {
        screen: QuestionScreen,
    },
}, {
    navigationOptions: {
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
    }
})
class App extends Component {
    render() {
        return <Navigator screenProps={{themeColor:'red'}}/>
    }
}

export default App