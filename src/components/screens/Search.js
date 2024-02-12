import React, { Component } from "react";
import {DarkTheme } from '@react-navigation/native';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Appearance

} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
import LinearGradient from 'react-native-linear-gradient';
import *as fonts from '../../fonts/fonts';
import AdvancedSerach from "./AdvancedSearch";
import { Dropdown } from 'react-native-element-dropdown';




export default class Serach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: ["Egypt", "Canada", "Australia", "Ireland"],
            selectedTab: 0,
            isFocus: false,
            value: null,
            dark:Appearance.getColorScheme(),
            data: [
                { label: 'Item 1', value: '1' },
                { label: 'Item 2', value: '2' },
                { label: 'Item 3', value: '3' },
                { label: 'Item 4', value: '4' },
                { label: 'Item 5', value: '5' },

            ]
        }
    }


    render() {


        console.log("scheme",this.state.dark)

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                    colors={['#2BB673', '#00425E']} style={styles.linearGradient}>
                    <View style={{ marginBottom: -16 }}>
                        <MaterialTabs
                            items={['Regular Search', 'Advanced Search', 'Id Search',]}
                            selectedIndex={this.state.selectedTab}
                            onChange={(index) => this.setState({ selectedTab: index })}
                            barColor='transparent'
                            scrollable
                            // textStyle={{marginLeft:-50}}
                            indicatorStyle={{ borderRadius: 10 }}
                            indicatorHeight={5}
                            uppercase={false}
                            allowFontScaling={false}
                            // indicatorColor="#fffe94"
                            activeTextColor="white"
                        />
                    </View>

                </LinearGradient>

                {this.state.selectedTab === 0 ?
                    <View style={styles.header}>
                        <View style={[styles.container,{backgroundColor:this.state.dark === 'dark' ? DarkTheme :'white'}]} >
                            <Text style={[styles.title, { marginTop: 8, paddingBottom: 5 }]}>I AM LOOKING FOR*</Text>
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

                                <View style={styles.flex}>
                                    <Text style={styles.DobStyle}>RELIGION*</Text>
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

                                <View style={styles.flex}>
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

                                <View style={styles.flex}>
                                    <Text style={styles.DobStyle}>HEIGHT TO*</Text>
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

                                <View style={styles.flex}>
                                    <Text style={styles.DobStyle}>AGE TO(YRS)*</Text>
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

                    : <>{this.state.selectedTab === 1 ? <AdvancedSerach /> :
                        <View>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({ text: text })}
                                value={this.state.text}
                                placeholder="Ex:5633633"
                            />

                            <TouchableOpacity style={styles.idContainer} onPress={() => this.props.navigation.navigate('BasicDetails')}>
                                <LinearGradient
                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                    colors={['#2BB673', '#00425E']} style={styles.linearGradient2}>
                                    <Text style={styles.buttonText}>
                                        Search
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                    }</>}


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
    idContainer: { marginLeft: 20, marginRight: 20, marginTop: 5 },
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
    container: {  padding: 15 },
    header: { paddingTop: 20 },
    linearGradient2: {
        borderRadius: 10,
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
    input: {
        margin: 20,
        borderWidth: 1,
        padding: 10,
        borderColor: '#25327447',
        borderRadius: 5
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