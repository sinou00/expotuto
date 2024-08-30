import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SquadCardComponent from '../../components/SquadCardComponent';
import ButtonComponent from '@/components/ButtonComponent';

export default function MapScreen() {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('profile'); // This assumes you have a screen named 'Profile' in your navigation stack
  };

  return (
    <View style={styles.container}>
      <ButtonComponent text="Joined" size="small" onPress={navigateToProfile} />
      <ButtonComponent text="Joined now" size="medium" iconName="account" onPress={navigateToProfile} />
      <ButtonComponent text="Joined now" size="medium" iconName="account" variant="grey" onPress={navigateToProfile} />
      <ButtonComponent text="Joined now" size="large" onPress={navigateToProfile} />
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