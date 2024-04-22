import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {
  BasicComponentScreen,
  GifScreen,
  HomeScreen,
  LineChartScreen,
  SnapShotViewScreen,
} from '../screens';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#141414',
        },
        headerBackVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: '500',
          color: '#F9F9F9',
        },
      }}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="LineChartScreen" component={LineChartScreen} />
      <RootStack.Screen
        name="BasicComponentScreen"
        component={BasicComponentScreen}
      />
      <RootStack.Screen name="GifScreen" component={GifScreen} />
      <RootStack.Screen
        name="SnapShotViewScreen"
        component={SnapShotViewScreen}
      />
    </RootStack.Navigator>
  );
};
