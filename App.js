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
import ModifyPasswordScreen from './components/ModifyPassword/ModifyPasswordScreen.js';
import EditePasswordScreen from './components/EditePassword/EditePasswordScreen.js';
import BrandScreen from './components/Brand/BrandScreen.js';
import SpecScreen from './components/Spec/SpecScreen.js';
import PriceDetailScreen from './components/PriceDetail/PriceDetailScreen.js';
import CustomerScreen from './components/Customer/CustomerScreen.js';
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
        navigationOptions: {
            headerTitle: '选择故障问题',
            headerRight: <Icon name='envelope'/>
        }
    },
    PriceDetail: {
        screen: PriceDetailScreen,
        navigationOptions: {
            headerTitle: '收费明细',
            headerRight: <Icon name='envelope'/>
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
            headerRight: <Icon name='envelope'/>
        }
    },
    Spec: {
        screen: SpecScreen,
        navigationOptions: {
            headerTitle: '选择型号和颜色',
            headerRight: <Icon name='envelope'/>
        }
    },
    Customer: {
        screen: CustomerScreen,
        navigationOptions: {
            headerTitle: '填写客户信息',
        }
    }
}, {
    navigationOptions: {
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
        headerRight: <Text/>
    }
})
class App extends Component {
    render() {
        return <Navigator screenProps={{themeColor:'red'}}/>
    }
}

export default App