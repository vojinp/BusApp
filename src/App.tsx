import * as React from 'react';

import TabNavigator from './navigation/TabNavigator';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component<{}> {
    render() {
        return (
            <AppNavigator />
        );
    }
}