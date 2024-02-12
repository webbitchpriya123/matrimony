
import React from 'react';
import { useColorScheme } from 'react-native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import Login from './src/components/screens/Login';
import Otp from './src/components/screens/Otp';
import BasicDetails from './src/components/screens/BasicDetail';
import Register from './src/components/screens/Register';
import RegisterContinue from './src/components/screens/RegisterContinue';
import PersonalDetails from './src/components/screens/PersonalDetails';
import UploadPhoto from './src/components/screens/UploadPhoto';
import MyDrawer from './src/components/screens/MyDrawer';
import Profile from './src/components/screens/Profile';
import ProfileDetail from './src/components/screens/ProfileDetail';
import PersonalInfo from './src/components/screens/PersonalInfo';
import PartnerPreference from './src/components/screens/PartnerPreference';
import Photos from './src/components/screens/Photos';
import MyProfile from './src/components/screens/MyProfile';
import Settings from './src/components/screens/Settings';
import Search from './src/components/screens/Search';
import ShortListProfile from './src/components/screens/ShortListProfile';



const Stack = createStackNavigator();

function App() {
  const scheme = useColorScheme();
  
  return (
    <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Otp" component={Otp}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
            }}
          />
          <Stack.Screen name="BasicDetails" component={BasicDetails} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="RegisterContinue" component={RegisterContinue} />
          <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
          <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
          <Stack.Screen name="PartnerPreference" component={PartnerPreference} />
          <Stack.Screen name="Photos" component={Photos} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="ShortListProfile" component={ShortListProfile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Home" component={MyDrawer} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
};


export default App;










