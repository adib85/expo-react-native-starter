/* eslint-disable react/prop-types */

import { Notifications } from 'expo';
import React from 'react';
// import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

// const RootStackNavigator = StackNavigator(
//   {
//     Main: {
//       screen: MainTabNavigator,
//     },
//   },
//   {
//     navigationOptions: () => ({
//       headerTitleStyle: {
//         fontWeight: 'normal',
//       },
//     }),
//   }
// );

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this.notificationSubscription = this.registerForPushNotifications();
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    this.notificationSubscription && this.notificationSubscription.remove();
  }

  registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this.notificationSubscription = Notifications.addListener(
      this.handleNotification
    );
  }

  handleNotification = ({ origin, data }) => {
    // eslint-disable-next-line
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };

  render() {
    return <MainTabNavigator navigation={this.props.navigation} />;
  }
}
