import React, { Component } from "react";
import { DarkTheme } from '@react-navigation/native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
    TouchableOpacity,
    Dimensions,
    Appearance

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';
import *as fonts from '../../fonts/fonts';
import { Divider, Text } from "react-native-paper";


export default class AdvancedSerach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: ["Egypt", "Canada", "Australia", "Ireland"],
            selectedTab: 0,
            isFocus: false,
            value: null,
            dark: Appearance.getColorScheme(),
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
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <ScrollView>
                    <View style={styles.header}>
                        <View style={[styles.container, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white' }]} >
                            <Text style={styles.heading}>Basic Details</Text>
                            <Divider height={2} style={{ margin: 10 }} />

                            <Text style={[styles.title, { marginTop: 10, paddingBottom: 5 }]}>I AM LOOKING FOR*</Text>
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
                                    itemTextStyle={{ color: "black" }}
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

                                <View style={styles.flex}>
                                    <Text style={styles.DobStyle}>HEIGHT FROM*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{ color: "black" }}
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

                                <View style={styles.flex}>
                                    <Text style={styles.DobStyle}>HEIGHT TO*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{ color: "black" }}
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
                            <View style={styles.genderText}>

                                <View style={styles.flex}>
                                    <Text style={styles.DobStyle}>AGE FROM(YRS)*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{ color: "black" }}
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

                                <View style={styles.flex}>
                                    <Text style={styles.DobStyle}>AGE TO(YRS)*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{ color: "black" }}
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

                            <Text style={[styles.title, { marginTop: 10, paddingBottom: 5 }]}>MARITAL STATUS*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{ color: "black" }}
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

                                <View style={styles.flex}>
                                    <Text style={styles.DobStyle}>RELIGION*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{ color: "black" }}
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

                                <View style={styles.flex}>
                                    <Text style={styles.DobStyle}>CASTE*</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={this.state.data}
                                        itemTextStyle={{ color: "black" }}
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

                        <View style={[styles.container, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white', marginTop: 10 }]} >
                            <Text style={styles.heading}>Education & Occupation</Text>
                            <Divider height={2} style={{ margin: 10 }} />

                            <Text style={[styles.title, { marginTop: 10, paddingBottom: 5 }]}>EDUCATION CATEGORY*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{ color: "black" }}
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


                            <Text style={[styles.title, { marginTop: 10, paddingBottom: 5 }]}>EMPLOYED IN*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{ color: "black" }}
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

                            <Text style={[styles.title, { marginTop: 10, paddingBottom: 5 }]}>JOB CATEGORY*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{ color: "black" }}
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

                        <View style={[styles.container, { backgroundColor: this.state.dark === 'dark' ? DarkTheme : 'white', marginTop: 10 }]} >
                            <Text style={styles.heading}>Location</Text>
                            <Divider height={2} style={{ margin: 10 }} />

                            <Text style={[styles.title, { marginTop: 10, paddingBottom: 5 }]}>COUNTRY*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{ color: "black" }}
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


                            <Text style={[styles.title, { marginTop: 10, paddingBottom: 5 }]}>STATE*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{ color: "black" }}
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

                            <Text style={[styles.title, { marginTop: 10, paddingBottom: 5 }]}>DISTRICT*</Text>
                            <View style={styles.selectList}
                            >
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={this.state.data}
                                    itemTextStyle={{ color: "black" }}
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

                        <TouchableOpacity style={{ margin: 25 }} onPress={() => this.props.navigation.navigate('BasicDetails')}>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                                <Text style={styles.buttonText}>
                                    Search
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>


                </ScrollView>

            </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        width: "100%",
        height: 90,
        justifyContent: "flex-end",
        paddingBottom: 15

    },
    flex: { flex: 0.48 },
    genderText: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        paddingLeft: 10,
        paddingRight: 10,
        // color: "#000000",
        fontWeight: '500',
        fontSize: 12
    },
    selectList: {
        width: "95%",
        alignSelf: "center",
        paddingTop: 5,
        paddingBottom: 10
    },
    DobStyle: {
        // color: "#000000",
        fontWeight: '500',
        fontSize: 12,
        paddingBottom: 10,
        paddingTop: 5
    },
    container: { padding: 15 },
    header: { paddingTop: 20 },
    linearGradient2: {
        borderRadius: 10,
        padding: 8
    },
    heading: { fontSize: 14, fontWeight: '700', color: '#2BB673', paddingLeft: 10 },
    buttonText: {
        fontSize: 18,
        fontFamily: fonts.fontFamily,
        textAlign: 'center',
        margin: 6,
        color: '#ffffff',
        backgroundColor: 'transparent',
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
})