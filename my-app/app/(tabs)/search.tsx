import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import SquadCardComponent from '../../components/SquadCardComponent';

const GET_SQUADS = gql`
  query GetSquads {
    squads {
      id
      title
      users {
        id
        name
        image
      }
      imageUsers
      adminId
    }
  }
`;


export default function SearchScreen() {
  const { data, loading, error } = useQuery(GET_SQUADS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const squads = data.squads;

  return (
    <View style={styles.container}>
      <FlatList
        data={squads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SquadCardComponent 
            squadCoverImage={{ uri: item.imageUsers[0] }} // Assuming the first image is the cover
            userImages={item.imageUsers.map((uri: string) => ({ uri }))}
            title={item.title}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',      
    padding: 10,                   
    marginTop: 10,
  },
});

