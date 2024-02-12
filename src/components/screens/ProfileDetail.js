import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TouchableOpacity,
    Dimensions,
    Appearance
} from 'react-native';
import { DarkTheme } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import *as Colors from '../../colors/colors';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import image2 from '../../assets/image2.jpg';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import *as constant from '../../constants/constant';


export default class ProfileDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dark: Appearance.getColorScheme(),
        }
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <ImageBackground source={this.props.route.params.image}
                        style={[styles.imageStyle, { width: constant.width }]} >
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flex: 0.8 }}>
                                <AntDesign name="left" size={25} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 0.15 }}>
                                <AntDesign name="sharealt" size={25} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 0.05 }}>
                                <Entypo name="dots-three-vertical" size={25} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageContainer}>
                            <View>
                                <Text style={styles.name}>Arushi sharma</Text>
                                <Text style={styles.id}>Id :7253325327</Text>
                            </View>
                            <View style={styles.likeContainer}>
                                <View style={{ flex: 0.74 }} >
                                    <TouchableOpacity style={styles.likeView}>
                                        <AntDesign name="like2" size={25} color="#FFFFFF" style={{ marginLeft: 18 }} />
                                        <Text style={styles.likeIcon}>Like her</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 0.16 }}>
                                    <TouchableOpacity style={styles.photoes}>
                                        <Feather name="heart" size={20} color="#FFFFFF" style={styles.headerIcon} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 0.1 }}>
                                    <TouchableOpacity style={styles.photoes}>
                                        <Feather name="image" size={20} color="#FFFFFF" style={styles.headerIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </ImageBackground>
                    <View style={[styles.container, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={styles.wholeView}>
                            <View >
                                <Text style={styles.basic}>Basic Details</Text>
                                <Text style={styles.brief}>Brief outline of personal information</Text>
                            </View>

                            <Divider style={styles.divider} />

                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <FontAwesome name="birthday-cake" size={20} style={styles.iconView} color="#FFFFFF" />
                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>
                                    <Text style={styles.textDetail}>26 October 1998</Text>
                                </View>
                            </View>
                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <Fontisto name="world-o" size={20} style={styles.iconView} color="#FFFFFF" />


                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>

                                    <Text style={styles.textDetail}>Mother Tongue is Tamil</Text>
                                </View>
                            </View>

                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <FontAwesome name="heart-o" size={20} style={styles.iconView} color="#FFFFFF" />


                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>

                                    <Text style={styles.textDetail}>Never Married</Text>
                                </View>
                            </View>
                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <MaterialCommunityIcons name="flower-tulip-outline" size={20} style={styles.iconView} color="#FFFFFF" />


                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>

                                    <Text style={styles.textDetail}>Hindu,Ambalavasi</Text>
                                </View>
                            </View>

                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <FontAwesome6 name="weight-hanging" size={20} style={styles.iconView} color="#FFFFFF" />


                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>

                                    <Text style={styles.textDetail}>6'1" (1.85 mts)</Text>
                                </View>
                            </View>

                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <FontAwesome name="birthday-cake" size={20} style={styles.iconView} color="#FFFFFF" />

                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>

                                    <Text style={styles.textDetail}>55kg</Text>
                                </View>
                            </View>
                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <Ionicons name="wallet-outline" size={20} style={styles.iconView} color="#FFFFFF" />


                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>

                                    <Text style={styles.textDetail}>Rs.3-4 Lakh p.a</Text>
                                </View>
                            </View>
                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <Entypo name="location" size={20} style={styles.iconView} color="#FFFFFF" />
                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>
                                    <Text style={styles.textDetail}>Salem,Tamil Nadu,India</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.container, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={styles.wholeView}>
                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <SimpleLineIcons name="graduation" size={20} style={styles.iconView} color="#FFFFFF" />
                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>
                                    <Text style={styles.education}>B.E/B.Tech - Undergraduate Degree</Text>
                                    <Text style={styles.textDetail}>UG College</Text>
                                </View>
                            </View>
                        </View>

                    </View>


                    <View style={[styles.container, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={styles.wholeView}>

                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <MaterialIcons name="work-outline" size={20} style={styles.iconView} color="#FFFFFF" />

                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>

                                    <Text style={styles.education}>Software Developer/Programmer</Text>
                                    <Text style={styles.textDetail}>Private</Text>
                                </View>
                            </View>
                        </View>

                    </View>


                    <View style={[styles.container, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]}>
                        <View style={styles.wholeView}>

                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <Feather name="home" size={20} style={styles.iconView} color="#FFFFFF" />

                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>
                                    <Text style={styles.textDetail}>Joint Family from India</Text>

                                </View>
                            </View>
                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <Feather name="users" size={20} style={styles.iconView} color="#FFFFFF" />


                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>
                                    <Text style={styles.textDetail}>Father is not Employed,Mother is a Teacher, 1 Brother(s), 1 Sister(s)</Text>

                                </View>
                            </View>
                        </View>

                    </View>




                    <View style={[styles.container, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white', marginBottom: 80 }]}>
                        <View style={styles.wholeView}>
                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <MaterialCommunityIcons name="email-outline" size={20} style={styles.iconView} color="#FFFFFF" />


                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>

                                    <Text style={styles.textDetail}>thamizha333@gmail.com</Text>
                                </View>
                            </View>
                            <View style={styles.iconList}>
                                <View style={styles.flexIcon}>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                        colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                        <Ionicons name="call-outline" size={20} style={styles.iconView} color="#FFFFFF" />


                                    </LinearGradient>
                                </View>
                                <View style={styles.flexText}>

                                    <Text style={styles.textDetail}>+919791106060</Text>
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
    imageStyle: {
        height: 400,

    },
    header: {
        flexDirection: "row",
        padding: 20,
        alignItems: "center"
    },
    flexText: { flex: 0.83 },
    flexIcon: { flex: 0.17 },
    name: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "500",
        color: '#FFFFFF'
    },
    id: {
        fontSize: 12,
        lineHeight: 20,
        fontWeight: "500",
        color: '#FFFFFF'
    },
    basic: {
        fontWeight: '500', fontSize: 17,
        // color: '#000000'
    },
    photoes: {
        height: 40,
        width: 40,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 30,
    },
    imageContainer: {
        padding: 15,
        height: 330,
        justifyContent: "flex-end"
    },
    likeContainer: {
        flexDirection: "row",
        marginTop: 12
    },
    headerIcon: { alignSelf: 'center', marginTop: 10 },
    education: {
        fontSize: 13, fontWeight: '500',
        // color: '#000000' 
    },
    likeView: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: Colors.green,
        width: "50%",
        padding: 10,
        borderRadius: 30,
    },
    likeIcon: {
        fontWeight: '500',
        fontSize: 12,
        color: '#FFFFFF',
        marginLeft: 5,
        textAlign: "center",
    },
    brief: {
        fontSize: 13,
        fontWeight: '400',
        // color: '#7A7A7A',
        lineHeight: 24
    },
    linearGradient: {
        width: 35,
        height: 35,
        borderRadius: 10,
        marginTop: 5
    },
    divider: { height: 1, marginBottom: 7, marginTop: 7, color: '#4F4F4F' },
    wholeView: { paddingTop: 15, paddingLeft: 30, paddingRight: 30, paddingBottom: 15 },
    container: { marginTop: 10 },
    iconView: { alignSelf: "center", marginTop: 6 },
    textDetail: {
        fontWeight: '400', fontSize: 13,
        // color: '#4F4F4F', 
        lineHeight: 24
    },
    iconList: { flexDirection: "row", alignItems: "center", marginBottom: 5 }


}) 