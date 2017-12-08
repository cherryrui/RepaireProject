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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './AppStyle.js';
import LoginScreen from './components/Login/LoginScreen.js';
import HomeScreen from './components/Home/HomeScreen.js';
import OrderListScreen from './components/OrderList/OrderListScreen.js';
import MineScreen from './components/Mine/MineScreen.js';
import QuestionScreen from './components/Question/QuestionScreen.js';
import ModifyPasswordScreen from './components/ModifyPassword/ModifyPasswordScreen.js';
import EditePasswordScreen from './components/EditePassword/EditePasswordScreen.js';
import BrandScreen from './components/Brand/BrandScreen.js';
import SpecScreen from './components/Spec/SpecScreen.js';
import PriceDetailScreen from './components/PriceDetail/PriceDetailScreen.js';
import CustomerScreen from './components/Customer/CustomerScreen.js';
import OrderDetailScreen from './components/OrderDetail/OrderDetailScreen.js';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom
} from 'react-navigation';
import theme from './theme.js';
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
    iconName: 'clipboard-text',
}, {
    name: 'Mine',
    screen: MineScreen,
    iconName: 'chart-bar',
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
        activeTintColor: theme.blue,
        inactiveTintColor: theme.black,
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
        navigationOptions: {
            headerTitle: '选择故障问题',
            headerRight: <Icon style={styles.tabBarLeftIcon} color="#2e2b2e" name='message-reply-text'/>
        }
    },
    PriceDetail: {
        screen: PriceDetailScreen,
        navigationOptions: {
            headerTitle: '收费明细',
            headerRight: <Icon style={styles.tabBarLeftIcon} color="#2e2b2e" name='message-reply-text'/>
        }
    },
    ModifyPassword: {
        screen: ModifyPasswordScreen,
        navigationOptions: {
            headerTitle: '修改密码',
            headerRight: <Text/>
        }
    },
    EditePassword: {
        screen: EditePasswordScreen,
        navigationOptions: {
            headerTitle: '修改密码',
            headerRight: <Text/>
        }
    },
    Brand: {
        screen: BrandScreen,
        navigationOptions: {
            headerTitle: '选择品牌',
            headerRight: <Icon color="#2e2b2e" style={styles.tabBarLeftIcon} name='message-reply-text'/>
        }
    },
    Spec: {
        screen: SpecScreen,
        navigationOptions: {
            headerTitle: '选择型号和颜色',
            headerRight: <Icon color="#2e2b2e" style={styles.tabBarLeftIcon} name='message-reply-text'/>
        }
    },
    Customer: {
        screen: CustomerScreen,
        navigationOptions: {
            headerTitle: '填写客户信息',
            headerRight: <Text/>
        }
    },
    OrderDetail: {
        screen: OrderDetailScreen,
        navigationOptions: {
            headerTitle: "订单详情",
            headerRight: <Icon color="#2e2b2e" style={styles.tabBarLeftIcon} name='autorenew'/>
        }
    }
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