import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';



const images = [
    { id: '1', uri: require('../../assets/images/parkpictures.png') },
    { id: '2', uri: require('../../assets/images/parkpictures.png') },
    { id: '3', uri: require('../../assets/images/parkpictures.png') },
    // Add more items here
  ];

  


export default function ChatScreen() {
    return (
      
          <View style={styles.swiperContainer}>
            <Swiper
              dotColor="#ffffff"
              activeDotColor="#973131"
              showsPagination={true}
              horizontal
            >
              {images.map((image) => (
                <View key={image.id} style={styles.slide}>
                  <Image source={ image.uri } style={styles.image} />
                </View>
              ))}
            </Swiper>
          </View>
       
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      swiperContainer: {
        width: 393,  // Adjust the container width to show multiple images
        height: 197,         // Adjust to make the swiper smaller
      },
      slide: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
       
      },
      image: {
        width: 393,
        height: 197,
        resizeMode: 'cover',
      },
    });