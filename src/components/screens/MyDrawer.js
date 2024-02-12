
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PersonalInfo from './PersonalInfo';
import PartnerPreference from './PartnerPreference';
import Photos from './Photos';
import CustomDrawer from './CustomDrawer';
import Settings from './Settings';
import MyTab from './MyTab';


const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false
            }}>
            <Drawer.Screen name="Home" component={MyTab} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="PersonalInfo" component={PersonalInfo} />
            <Drawer.Screen name="Partner Preference" component={PartnerPreference} />
            <Drawer.Screen name="Photos" component={Photos} />
        </Drawer.Navigator>
    );
};

export default MyDrawer;