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
} from 'react-native';
import { Text } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 0.45 }} onPress={() => this.props.navigation.goBack()}>
                        <AntDesign name="left" size={25}  />
                    </TouchableOpacity>
                    <Text style={styles.headerSet}>Settings</Text>
                </View>
                <View style={{ paddingLeft: 15, paddingTop: 10 }}>
                    <Text style={styles.banner}>Settings</Text>
                    <TouchableOpacity style={styles.containerView}>

                        <Ionicons name="notifications-outline" size={25} color="#95969D" style={{ flex: 0.12 }} />
                        <Text style={styles.list}>Notification</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerView}>

                        <MaterialIcons name="privacy-tip" size={25} color="#95969D" style={{ flex: 0.12 }} />
                        <Text style={styles.list}>Privacy Policy</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerView}>

                        <MaterialCommunityIcons name="checkbox-intermediate" size={25} color="#95969D" style={{ flex: 0.12 }} />

                        <Text style={styles.list}>Terms and Conditions</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerView}>

                        <Entypo name="help" size={25} color="#95969D" style={{ flex: 0.12 }} />
                        <Text style={styles.list}>Help Center</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerView}>
                        <MaterialIcons name="support" size={25} color="#95969D" style={{ flex: 0.12 }} />
                        <Text style={styles.list}>Support</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerView}>

                        <AntDesign name="questioncircleo" size={25} color="#95969D" style={{ flex: 0.12 }} />
                        <Text style={styles.list}>About</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerView}>

                        <AntDesign name="delete" size={25} color="#E30000" style={{ flex: 0.12 }} />
                        <Text style={styles.delete}>Delete</Text>

                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center"
    },
    headerSet: {
        fontWeight: '700',
        // color: '#0D0D26',
        fontSize: 16,
        flex: 0.65
    },
    banner: { fontWeight: '700', fontSize: 14, color: '#95969D' },
    containerView: { flexDirection: "row", alignItems: "center", marginTop: 20 },
    list: {
        fontWeight: '500',
        fontSize: 14,
        // color: '#0D0D26',
        flex: 0.83
    },
    delete: {
        fontWeight: '500',
        fontSize: 14,
        color: '#E30000',
        flex: 0.83
    }

})
