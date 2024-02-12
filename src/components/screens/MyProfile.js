import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    View,
    TouchableOpacity,
    Appearance
} from 'react-native';
import { DarkTheme } from '@react-navigation/native';

import { Divider } from "react-native-paper";
import * as colors from '../../colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Menu from '../../assets/menu.png';
import men from '../../assets/men.jpg';
import age from '../../assets/age.png';
import weight from '../../assets/weight.png';
import Occupation from '../../assets/occupation.png';
import salary from '../../assets/salary.png';
import Height from '../../assets/height.png';
import Lotus from '../../assets/lotus.png';
import Religion from '../../assets/religion.png';
import Caste from '../../assets/caste.png';
import Tongue from '../../assets/tongue.png';
import graduate from '../../assets/graduate.png';
import profile from '../../assets/profile.png';
import call from '../../assets/call.png';
import email from '../../assets/email.png';



export default class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dark: Appearance.getColorScheme(),

        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                    colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                    <View style={styles.menuIcon}>
                        <TouchableOpacity >
                            <Image source={Menu} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        <Text style={styles.myProfile}>My Profiles</Text>

                        <TouchableOpacity >
                            <Ionicons name="notifications-outline" size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                <ScrollView showsVerticalScrollIndicator={false}>


                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ padding: 10, marginTop: 20 }}>
                        <Image source={men} style={styles.imageStyle} />
                        <Text style={styles.name}>Tamil Selvan</Text>
                        <Text style={styles.customerId}>ID 23525562</Text>
                    </TouchableOpacity>
                    <View style={styles.verify}>
                        <View style={{ flex: 0.2 }}>
                            <MaterialIcons name='verified' size={50} color={colors.green} />
                        </View>
                        <View style={{ flex: 0.8 }}>
                            <Text style={styles.verifyProfile}>Verify your profile</Text>
                            <Text style={styles.verifyGovt}>Verify your profile using Govt ID prrofs and get a badge to look genuine.</Text>
                        </View>
                    </View>
                    <View style={[styles.mainContainer, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={{ padding: 15 }}>
                            <View style={styles.container}>
                                <Text style={styles.headerText}>Basic Details</Text>
                                <TouchableOpacity>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                    colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                                    <View style={styles.iconContainer}>
                                        <MaterialIcons name="edit" size={20} style={styles.iconView} color="#2BB673" />
                                    </View>
                                </LinearGradient>
                                </TouchableOpacity>
                              
                            </View>
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={age} style={{ height: 25, width: 25,  }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Age</Text>
                                    <Text style={styles.years}>18-24 yrs</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />

                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={weight} style={{ height: 25, width: 25 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Height</Text>
                                    <Text style={styles.years}>5'0 - 6'0</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Tongue} style={{ height: 25, width: 25, }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Mother Tongue</Text>
                                    <Text style={styles.years}>Salem , Tamilnadu , India</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />

                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Height} style={{ height: 25, width: 25 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Weight</Text>
                                    <Text style={styles.years}>55kg</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />

                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Lotus} style={{ height: 20, width: 20 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Religion</Text>
                                    <Text style={styles.years}>Hindu,Ambalavasi</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={salary} style={{ height: 28, width: 28 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Salary</Text>
                                    <Text style={styles.years}>Rs. 3-4 Lakh p.a</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />

                        </View>



                    </View>


                    <View style={[styles.mainContainer, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={{ padding: 15 }}>
                            <View style={styles.container}>
                                <Text style={styles.headerText}>Education & Occupation</Text>
                                <TouchableOpacity>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                    colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                                    <View style={styles.iconContainer}>
                                        <MaterialIcons name="edit" size={20} style={styles.iconView} color="#2BB673" />
                                    </View>
                                </LinearGradient>
                                </TouchableOpacity>
                               
                            </View>
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={graduate} style={{ height: 25, width: 25 }} />

                                    {/* <SimpleLineIcons name="graduation" size={25} /> */}
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Highest Education</Text>
                                    <Text style={styles.years}>UG College</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Occupation} style={{ height: 23, width: 23}} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Occupation</Text>
                                    <Text style={styles.years}>Doesn't Matter</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />

                        </View>
                    </View>

                    <View style={[styles.mainContainer, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={{ padding: 15 }}>
                            <View style={styles.container}>
                                <Text style={styles.headerText}>Family Details</Text>
                                <TouchableOpacity>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                    colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                                    <View style={styles.iconContainer}>
                                        <MaterialIcons name="edit" size={20} style={styles.iconView} color="#2BB673" />
                                    </View>
                                </LinearGradient>
                                </TouchableOpacity>
                              
                            </View>
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Religion} style={{ height: 25, width: 25 }} />

                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Family Type</Text>
                                    <Text style={styles.years}>Joint Family</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Caste} style={{ height: 25, width: 25 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Father Occupation</Text>
                                    <Text style={styles.years}>Doesn't Matter</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Tongue} style={{ height: 25, width: 25 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Mother Occupation</Text>
                                    <Text style={styles.years}>Doesn't Matter</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={profile} style={{ height: 30, width: 30 }} />

                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Siblings</Text>
                                    <Text style={styles.years}>1 sister, 1 Brother</Text>
                                </View>
                            </View>

                            <Divider style={styles.divider} />
                        </View>



                    </View>
                    <View style={[styles.mainContainer, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={{ padding: 15 }}>
                            <View style={styles.container}>
                                <Text style={styles.headerText}>Contact Details</Text>
                                <TouchableOpacity>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                    colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                                    <View style={styles.iconContainer}>
                                        <MaterialIcons name="edit" size={20} style={styles.iconView} color="#2BB673" />
                                    </View>
                                </LinearGradient>
                                </TouchableOpacity>
                               
                            </View>
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                <Image source={email} style={{ height: 30, width: 30 }} />

                                    {/* <MaterialCommunityIcons name="email-outline" size={25} /> */}

                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Email</Text>
                                    <Text style={styles.years}>thamizha@gmail.com</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={call} style={{ height: 30, width: 30 }} />


                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Phone Number</Text>
                                    <Text style={styles.years}>+91 9791106060</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />

                        </View>



                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({

    linearGradient: {
        width: "100%",
        height: 90,
        justifyContent: "flex-end",
        paddingBottom: 15
    },
    menuIcon: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15
    },
    verifyProfile: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.green
    },
    verifyGovt: {
        fontSize: 12,
        fontWeight: '500',
        color: '#393737',
        marginTop: 5
    },
    myProfile: { fontSize: 16, fontWeight: '700', color: '#FFFFFF' },
    name: {
        fontWeight: '700', fontSize: 20,
        //  color: '#0D0D26',
        textAlign: "center", marginTop: 8
    },
    imageStyle: { height: 100, width: 100, borderRadius: 50, alignSelf: "center" },
    customerId: { fontWeight: '400', fontSize: 14, color: '#3E3D3D', textAlign: "center", lineHeight: 24 },
    verify: {
        height: 100,
        backgroundColor: '#E7FFF4',
        margin: 15,
        flexDirection: "row",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
        alignItems: "center"
    },
    mainContainer: {
        // backgroundColor: "white",
        marginTop: 10
    },
    container: {
        // backgroundColor: "#FFFFFF", 
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    },
    headerText: { color: "#2BB673", fontWeight: '700', fontSize: 14 },
    iconView: {
        alignSelf: "center",
        marginTop: 5
    },
    years: { fontSize: 13, fontWeight: '700', color: "#4F4F4F", lineHeight: 24 },
    lists: { flexDirection: 'row', alignItems: "center" },
    linearGradient2: {
        width: 35,
        height: 35,
        borderRadius: 8,
        marginTop: 5
    },
    iconContainer: { backgroundColor: "#FFFFFF", height: 30, margin: 2, borderRadius: 8, width: 30 },
    flex9: { flex: 0.9 },
    divider: { height: 1, marginTop: 8, marginBottom: 8 },
    flex1: { flex: 0.1 },






});