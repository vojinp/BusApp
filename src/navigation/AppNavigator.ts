import {createStackNavigator, createAppContainer} from 'react-navigation';

import TabNavigator from './TabNavigator';
import LinesScreen from '../screens/LinesScreen';

export default createAppContainer(createStackNavigator({
    Lines: {
        screen: LinesScreen,
        navigationOptions: () => ({
            title: "Lines"
        }),
	},
	Arrives: {
		screen: TabNavigator,
		navigationOptions: (props) => ({
            title: `${props.navigation.state.params.title}`,

	  }),
	},
}))