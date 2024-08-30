import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ButtonComponentProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void;
  iconName?: string;  // Optional prop for the icon name
  variant?: 'default' | 'grey';  // Optional prop for medium button variant
}

export default function ButtonComponent({ text, size = 'small', onPress, iconName, variant = 'default' }: ButtonComponentProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handlePress = () => {
    if (size === 'small') {
      setIsClicked(!isClicked);  // Toggle the clicked state for small button
    }
    if (onPress) {
      onPress();  // Call the custom onPress function if provided
    } else {
      alert('Button pressed!');  // Default action
    }
  };

  // Determine styles based on size, variant, and clicked state
  const sizeStyles =
    size === 'small' && isClicked
      ? reversedButtonStyles[size]
      : variant === 'grey' && size === 'medium'
      ? buttonSizes.mediumGrey
      : buttonSizes[size];

  return (
    <TouchableOpacity style={sizeStyles.button} onPress={handlePress}>
      {size === 'medium' && iconName && (
        <MaterialCommunityIcons name={iconName} color={sizeStyles.text.color} size={16} style={{ marginRight: 8 }} />
      )}
      <Text style={sizeStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const buttonSizes = {
  small: StyleSheet.create({
    button: {
      backgroundColor: '#F9D689',
      padding: 10,
      borderRadius: 5,
      justifyContent: 'center',
      marginLeft: 10,
      marginTop: 15,
      height: 35,
      width: 103,
    },
    text: {
      color: '#973131',
      fontSize: 19,
      fontWeight: '600',
      marginLeft: 10,
      marginTop: -1,
      height: 20,
    },
  }),
  medium: StyleSheet.create({
    button: {
      backgroundColor: '#F9D689',
      padding: 12,
      borderRadius: 5,
      flexDirection: 'row', // Align icon and text horizontally
      alignItems: 'center', // Center items vertically
      justifyContent: 'center',
      marginLeft: 20,
      marginTop: 15,
      height: 30,
      width: 192,
    },
    text: {
      color: '#973131',
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
    },
  }),
  mediumGrey: StyleSheet.create({
    button: {
      backgroundColor: '#D3D3D3',
      padding: 12,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 20,
      marginTop: 15,
      height: 30,
      width: 192,
    },
    text: {
      color: '#000000',
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
    },
  }),
  large: StyleSheet.create({
    button: {
      backgroundColor: '#973131',
      padding: 15,
      borderRadius: 5,
      justifyContent: 'center',
      marginTop: 15,
      height: 54,
      width: 349,
    },
    text: {
      color: '#F9D689',
      fontSize: 19,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }),
};

const reversedButtonStyles = {
  small: StyleSheet.create({
    button: {
      backgroundColor: '#973131',
      padding: 10,
      borderRadius: 5,
      justifyContent: 'center',
      marginLeft: 10,
      marginTop: 15,
      height: 35,
      width: 103,
    },
    text: {
      color: '#F9D689',
      fontSize: 19,
      fontWeight: '600',
      marginLeft: 10,
      marginTop: -1,
      height: 20,
    },
  }),
};