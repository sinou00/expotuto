import { Text } from 'react-native';
import { Stack, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // For other icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // For mdiMapOutline alternative
import { Image } from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native'; // For making the icon clickable
import { useNavigation } from '@react-navigation/native';

export default function TabLayout() {

  const navigation = useNavigation();
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#973131',  // Set active icon color
      tabBarInactiveTintColor: '#973131',   // Set inactive icon color
      tabBarLabelStyle: {
        marginBottom: 0, // Adjust the space below the icon
      },
      tabBarIconStyle: { width: 24, height: 24 }, // Set size for all icons
      tabBarStyle: { height: 90 }, // Adjust height of the tab bar
      tabBarActiveBackgroundColor: '#F1F1F1',
      tabBarInactiveBackgroundColor: '#F1F1F1',
    

    }}
  >



      <Tabs.Screen 

      name="map"
      options={{
        tabBarIcon: ({ color,size,focused }) => {
          const iconName = focused ? 'map' : 'map-outline';
          return (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
          );
          },
        
          tabBarLabel: ({ focused }) => (
            focused ? <Text style={{ color: '#973131' }}>Explore</Text> : null
          ),
          
      }}
   
       />

      <Tabs.Screen 
      
      name="search"
      options={{
        tabBarIcon: ({ color,size,focused }) => {
          const iconName = 'magnify';
          return (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
          );
          },
        
          tabBarLabel: ({ focused }) => (
            focused ? <Text style={{ color: '#973131' }}>Search</Text> : null
          ),
          
      }}


      />

      <Tabs.Screen 

      name="mysquads"
      options={{
        tabBarIcon: ({ color,size,focused }) => {
          const iconName = focused ? 'account-group' : 'account-group-outline';
          return (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
          );
          },
        
          tabBarLabel: ({ focused }) => (
            focused ? <Text style={{ color: '#973131' }}>Mysquads</Text> : null
          ),
          headerTitle:"Next game: Park Jarry at 3pm",
          headerRight: () => (
            <TouchableOpacity
            onPress={() => navigation.navigate('profile')}
            style={{ marginRight: 10 }}
          >
              <MaterialCommunityIcons name="account-circle-outline" color='#973131' size={24} />
            </TouchableOpacity>
          ),
          
      }}
      

      />

      <Tabs.Screen 

      name="mygames"
      options={{
        tabBarIcon: ({ color,size,focused }) => {
          const iconName = 'basketball';
          return (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
          );
          },
        
          tabBarLabel: ({ focused }) => (
            focused ? <Text style={{ color: '#973131' }}>Mygames</Text> : null
          ),
          
      }} 


      />

      <Tabs.Screen 

      name="chat"
      options={{
        tabBarIcon: ({ color,size,focused }) => {
          const iconName = focused ? 'forum' : 'forum-outline';
          return (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
          );
          },
        
          tabBarLabel: ({ focused }) => (
            focused ? <Text style={{ color: '#973131' }}>Mychats</Text> : null
          ),
          
      }}

      
      />

    </Tabs>

   
  );
}
