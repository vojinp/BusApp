import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

import ArrivesScreen from '../screens/ArrivesScreen';

export default createAppContainer(createMaterialTopTabNavigator({
	Weekday: {screen: ArrivesScreen},
    Saturday: {screen: ArrivesScreen},
    Sunday: {screen: ArrivesScreen}
}))
