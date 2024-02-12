import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    Alert,
    Button

} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import *as fonts from '../../fonts/fonts';
import { Checkbox, Text, } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import { CountryPicker } from "react-native-country-codes-picker";
import CountryFlag from "react-native-country-flag";
import moment from "moment";



export default class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: ["Egypt", "Canada", "Australia", "Ireland"],
            text: '',
            email: "",
            checked: false,
            selected: '',
            isFocus: false,
            value: null,
            phone: true,
            modalVisible: false,
            countryCode: "IN",
            dial: '+91',
            selectedDate: `${moment(new Date).format('L')}`,
            mobileNumber: "",
            data: [
                { label: 'Item 1 Item 1 Item 1 Item 1 Item 1', value: '1' },
                { label: 'Item 2', value: '2' },
                { label: 'Item 3', value: '3' },
                { label: 'Item 4', value: '4' },
                { label: 'Item 5', value: '5' },
                { label: 'Item 6', value: '6' },
                { label: 'Item 7', value: '7' },
                { label: 'Item 8', value: '8' },
            ]

        }
    }
    handleDateChange = (newDate) => {

        this.setState({ selectedDate: `${moment(newDate).format('L')}` })
    }

    onChangeText = (text) => {
        this.setState({ text: text })
    }

    render() {


        console.log("state/", new Date(this.state.selectedDate), typeof moment(this.state.selectedDate).format('L'))
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                    colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                    <View style={{ flexDirection: "row", paddingLeft: 15 }}>
                        <TouchableOpacity style={{ flex: 0.45 }} onPress={() => this.props.navigation.goBack()}>
                            <AntDesign name="left" size={25} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>Basic Details</Text>
                    </View>
                </LinearGradient>
                <View>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                this.setState({ modalVisible: !this.state.modalVisible })
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <TouchableOpacity onPress={() => this.setState({ modalVisible: !this.state.modalVisible })} style={styles.model}>
                                        <AntDesign name="close" size={30} color={"black"} />
                                    </TouchableOpacity>
                                    <View style={{ padding: 5 }}>
                                        <DatePicker
                                            textColor="black"
                                            mode="date" // Set mode to 'date' to hide the time
                                            date={this.state.selectedDate}
                                            onDateChange={this.handleDateChange}
                                        />

                                    </View>

                                </View>
                            </View>
                        </Modal>
                    </View>


                    <View style={styles.header}>

                        <View style={{ padding: 10 }} >
                            <Text style={[styles.title, { marginTop: 15, paddingBottom: 5 }]}>PROFILE CREATED FOR*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    containerStyle={{ borderRadius: 15, borderWidth: 1, borderColor: 'gray' }}
                                    // search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!this.state.isFocus ? 'Select item' : '...'}
                                    searchPlaceholder="Search..."
                                    value={this.state.value}
                                    itemTextStyle={{ color: "black" }}
                                    // onFocus={() => setIsFocus(true)}
                                    // onBlur={() => setIsFocus(false)}
                                    onChange={item => {
                                        this.setState({ value: item.value, focus: false })
                                    }}

                                />
                            </View>

                            <View style={styles.genderText}
                            >
                                <View style={{ flex: 0.48 }}>
                                    <Text style={styles.DobStyle}>DOB*</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}>
                                        <View style={{ flex: 0.75 }}>

                                            <TextInput
                                                style={{ marginLeft: 5 }}
                                                // onChangeText={this.onChangeText}
                                                value={this.state.selectedDate}
                                                placeholder='dd/mm/yyyy'
                                            />
                                        </View>

                                        <TouchableOpacity onPress={() => this.setState({ modalVisible: !this.state.modalVisible })} style={{ flex: 0.25 }} >
                                            <AntDesign name="calendar" size={25} />
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={{ flex: 0.48 }}>
                                    <Text style={styles.DobStyle}>GENDER*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{ color: "gray" }}
                                        containerStyle={{ borderRadius: 15, borderWidth: 1, borderColor: 'gray' }}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!this.state.isFocus ? 'Select item' : '...'}
                                        searchPlaceholder="Search..."
                                        value={this.state.value}
                                        // onFocus={() => setIsFocus(true)}
                                        // onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            this.setState({ value: item.value, focus: false })
                                        }}

                                    />
                                </View>
                            </View>

                            <Text style={styles.title}>FULL NAME*</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={this.onChangeText}
                                value={this.state.text}
                                placeholder='Enter Your Name'
                            />

                            <Text style={styles.title}> MOBILE NUMBER*</Text>
                            <View style={styles.countryView}>
                                <View style={{ flex: 0.2, alignItems: "center" }}>
                                    <CountryFlag isoCode={this.state.countryCode} size={22} />
                                </View>
                                <TouchableOpacity style={{ flex: 0.1 }} onPress={() => this.setState({ phone: true })}>
                                    <AntDesign name="caretdown" size={17} />
                                </TouchableOpacity>

                                <Text style={styles.dial}>{this.state.dial}</Text>
                                <View style={{ flex: 0.58 }}>
                                    <TextInput
                                        style={styles.countryInput}
                                        onChangeText={(text) => this.setState({ mobileNumber: text })}
                                        value={this.state.mobileNumber}
                                        maxLength={10}
                                    />
                                </View>


                            </View>


                            <View>
                                <CountryPicker
                                    show={this.state.phone}
                                    lang={'cz'}
                                    itemCountryNameStyle={{ color: 'red' }}
                                    style={{
                                        modal: {
                                            height: 400,
                                            // backgroundColor: 'red'
                                        },
                                        backdrop: {

                                        },
                                        // Styles for bottom input line [View]
                                        line: {

                                        },
                                        itemsList: {
                                            color: '#841584',
                                        },
                                        // Styles for input [TextInput]
                                        textInput: {
                                            height: 60,
                                            borderRadius: 0,
                                        },
                                        // Styles for country button [TouchableOpacity]
                                        countryButtonStyles: {
                                            height: 60,
                                            // color:"red"
                                        },
                                        // Styles for search message [Text]
                                        searchMessageText: {

                                        },
                                        // Styles for search message container [View]
                                        countryMessageContainer: {

                                        },
                                        // Flag styles [Text]
                                        flag: {
                                            fontSize: 24
                                        },
                                        // Dial code styles [Text]
                                        dialCode: {
                                            color: 'black'

                                        },
                                        // Country name styles [Text]
                                        countryName: {

                                            color: 'black'
                                        }
                                    }}
                                    pickerButtonOnPress={(item) => {
                                        console.log("iteeeee", item)
                                        this.setState({ phone: false, countryCode: item.code, dial: item.dial_code })
                                        // setCountryCode(item.dial_code);
                                        // setShow(false);
                                    }}
                                />

                            </View>

                            {/* <View >
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Your Mobile Number"
                                    value=""
                                />
                            </View> */}
                            <Text style={styles.title}>E-MAIL ADDRESS*</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email}
                                placeholder='Enter Your Email'
                            />



                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Checkbox
                                    uncheckedColor="#02C48D"
                                    status={this.state.checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        this.setState({ checked: !this.state.checked })
                                    }}
                                />
                                <Text style={styles.terms}>I agree to the T&C and privacy policy</Text>

                            </View>



                        </View>
                    </View>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={styles.otpButton} >
                        <LinearGradient
                            start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                            colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                            <Text style={styles.buttonText}>
                                Send OTP
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }

}
const styles = StyleSheet.create({
    // header: {
    //     flex: 0.9,
    // },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.6)"
    },
    dial: { fontSize: 18, fontWeight: '400', fontFamily: 'Poppins', flex: 0.18 },
    modalView: {
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 5,
    },
    countryInput: { fontSize: 18, color: 'black' },
    countryView: { flexDirection: "row", margin: 12, alignItems: "center", borderWidth: 1, borderColor: "#BABABA", borderRadius: 10 },
    model: { alignSelf: "flex-end", paddingRight: 20, paddingTop: 10 },
    linearGradient: {
        width: "100%",
        height: 90,
        justifyContent: "flex-end",
        paddingBottom: 15

    },
    otpButton: { marginTop: 80, paddingLeft: 5, paddingRight: 5, paddingBottom: 25 },
    genderText: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    linearGradient2: {
        borderRadius: 10,
        width: "94%",
        alignSelf: "center",
        padding: 8
    },
    textStyle: {
        fontFamily: fonts.fontFamily,
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: fonts.fontFamily,
        textAlign: 'center',
        margin: 6,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#BABABA",
        padding: 10,

    },
    selectList: {
        width: "95%",
        alignSelf: "center",
        paddingTop: 5,
        paddingBottom: 10
    },
    terms: {
        fontWeight: "400",
        // color: "#000000",
        fontSize: 13
    },
    DobStyle: {
        // color: "#000000",
        fontWeight: '500',
        fontSize: 12,
        paddingBottom: 5,
        paddingTop: 5
    },

    title: {
        paddingLeft: 10,
        paddingRight: 10,
        // color: "#000000",
        fontWeight: '500',
        fontSize: 12
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },

    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    }

});