import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Image,
    LogBox,
    TextInput,
    TouchableOpacity

} from 'react-native';
import { Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import *as font from '../../fonts/fonts';
LogBox.ignoreLogs(['Warning: ...']);
// Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import logo from '../../assets/matrimony-logo.png';
import banner from '../../assets/banner.png';
import *as constant from '../../constants/constant';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    onChangeText = (text) => {
        this.setState({ text: text })
    }

    render() {

        // console.log("useee",useColorScheme())
        return (

            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 0.46 }}>
                        <Image source={banner} style={{ width: constant.width }} />
                    </View>
                    <View style={{ flex: 0.14 }}>
                        <Image style={styles.selfCenter} source={logo} ></Image>
                    </View>
                    <View style={styles.welcomeText}>
                        <Text style={styles.textstyle}>Welcome Back!</Text>
                        <Text style={styles.suggestion}>For Suggesting Life partner Match Anytime,Anywhere</Text>
                    </View>
                    <View style={styles.inputTexts} >
                        <TextInput
                            style={styles.input}
                            onChangeText={this.onChangeText}
                            value={this.state.text}
                            maxLength={10}
                            placeholder='Email/Phone number'
                        />
                        <TouchableOpacity style={{ marginTop: 5 }} onPress={() => this.props.navigation.navigate('Otp', { phoneNumber: this.state.text })}>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                <Text style={styles.buttonText}>
                                    Send OTP
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.bottomText}>
                        <Text style={styles.newText}>New to Sahyatri?</Text>
                        <TouchableOpacity>
                            <Text style={styles.registerText}>Register here!</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    selfCenter: {
        alignSelf: "center",
        marginTop: -20

    },
    textstyle: {
        fontFamily: font.fontFamily,
        fontSize: 24,
        fontWeight: '700',
        // color: colors.welcome,
        alignSelf: "center",
        marginTop: 5
    },
    suggestion: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: '500',
        marginTop: 10,
        fontFamily: font.fontFamily,

    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#BABABA",
        padding: 10,
        color: "#BABABA"

    },
    linearGradient: {
        borderRadius: 10,
        width: "94%",
        alignSelf: "center",
        padding: 8
    },
    buttonText: {
        fontSize: 18,
        fontFamily: font.fontFamily,
        textAlign: 'center',
        margin: 6,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    newText: {
        fontFamily: font.fontFamily,
        fontSize: 14,
        // color: "#000000"
    },
    registerText: {
        fontFamily: font.fontFamily,
        fontSize: 14,
        color: "#2BB673",
        marginLeft: 10,
        textDecorationLine: "underline",
        fontWeight: "700"
    },
    bottomText: {
        flexDirection: "row",
        marginLeft: 10,
        flex: 0.05,
        alignSelf: 'center',
        marginTop: 30,
        paddingBottom: 30
    },
    inputTexts: {
        flex: 0.24,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5
    },
    welcomeText: {
        flex: 0.12,
        padding: 10,
        marginTop: 5
    }

});