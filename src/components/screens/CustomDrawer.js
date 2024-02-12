import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import *as fonts from '../../fonts/fonts';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import men from '../../assets/men.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import { Divider ,Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';


const CustomDrawer = props => {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
            // contentContainerStyle={{ backgroundColor: '#8200d6' }}
            >
                <View>
                    <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                        <AntDesign name="close" size={30} style={styles.closeIcon} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ padding: 10 }}>
                        <Image source={men} style={styles.imageStyle} />
                        <Text style={styles.name}>Tamil Selvan</Text>
                        <Text style={styles.customerId}>ID 23525562</Text>
                    </TouchableOpacity>
                </View>
                <Divider style={styles.dividerStyle} />

                {/* <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View> */}
                <View style={{ paddingLeft: 25, paddingRight: 25 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('PersonalInfo')} style={{ paddingVertical: 10 }}>
                        <View style={styles.listView}>
                            <TouchableOpacity style={{ flex: 0.2 }}>
                                <AntDesign name="exclamationcircleo" size={22} color="#95969D" />
                            </TouchableOpacity>
                            <Text
                                style={styles.text}>
                                Personal Info
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('PartnerPreference')} style={{ paddingVertical: 15 }}>
                        <View style={styles.listView}>
                            <TouchableOpacity style={{ flex: 0.2 }}>
                                <Foundation name="clipboard-notes" size={25} color="#95969D" />
                            </TouchableOpacity>

                            <Text
                                style={styles.text}>
                                Partner Preference
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                        <View style={styles.listView}>
                            <TouchableOpacity style={{ flex: 0.2 }}>

                                <FontAwesome name="photo" size={22} color="#95969D" />
                            </TouchableOpacity>
                            <Text
                                style={styles.text}>
                                Photos & Horoscope
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                        <View style={styles.listView}>
                            <TouchableOpacity style={{ flex: 0.2 }}>

                                <AntDesign name="profile" size={22} color="#95969D" />

                            </TouchableOpacity>
                            <Text
                                style={styles.text}>
                                Verify my profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Settings') }} style={{ paddingVertical: 15 }}>
                        <View style={styles.listView}>
                            <TouchableOpacity style={{ flex: 0.2 }}>
                                <Ionicons name="settings-outline" size={22} color="#95969D" />
                            </TouchableOpacity>

                            <Text
                                style={styles.text}>
                                Settings
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ paddingVertical: 15 }}>
                        <View style={styles.listView}>
                            <TouchableOpacity style={{ flex: 0.2 }}>

                                <MaterialCommunityIcons name="logout" size={22} color="#E30000" />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontFamily: '500',
                                    flex: 0.8,
                                    color: '#E30000'
                                }}>
                                Logout
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </DrawerContentScrollView>
            <View>
                <TouchableOpacity style={{ marginBottom: 20, alignSelf: "center", }} onPress={() => this.props.navigation.navigate('BasicDetails')}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                        <MaterialIcons name="workspace-premium" size={22} color="#FFFFFF" />
                        <Text style={styles.buttonText}>
                            Go Premium
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
const styles = StyleSheet.create({
    name: { fontWeight: '700', fontSize: 20,textAlign: "center", marginTop: 5 },
    imageStyle: { height: 100, width: 100, borderRadius: 50, alignSelf: "center" },
    closeIcon: { alignSelf: "flex-end", paddingRight: 20, paddingTop: 20 },
    customerId: { fontWeight: '400', fontSize: 12, color: '#95969D', textAlign: "center", marginTop: 5 },
    dividerStyle: { height: 1, width: "85%", alignSelf: "center", marginTop: 5, marginBottom: 5 },
    linearGradient: {
        borderRadius: 30,
        paddingLeft: 50,
        paddingRight: 50,
        width: "94%",
        alignSelf: "center",
        padding: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    listView: { flexDirection: 'row', alignItems: 'center' },
    text: {
        fontSize: 15,
        fontFamily: '500',
        flex: 0.8,
        // color: '#0D0D26'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: fonts.fontFamily,
        textAlign: 'center',
        margin: 6,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})