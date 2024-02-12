import React  from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import MyProfile from './MyProfile';
import Profile from './Profile';
import bottom1 from '../../assets/bottom1.png';
import people from '../../assets/people.png';
import search from '../../assets/search.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ShortListProfile from './ShortListProfile';



const Tab = createBottomTabNavigator();
export default function MyTab() {


    return (
        <Tab.Navigator

            screenOptions={{
                headerShown: false, tabBarShowLabel: false,
                tabBarStyle: { height: 70, borderTopWidth: 1 },
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarActiveTintColor: "#2BB673",
                    headerTitleAlign: 'center',
                    // headerStyle: { height: headerHeight },
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ borderTopWidth: focused ? 3 : 0, paddingTop: 16, borderTopColor: focused ? "#2BB673" : "" }}>
                            <Image tintColor={focused ? "#2BB673" : "#ADAFBB"} source={bottom1} style={{ marginBottom: 20 }} />

                        </View>
                    ),

                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ borderTopWidth: focused ? 3 : 0, paddingTop: 16, borderTopColor: focused ? "#2BB673" : "" }}>
                            <Ionicons name="copy" size={23} color={focused ? "#2BB673" : "#ADAFBB"} style={{ marginBottom: 20 }} />
                            {/* <Image tintColor={focused ? "#2BB673" : "#ADAFBB"} source={cards} style={{ height: 30, width:30,marginBottom:20 }} /> */}
                        </View>
                    ),
                }} />
            <Tab.Screen name="ShortListProfile"
                component={ShortListProfile} options={{
                    headerTitleAlign: 'center',
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ borderTopWidth: focused ? 3 : 0, paddingTop: 16, borderTopColor: focused ? "#2BB673" : "" }}>

                            <Ionicons name="heart" size={25} color={focused ? "#2BB673" : "#ADAFBB"} style={{ marginBottom: 20 }} />
                        </View>
                    ),
                }} />
            <Tab.Screen name="Search"
                component={Search} options={{
                    headerTitleAlign: 'center',
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ borderTopWidth: focused ? 3 : 0, paddingTop: 16, borderTopColor: focused ? "#2BB673" : "" }}>
                            {/* <Ionicons name="search-circle" size={35} color={focused ? "#2BB673" : "#ADAFBB"} style={{ marginBottom: 18 }} /> */}
                            <Image source={search} tintColor={focused ? "#2BB673" : "#ADAFBB"} style={{marginBottom:20}} />
                        </View>
                    ),
                }} />
            <Tab.Screen name="MyProfile"
                component={MyProfile} options={{
                    headerTitleAlign: 'center',
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ borderTopWidth: focused ? 3 : 0, paddingTop: 20, borderTopColor: focused ? "#2BB673" : "" }}>
                            {/* <FontAwesome6 name="user" size={25} color={focused ? "#2BB673" : "#ADAFBB"} style={{ marginBottom: 20 }} /> */}
                            <Image source={people} tintColor={focused ? "#2BB673" : "#ADAFBB"} style={{marginBottom:20}} />
                        </View>
                    ),
                }} />


        </Tab.Navigator>


    );
}