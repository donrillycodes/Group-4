import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>POOO</Text>

      <Text style={styles.text}>Emmanuel Oyenuga!</Text>

<StatusBar style="auto" />
      <Text style={styles.Title}>Pooja Suresh Kumar Salar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E2F5B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
