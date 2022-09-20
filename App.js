import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {

  const name = "MyFirstReactNativeApp";

  const onTextAdd = function (newText) {
    console.log(newText);
  }

  return (
    // View is probably div in htmli
    
    <View style={styles.container}> 
      <Header appName = { name } />
      <Input onAdd = {onTextAdd} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
