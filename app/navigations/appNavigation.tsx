import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/homeScreen';
import StatisticScreen from '../screens/statisticScreen';
import CompareScreen from '../screens/compareScreen';

const switchNavigator = createSwitchNavigator({
  homeStack: createBottomTabNavigator({
    Home: {
      screen: createStackNavigator({
        HomePage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color='black' size={25} />
        )
      }
    },
    Statistic: {
      screen: createStackNavigator({
        StatisticPage: StatisticScreen
      }),
      navigationOptions: {
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color='black' size={25} />
        )
      }
    },
    Compare: {
      screen: createStackNavigator({
        ComparePage: CompareScreen
      }),
      navigationOptions: {
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color='black' size={25} />
        )
      }
    }
  })
})

export const AppNavigator = createAppContainer(switchNavigator)