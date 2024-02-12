import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import banner from '../../assets/otpLogo.jpg';
import { Text } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import *as fonts from '../../fonts/fonts';
import LinearGradient from 'react-native-linear-gradient';
import *as constant from '../../constants/constant';
import OTPInputView from '@twotalltotems/react-native-otp-input'



export default class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        }
    }

    render() {
        return (
            <SafeAreaView>
                <View >
                    <ImageBackground source={banner} style={[styles.imageStyle, { width: constant.width }]}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flex: 0.5 }}>
                                <AntDesign name="left" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>Basic Details</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.otpView}>
                    <View style={{ padding: 20 }}>
                        <Text style={styles.otpText}>OTP Verification</Text>
                        <Text style={styles.sendOtp}>We Will send you one time password this email address</Text>
                        <View style={styles.otpNumber}>
                            <Text style={styles.enterOtp}>Enter the OTP send to </Text>
                            <Text style={styles.number}>{this.props.route.params.phoneNumber ? this.props.route.params.phoneNumber : +56552589755}</Text>
                        </View>
                        <View>
                            <OTPInputView
                                style={styles.otpContainer}
                                pinCount={4}
                                code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                onCodeChanged={code => { this.setState({ code }) }}
                                autoFocusOnLoad
                                codeInputFieldStyle={styles.underlineStyleBase}
                                // codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled={(code => {
                                    console.log(`Code is ${code}, you are good to go!`)
                                })}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <Text style={styles.number}>Didn't Receive An OTP?</Text>
                            <TouchableOpacity>
                                <Text style={styles.resendOtp}>Resend OTP</Text>

                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity style={{ marginTop: 15, alignSelf: "center" }} onPress={() => this.props.navigation.navigate('BasicDetails')}>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                                <Text style={styles.buttonText}>
                                    Verify & Proceed
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    imageStyle: {
        height: 400,
    },
    textStyle: {
        fontFamily: fonts.fontFamily,
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
    },
    header: {
        padding: 20,
        marginTop: 10,
        flexDirection: "row"
    },
    otpView: {
        height: 376,
        backgroundColor: "white",
        elevation: 5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: -140,
        borderRadius: 10
    },
    linearGradient: {
        borderRadius: 30,
        paddingLeft: 40,
        paddingRight: 40,
        width: "94%",
        alignSelf: "center",
        padding: 8
    },
    buttonText: {
        fontSize: 18,
        fontFamily: fonts.fontFamily,
        textAlign: 'center',
        margin: 6,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    otpText: {
        fontSize: 24,
        fontFamily: fonts.fontFamily,
        color: '#00091F',
        fontWeight: '600',
        textAlign: "center"
    },
    sendOtp: {
        textAlign: "center",
        fontWeight: '700',
        fontFamily: fonts.fontFamily,
        fontSize: 15,
        marginTop: 10,
        color: '#87898E'
    },
    enterOtp: {
        fontSize: 14,
        fontFamily: fonts.fontFamily,
        fontWeight: '400',
        color: '#87898E'
    },
    number: {
        fontWeight: '500',
        fontSize: 14,
        color: '#00091F',
        marginLeft: 5
    },
    resendOtp: {
        fontSize: 15,
        color: '#FF3636',
        fontWeight: '400',
        marginLeft: 5,
        textDecorationLine: "underline"
    },
    underlineStyleBase: {
        width: 56,
        height: 56,
        borderWidth: 2,
        borderBottomWidth: 2,
        color: "black",
        fontSize: 24
    },
    otpNumber: {
        marginTop: 25,
        flexDirection: "row",
        alignSelf: "center"
    },
    otpContainer: {
        width: '90%',
        height: 80,
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 20
    }



});