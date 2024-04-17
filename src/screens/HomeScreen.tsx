import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';

export function HomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
      }}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('ChartScreen');
        }}>
        <Text>Chart Screen</Text>
      </Pressable>
    </View>
  );
}
