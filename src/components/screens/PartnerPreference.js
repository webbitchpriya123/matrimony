import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Appearance,
    Image,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {DarkTheme } from '@react-navigation/native';
import *as fonts from '../../fonts/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider, Text } from "react-native-paper";
import married from '../../assets/married.png';
import age from '../../assets/age.png';
import weight from '../../assets/weight.png';
import Occupation from '../../assets/occupation.png';
import salary from '../../assets/salary.png';
import Religion from '../../assets/religion.png';
import Caste from '../../assets/caste.png';
import Tongue from '../../assets/tongue.png';
import vector from '../../assets/Vector.png';
import Spoon from '../../assets/spoon.png';
import User from '../../assets/user.png';
import smoke from '../../assets/smoke.png';
import star from '../../assets/star.png';
import location from '../../assets/location.png';
import graduate from '../../assets/graduate.png';

export default class PartnerPreference extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dark:Appearance.getColorScheme(),

        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                    colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                    <View style={styles.headerView}>
                        <TouchableOpacity style={{ flex: 0.45 }} onPress={() => this.props.navigation.navigate('Home')}>
                            <AntDesign name="left" size={25} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>Partner Preference</Text>
                    </View>
                </LinearGradient>
                <ScrollView>
                    <View style={[styles.mainContainer,{ backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={{ padding: 15 }}>
                            <View style={styles.container}>
                                <Text style={styles.headerText}>Basic Details</Text>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                    colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                                    <View style={styles.iconContainer}>
                                        <MaterialIcons name="edit" size={20} style={styles.iconView} color="#2BB673" />
                                    </View>
                                </LinearGradient>
                            </View>
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={age} style={{ height: 25, width: 25}} />
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
                                    <Image source={married} style={{ height: 20, width: 20 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Marital Status</Text>
                                    <Text style={styles.years}>Never Married</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />

                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    {/* <Entypo name="location" size={25} /> */}
                                    <Image source={location} style={{ height: 23, width: 23 }} />

                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Location</Text>
                                    <Text style={styles.years}>Salem,Tamilnadu,India</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />

                        </View>
                    </View>

                    <View style={[styles.mainContainer,{ backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={{ padding: 15 }}>
                            <View style={styles.container}>
                                <Text style={styles.headerText}>Education & Occupation</Text>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                    colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                                    <View style={styles.iconContainer}>
                                        <MaterialIcons name="edit" size={20} style={styles.iconView} color="#2BB673" />
                                    </View>
                                </LinearGradient>
                            </View>
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    {/* <SimpleLineIcons name="graduation" size={25} /> */}
                                    <Image source={graduate} style={{ height: 25, width: 25 }} />

                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Highest Education</Text>
                                    <Text style={styles.years}>UG College</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Occupation} style={{ height: 24, width: 24 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Occupation</Text>
                                    <Text style={styles.years}>Doesn't Matter</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={salary} style={{ height: 32, width: 32 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Salary</Text>
                                    <Text style={styles.years}>Doesn't Matter</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                        </View>



                    </View>

                    <View style={[styles.mainContainer,{ backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={{ padding: 15 }}>
                            <View style={styles.container}>
                                <Text style={styles.headerText}>Religion</Text>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                    colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                                    <View style={styles.iconContainer}>
                                        <MaterialIcons name="edit" size={20} style={styles.iconView} color="#2BB673" />
                                    </View>
                                </LinearGradient>
                            </View>
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Religion} style={{ height: 28, width: 28 }} />

                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Religion</Text>
                                    <Text style={styles.years}>Hindu</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Caste} style={{ height: 28, width: 28 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Caste</Text>
                                    <Text style={styles.years}>Doesn't Matter</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Tongue} style={{ height: 28, width: 28}} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Mother tongue</Text>
                                    <Text style={styles.years}>Tamil</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={star} style={{ height: 25, width: 25 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Manglik</Text>
                                    <Text style={styles.years}>Doesn't Matter</Text>
                                </View>
                            </View>

                            <Divider style={styles.divider} />
                        </View>
                    </View>

                    <View style={[styles.mainContainer,{ backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white',marginBottom:20 }]}>
                        <View style={{ padding: 15 }}>
                            <View style={styles.container}>
                                <Text style={styles.headerText}>Lifestyle</Text>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                    colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                                    <View style={styles.iconContainer}>
                                        <MaterialIcons name="edit" size={20} style={styles.iconView} color="#2BB673" />
                                    </View>
                                </LinearGradient>
                            </View>
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={vector} style={{ height: 25, width: 25 }} />

                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Drinking Habit</Text>
                                    <Text style={styles.years}>Doesn't Matter</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={Spoon} style={{ height: 25, width: 25 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Caste</Text>
                                    <Text style={styles.years}>Doesn't Matter</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={smoke} style={{ height: 25, width: 25 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Smoking Habit</Text>
                                    <Text style={styles.years}>Doesn't Matter</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.lists}>
                                <View style={styles.flex1}>
                                    <Image source={User} style={{ height: 28, width: 28 }} />
                                </View>
                                <View style={styles.flex9}>
                                    <Text style={styles.age}>Physical Status</Text>
                                    <Text style={styles.years}>Normal</Text>
                                </View>
                            </View>

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
    age: { fontSize: 13, fontWeight: '500', 
    // color: "#4F4F4F", 
    lineHeight: 24 },
    textStyle: {
        fontFamily: fonts.fontFamily,
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
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
    years: { fontSize: 13, 
        fontWeight: '700', 
        // color: "#4F4F4F", 
        lineHeight: 24 },
    lists: { flexDirection: 'row', alignItems: "center" },
    linearGradient2: {
        width: 35,
        height: 35,
        borderRadius: 8,
        marginTop: 5
    },
    flex1: { flex: 0.1 },
    headerView: { flexDirection: "row", paddingLeft: 15 },
    mainContainer: {
        // backgroundColor: "white",
        marginTop: 10
    },
    iconContainer: { backgroundColor: "#FFFFFF", height: 30, margin: 2, borderRadius: 8, width: 30 },
    flex9: { flex: 0.9 },
    divider: { height: 1, marginTop: 8, marginBottom: 8 }

})