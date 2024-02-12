import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Dimensions

} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import *as fonts from '../../fonts/fonts';
import *as colors from '../../colors/colors';
import MaterialTabs from 'react-native-material-tabs';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import *as constant from '../../constants/constant';


export default class PersonalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: ["Egypt", "Canada", "Australia", "Ireland"],
            text: "",
            index: "",
            selectedTab: 0,
            DATA: [
                {
                    image: image2,
                    name: 'Arushi Sharma',
                    age: '21 Yrs,5.0   • vanniyakula kshatriyar   • Bananglore',
                    Id: 'ID - 6762322'

                },
                {
                    image: image1,
                    name: 'Olivia silva',
                    age: '21 Yrs,5.0   • vanniyakula kshatriyar  • Bananglore',
                    Id: 'ID - 6762322'

                },
                {
                    image: image3,
                    name: 'Ami Lau',
                    age: '21 Yrs,5.0   • vanniyakula kshatriyar  • Bananglore',
                    Id: 'ID - 6762322'
                },
                {
                    image: image4,
                    name: 'Alani Ababibo',
                    age: '21 Yrs,5.0   • vanniyakula kshatriyar  • Bananglore',
                    Id: 'ID - 6762322'
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
                    <View style={{ marginBottom: -14 }}>
                        <MaterialTabs
                            items={['All Matches', 'Mutual Matches', 'Premium Matches', 'premier']}
                            selectedIndex={this.state.selectedTab}
                            onChange={(index) => this.setState({ selectedTab: index })}
                            barColor='transparent'
                            scrollable
                            // textStyle={{marginLeft:-50}}
                            indicatorStyle={{ width: 60 }}
                            // indicatorHeight={10}
                            uppercase={false}
                            allowFontScaling={false}
                            // indicatorColor="#fffe94"
                            activeTextColor="white"
                        />
                    </View>


                </LinearGradient>

                <ScrollView showsVerticalScrollIndicator={false}>



                    <FlatList
                        data={this.state.DATA}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => <View style={{ padding: 15 }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileDetail',{image:item.image})}>
                            <ImageBackground source={item.image} imageStyle={{ borderRadius: 15 }}
                                style={[styles.imageStyle, { width: constant.width - 30 }]}>
                                <View style={{ marginTop: 10, alignSelf: "flex-end", marginRight: 10 }}>

                                    <TouchableOpacity onPress={() => this.setState({ like: index })} style={styles.likeView}>
                                        {this.state.like === index ?
                                            <AntDesign name="heart" size={20} color="#2BB673" style={styles.likeICon} /> : <AntDesign name="hearto" size={20} color="#FFFFFF" style={styles.likeICon} />}
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.imageBack}>
                                    <View style={styles.verifyIcon}>
                                        <MaterialIcons name='verified' size={50} color={colors.green} />
                                        <Text style={styles.Id}>ID Verified</Text>
                                    </View>
                                    <TouchableOpacity style={styles.photoes}>
                                        <Feather name="image" size={20} color="#FFFFFF" />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            </TouchableOpacity>
                            <View style={{ marginTop: 8 }}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.name}>{item.age}</Text>
                                <Text style={styles.idVal}>{item.Id}</Text>
                            </View>


                        </View>}
                        keyExtractor={item => item}
                    />

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
    textStyle: {
        fontFamily: fonts.fontFamily,
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
    },
    Id: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: '500',
        marginLeft: 3
    },
    verifyIcon: {
        flexDirection: "row",
        alignItems: "center",
        flex: 0.90,
        paddingLeft: 10
    },
    likeView: { height: 40, width: 40, backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 30 },
    imageBack: {
        flexDirection: "row",
        alignItems: "center",
        height: 400
    },
    imageStyle: {
        height: 280,
    },
    name: {
        fontWeight: '500',
        fontSize: 13,
        // color: '#000000',
        lineHeight: 20
    },
    idVal: {
        fontWeight: '500',
        fontSize: 11,
        // color: '#000000',
        lineHeight: 20
    },
    photoes: {
        flex: 0.067,
        padding: 10,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 30
    },
    likeICon: { alignSelf: "center", marginTop: 8 }

});