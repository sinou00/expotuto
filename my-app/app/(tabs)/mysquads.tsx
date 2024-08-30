import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView  } from 'react-native';
import SquadCardComponent from '../../components/SquadCardComponent';
import ButtonComponent from '@/components/ButtonComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MysquadsScreen() {

    const [isSquadManage, setSquadManage] = useState(true); // State to track if the container is expanded
    const [isOtherSquad, setOtherSquad] = useState(true); // State to track if the container is expanded

    const toggleExpandSquadManage = () => {
      setSquadManage(!isSquadManage); // Toggle the expansion state
    };
    const toggleExpandOtherSquad = () => {
        setOtherSquad(!isOtherSquad); // Toggle the expansion state
      };


  return (
    <View style={styles.container}>

        <View style={styles.manageContainer}>
            <Text style={styles.manage}>Squads you manage</Text>
            <TouchableOpacity onPress={toggleExpandSquadManage} >
                <MaterialCommunityIcons 
                name={isSquadManage ? "chevron-down" : "chevron-up"} 
                size={20} 
                />
            </TouchableOpacity>
        </View>
        {isSquadManage && (
        <>
         <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
            
            <View style={styles.container1}>
            <SquadCardComponent 
                squadCoverImage={require('../../assets/images/squadcover2.png')}
                userImages={[
                    require('../../assets/images/user1.png'),
                    require('../../assets/images/user2.png'),
                    require('../../assets/images/user3.png')
                ]}
                title="Golden State Warriors"
                />
                <ButtonComponent text="Joined" size="small" />
            </View>

            <View style={styles.container1}>
            <SquadCardComponent 
                squadCoverImage={require('../../assets/images/squadcover2.png')}
                userImages={[
                    require('../../assets/images/user1.png'),
                    require('../../assets/images/user2.png'),
                    require('../../assets/images/user3.png')
                ]}
                title="Golden State Warriors"
                />
                <ButtonComponent text="Joined" size="small" />
            </View>

            <View style={styles.container1}>
            <SquadCardComponent 
                squadCoverImage={require('../../assets/images/squadcover2.png')}
                userImages={[
                    require('../../assets/images/user1.png'),
                    require('../../assets/images/user2.png'),
                    require('../../assets/images/user3.png')
                ]}
                title="Golden State Warriors"
                />
                <ButtonComponent text="Joined" size="small" />
            </View>
         </ScrollView>
        </>
        )}


      <View style={styles.container2}>

        <View style={styles.manageContainer}>
            <Text style={styles.manage}>Other Squads</Text>
            <TouchableOpacity onPress={toggleExpandOtherSquad} >
                <MaterialCommunityIcons 
                name={isOtherSquad ? "chevron-down" : "chevron-up"} 
                size={20} 
                />
            </TouchableOpacity>
        </View>

        {isOtherSquad && (
            <>


            <View style={styles.container1}>
            <SquadCardComponent 
                squadCoverImage={require('../../assets/images/squadcover2.png')}
                userImages={[
                    require('../../assets/images/user1.png'),
                    require('../../assets/images/user2.png'),
                    require('../../assets/images/user3.png')
                ]}
                title="Golden State Warriors"
                />
                <ButtonComponent text="Joined" size="small" />
            </View>

            <View style={styles.container1}>
            <SquadCardComponent 
                squadCoverImage={require('../../assets/images/squadcover2.png')}
                userImages={[
                    require('../../assets/images/user1.png'),
                    require('../../assets/images/user2.png'),
                    require('../../assets/images/user3.png')
                ]}
                title="Golden State Warriors"
                />
                <ButtonComponent text="Joined" size="small" />
            </View>

            <View style={styles.container1}>
            <SquadCardComponent 
                squadCoverImage={require('../../assets/images/squadcover2.png')}
                userImages={[
                    require('../../assets/images/user1.png'),
                    require('../../assets/images/user2.png'),
                    require('../../assets/images/user3.png')
                ]}
                title="Golden State Warriors"
                />
                <ButtonComponent text="Joined" size="small" />
            </View>
            </>
        )}
      </View>
    
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
  manageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',      
    padding: 3,                   
    marginTop: 70,
  },
  manage: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  container1: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 10,
  },

  scrollContainer: {
    maxHeight: 350, // Adjust the height as needed
  },
  scrollContent: {
    flexGrow: 1,
  },












});