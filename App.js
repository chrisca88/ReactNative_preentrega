import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Headers from './src/Components/Headers';
import Home from './src/Screens/Home';

export default function App() {
  return (
    <View style = {styles.container}>
      <Headers/>
      <Home/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
