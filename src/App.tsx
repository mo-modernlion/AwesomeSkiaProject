import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import React from 'react';
import {HomeScreen} from './screens/HomeScreen';
import {Wallet} from './screens/ChartScreen/ChartScreen';

type RootStackParamList = {
  HomeScreen: undefined;
  ChartScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ChartScreen" component={Wallet} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
