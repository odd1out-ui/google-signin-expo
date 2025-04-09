import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GoogleSignIn from '../../components/GoogleSignIn'; // make sure the path is correct

export default function App() {
  return (
    <View style={styles.container}>
      <GoogleSignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
