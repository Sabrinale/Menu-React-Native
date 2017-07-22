 import React, { Component } from 'react';
 import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Detail from './Components/Detail';
import User from './Components/User';

export const HomeStack = StackNavigator({
  Screen_Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home Page'
    }
  },
  Screen_Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail'
    }
  },

  Screen_Menu: {
    screen: Menu
  },
});
export const UserStack = StackNavigator({
  Screen_User: {
    screen: User,
    navigationOptions: {
      title: 'Account'
    }
  },
});
export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
        tabBarLabel: 'HOME'
    }
  },
  User: {
    screen: UserStack,
    navigationOptions: {
        tabBarLabel: 'HOME'
    }
  }
  },
    {
      tabBarPosition: 'bottom',
      //gat tap nganh de qua man hinh moi
      swipeEnabled: true,
      tabBarOptions: {
        style: {
        backgroundColor: '#dddddd'
        },
        inactiveTintColor: 'green',
        activeTinColor: 'red'
      }
});
export const SideMenu = DrawerNavigator({
  Tabbar: {
    screen: Tabs
  },
},
 {
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: props => <Menu{...props} />
 }
);
