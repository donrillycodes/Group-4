import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Pooja SureshKumar Salar</Text>
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

  Title: {
    color: "green",
    fontSize: "28"
    
  }

});
