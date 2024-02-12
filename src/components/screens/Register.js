import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import *as fonts from '../../fonts/fonts';
import { Dropdown } from 'react-native-element-dropdown';

import { RadioButton,Text } from 'react-native-paper';



export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: ["Egypt", "Canada", "Australia", "Ireland"],
            text: "",
            email: "",
            checked: 'first',
            selected: '',
            isFocus: false,
            value: null,
            data: [
                { label: 'Item 1', value: '1' },
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

    onChangeText = (text) => {
        this.setState({ text: text })
    }
    displayDatepicker = () => {

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                    colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                    <View style={{ flexDirection: "row", paddingLeft: 15 }}>
                        <TouchableOpacity style={{ flex: 0.45 }} onPress={() => this.props.navigation.goBack()}>
                            <AntDesign name="left" size={25} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>Registration</Text>
                    </View>
                </LinearGradient>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View style={{ padding: 10 }} >
                            <Text style={[styles.title, { marginTop: 8, paddingBottom: 5 }]}>MARITAL STATUS*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{color:"black"}}
                                    containerStyle={{ borderRadius: 15, borderWidth: 1, borderColor: 'gray' }}
                                    // search
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

                            <View style={styles.genderText}>

                                <View style={{ flex: 0.48 }}>
                                    <Text style={styles.DobStyle}>CASTE*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{color:"black"}}
                                        containerStyle={{ borderRadius: 15, borderWidth: 1, borderColor: 'gray' }}

                                        // search
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

                                <View style={{ flex: 0.48 }}>
                                    <Text style={styles.DobStyle}>SUB CASTE*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{color:"black"}}
                                        containerStyle={{ borderRadius: 15, borderWidth: 1, borderColor: 'gray' }}

                                        // search
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
                            <Text style={[styles.title, { marginTop: 8, paddingBottom: 5 }]}>RELEGION*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{color:"black"}}
                                    containerStyle={{ borderRadius: 15, borderWidth: 1, borderColor: 'gray' }}

                                    // search
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

                            <Text style={[styles.title, { marginTop: 8, paddingBottom: 5 }]}>DOSHAM(optional)*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{color:"black"}}
                                    containerStyle={{ borderRadius: 15, borderWidth: 1, borderColor: 'gray' }}

                                    // search
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


                            <View style={styles.marryCommunities}>
                                <Text style={[styles.terms, { flex: 0.5, marginTop: 5, marginBottom: 5 }]}>Willing to marry from other communities</Text>
                                <View style={styles.Radio}>
                                    <RadioButton
                                        value="first"
                                        status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
                                        onPress={() => this.setState({ checked: 'first' })}
                                    />
                                    <Text style={styles.terms}>Yes</Text>
                                    <RadioButton
                                        value="second"
                                        status={this.state.checked === 'second' ? 'checked' : 'unchecked'}
                                        onPress={() => this.setState({ checked: 'second' })}
                                    />
                                    <Text style={styles.terms}>No</Text>
                                </View>
                            </View>
                            <Text style={[styles.title, { marginTop: 8, paddingBottom: 5 }]}>COUNTRY LIVING IN*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{color:"black"}}
                                    containerStyle={{ borderRadius: 15, borderWidth: 1, borderColor: 'gray' }}

                                    // search
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
                            <View style={styles.genderText}>

                                <View style={{ flex: 0.48 }}>
                                    <Text style={styles.DobStyle}>STATE LIVING IN*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{color:"black"}}
                                        containerStyle={{ borderRadius: 15, borderWidth: 1, borderColor: 'gray' }}

                                        // search
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

                                <View style={{ flex: 0.48 }}>
                                    <Text style={styles.DobStyle}>COUNTRY LIVING IN*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{color:"black"}}
                                        containerStyle={{ borderRadius: 15, borderWidth: 1, borderColor: 'gray' }}

                                        // search
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
                        </View>
                    </View>
                    <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('RegisterContinue')} >
                        <LinearGradient
                            start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                            colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                            <Text style={styles.buttonText}>
                                NEXT
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        )
    }

}
const styles = StyleSheet.create({
    header: {
        flex: 0.9,
    },
    linearGradient: {
        width: "100%",
        height: 90,
        justifyContent: "flex-end",
        paddingBottom: 15

    },
    caste: {
        fontWeight: 500,
        fontSize: 14,

    },
    genderText: {
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
        borderColor: "#BABABA",

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
        paddingBottom: 10,
        paddingTop: 5
    },

    title: {
        paddingLeft: 10,
        paddingRight: 10,
        // color: "#000000",
        fontWeight: '500',
        fontSize: 12
    },
    marryCommunities: {
        flexDirection: "row",
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "space-between"
    },
    Radio: {
        flexDirection: "row",
        alignItems: "center",
        flex: 0.4,
        justifyContent: "space-between"
    },
    nextButton: {
        marginTop: 8,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 25
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