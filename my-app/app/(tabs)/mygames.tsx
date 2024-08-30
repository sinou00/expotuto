import { View, Text, StyleSheet } from 'react-native';

export default function MygamesScreen() {
  return (
    <View style={styles.container}>
      <Text>I'm here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});