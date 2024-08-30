import { View, Text, StyleSheet, Image } from 'react-native';

interface SquadCardComponentProps {
  squadCoverImage: any; // This should be the source of the squad cover image
  userImages: any[];    // This should be an array of sources for user images
  title: string;        // The title of the squad
}

export default function SquadCardComponent({ squadCoverImage, userImages, title }: SquadCardComponentProps) {
  const numberOfUsers = userImages.length;

  return (
    <View style={styles.squadcard}>
      <Image 
        source={squadCoverImage} 
        style={styles.image} 
      />
      
      <View style={styles.container2}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.container3}>
          <Text style={styles.numbers}>{`${numberOfUsers}/5`}</Text>
          {userImages.map((imageSource, index) => (
            <Image 
              key={index}
              source={{ uri: imageSource.uri }} 
              style={styles.userimage} 
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  squadcard: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 10,
  },

  image: {
    width: 68,   
    height: 68, 
    marginTop: 30,
    marginRight: 10,
    borderRadius: 8,
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 25,
  },

  numbers: {
    fontSize: 14,
    color: 'gray',
    marginTop: 30,
  },

  container2: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  container3: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 0,
  },

  userimage: {
    width: 33,  
    height: 33, 
    marginTop: 20,
    marginLeft: 10,
    borderRadius:20,
  },
});
