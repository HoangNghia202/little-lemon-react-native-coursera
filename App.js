import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonHeader';
import MenuItem from './components/MenuItems';
export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <MenuItem />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  }
})
