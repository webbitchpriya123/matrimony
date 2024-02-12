import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { Text } from 'react-native-paper';
import *as fonts from '../../fonts/fonts';
import *as colors from '../../colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import Rocket from '../../assets/rocket.png';
import Menu from '../../assets/menu.png';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DATA: [
                {
                    image: image1,
                    name: 'Arushi Sharma',
                    age: '23 Yrs,5.0'
                },
                {
                    image: image2,
                    name: 'Olivia silva',
                    age: '24 Yrs,5.0'
                },
                {
                    image: image3,
                    name: 'Marya',
                    age: '20 Yrs,5.0'
                },
                {
                    image: image4,
                    name: 'Amu Lau',
                    age: '23 Yrs,5.0'
                },
                {
                    image: image5,
                    name: 'Amu Lau',
                    age: '22 Yrs,5.0'
                },
                {
                    image: image6,
                    name: 'Amu Lau',
                    age: '23 Yrs,5.0'
                },
            ]

        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                    colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                    <View style={styles.menuIcon}>
                        <TouchableOpacity style={{ flex: 0.1 }} onPress={() => this.props.navigation.openDrawer()}>
                            <Image source={Menu} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        <View style={{ flex: 0.18 }}>
                            <Image source={{ uri: 'https://source.unsplash.com/1024x768/?tree' }} style={styles.avatar} />
                        </View>
                        <View style={{ flex: 0.62 }}>
                            <Text style={styles.heloText}>Hello</Text>
                            <Text style={styles.textStyle}>Basic Details</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 0.1 }}>
                            <Ionicons name="notifications-outline" size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 15 }}>
                        <View style={styles.match}>
                            <View>
                                <View style={styles.matchText}>
                                    <Text style={styles.allMatch}>All Matches</Text>
                                    <Text style={styles.fontText}>(127)</Text>
                                </View>
                                <Text style={styles.preference}>Match your partner preference</Text>
                            </View>
                            <TouchableOpacity style={styles.matchText} onPress={() => this.props.navigation.navigate('Profile')}>
                                <Text style={styles.seeAll}>See all</Text>
                                <AntDesign name="right" size={15} color={colors.green} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingBottom: 10,marginTop:5,paddingRight:15 }}>
                        <FlatList
                            data={this.state.DATA}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileDetail', { image: item.image })} style={{ marginLeft: 15}}>
                                <Image source={item.image} style={{ borderRadius: 10 }} />
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.age} >{item.age}</Text>

                            </TouchableOpacity>}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                        colors={['#2BB673', '#00425E']} style={styles.banner}>
                        <View style={styles.Direction}>
                            <View style={styles.rocketImage}>
                                <Image source={Rocket} />

                            </View>
                            <View style={{ marginTop: 18, flex: 0.65 }}>
                                <View style={styles.Direction}>
                                    <Text style={styles.youAre}>You are</Text>
                                    <Text style={styles.missingText}>missing</Text>
                                    <Text style={[styles.youAre, { marginLeft: 5 }]}>out on the</Text>
                                </View>
                                <Text style={styles.premium}>premium benefits</Text>
                                <Text style={styles.lorem}>lorem ipsum dolor sit amet,consectetur</Text>
                                <TouchableOpacity style={styles.upgradeView}>
                                    <Text style={styles.upgradeText}>Upgrade</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </LinearGradient>

                    <View style={{ padding: 15,marginTop:5 }}>
                        <View style={styles.match}>
                            <View style={styles.matchText}>
                                <Text style={styles.allMatch}>Your Daily Recommendations</Text>
                            </View>
                            <TouchableOpacity style={styles.matchText} onPress={() => this.props.navigation.navigate('Profile')}>
                                <Text style={styles.seeAll}>See all</Text>
                                <AntDesign name="right" size={15} color={colors.green} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingBottom: 10 ,paddingRight:15 }}>
                        <FlatList
                            data={this.state.DATA}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileDetail', { image: item.image })} style={{ marginLeft: 15 }}>
                                <Image source={item.image} style={{ borderRadius: 10 }} />
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.age} >{item.age}</Text>
                            </TouchableOpacity>}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    <View style={{ padding: 15 }}>
                        <View style={styles.match}>
                            <View>
                                <View style={styles.matchText}>
                                    <Text style={styles.allMatch}>Mutual Matches</Text>
                                    <Text style={styles.fontText}>(42)</Text>
                                </View>
                                <Text style={styles.preference}>Match your partner preference</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')} style={styles.matchText}>
                                <Text style={styles.seeAll}>See all</Text>
                                <AntDesign name="right" size={15} color={colors.green} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingBottom: 10 ,marginTop:5 ,paddingRight:15}}>
                        <FlatList
                            data={this.state.DATA}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileDetail', { image: item.image })} style={{ marginLeft: 15 }}>
                                <Image source={item.image} style={{ borderRadius: 10 }} />
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.age} >{item.age}</Text>
                            </TouchableOpacity>}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.verify}>
                        <View style={{ flex: 0.2 }}>
                            <MaterialIcons name='verified' size={50} color={colors.green} />
                        </View>
                        <View style={{ flex: 0.8 }}>
                            <Text style={styles.verifyProfile}>Verify your profile</Text>
                            <Text style={styles.verifyGovt}>Verify your profile using Govt ID prrofs and get a badge to look genuine.</Text>
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
    rocketImage: {
        flex: 0.35,
        marginTop: -13,
        marginLeft: 10
    },
    Direction: {
        flexDirection: "row"
    },
    upgradeText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#FFFFFF',
        padding: 8,
        textAlign: "center"
    },
    upgradeView: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        width: "40%",
        borderRadius: 30,
        marginTop: 10
    },
    lorem: {
        fontSize: 11,
        fontWeight: '500',
        color: '#FFFFFF',
        marginTop: 8
    },
    textStyle: {
        fontFamily: fonts.fontFamily,
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
    },
    heloText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF'
    },
    seeAll: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.green,
        marginRight: 5
    },
    match: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10
    },
    matchText: {
        flexDirection: "row",
        alignItems: "center"
    },
    preference: {
        fontSize: 12,
        fontWeight: '500',
        // color: '#232323',
        marginTop: 3
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 30,
        fontWeight: '500',
        color: colors.green
    },
    fontText: {
        fontSize: 12,
        fontWeight: '500',
        marginLeft:8
        // color: '#232323'
    },
    allMatch: {
        fontSize: 16,
        fontWeight: '700',
        // color: '#232323'
    },
    name: {
        fontSize: 13,
        fontWeight: '500',
        // color: '#000000',
        marginTop: 5
    },
    age: {
        fontSize: 11,
        fontWeight: '500',
        // color: '#000000',
        lineHeight: 20
    },
    menuIcon: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15
    },
    banner: {
        marginRight: 15,
        marginLeft: 15,
        height: 140,
        borderRadius: 10,
        marginTop: 30
    },
    premium: { fontSize: 15, fontWeight: '500', color: '#FFFFFF' },
    youAre: {
        fontSize: 15, fontWeight: '500', color: '#FFFFFF'
    },
    missingText: { fontSize: 15, fontWeight: '500', color: '#FF5F67', marginLeft: 5 },
    verify: {
        height: 100,
        backgroundColor: '#E7FFF4',
        margin: 15,
        flexDirection: "row",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
        alignItems: "center"
    }


});