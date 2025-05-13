import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Form from "./components/Form";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Form />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    justifyContent: "center",
  },
});