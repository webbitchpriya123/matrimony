import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    useColorScheme,
    PermissionsAndroid,
    View,
    Image,
    TouchableOpacity,

} from 'react-native';
import {Text} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import *as fonts from '../../fonts/fonts';
import *as colors from '../../colors/colors';
import ImagePicker from 'react-native-image-crop-picker';




export default class UploadPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: ["Egypt", "Canada", "Australia", "Ireland"],
            text: "",
            image: ''
        }
    }

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    openImagePicker = () => {
        ImagePicker.openPicker({
            width: 200,
            height: 200,
            cropping: true
        }).then(image => {
            console.log("gallary", image);
            this.setState({ image: image.path })

        });
    };
    handleCameraLaunch = () => {
        // this.requestCameraPermission();
        ImagePicker.openCamera({
            width: 200,
            height: 200,
            cropping: true,
        }).then(image => {
            console.log("camera", image);
            this.setState({ image: image.path })

        });
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
                        <Text style={styles.textStyle}>Add Photo</Text>
                    </View>
                </LinearGradient>
                {/* <ScrollView > */}
                <View style={styles.header}>
                    <Text style={styles.title}>Get 3x more responses by adding photos to your profile</Text>
                    <TouchableOpacity onPress={() => this.openImagePicker()} style={styles.uploadCamera}>
                        {this.state.image ?
                            <Image source={{ uri: this.state.image }} style={styles.imageStyle} /> :
                            <Feather name="camera" size={120} style={styles.cameraIcon} />}

                    </TouchableOpacity>
                </View>
                <View style={styles.flex}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this.openImagePicker()} style={styles.linearGradient2}>
                            <MaterialIcons name="upload-file" size={30} style={{ color: colors.green, marginLeft: 10 }} />
                            <Text style={styles.buttonText}>
                                Upload
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.divider}>
                        </View>
                        <TouchableOpacity onPress={() => this.handleCameraLaunch()} style={styles.imageView}>
                            <Feather name="camera" size={23} style={{ marginRight: 3, color: colors.green, marginLeft: 10 }} />
                            <Text style={styles.photoButton}>
                                Take Photo
                            </Text>
                        </TouchableOpacity>
                    </View>
                  
                    {this.state.image ?

                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('Home')}>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.25 }}
                                colors={['#2BB673', '#00425E']} style={styles.linearGradient5}>
                                <Text style={styles.done}>
                                    Done
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                  
            : null} 
                </View>

                <TouchableOpacity style={styles.later} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.doneText}>I'll do this later</Text>
                    <AntDesign name="right" size={20} color="#A6A6A6" style={{ marginLeft: 10 }} />
                    <AntDesign name="right" size={20} color="#A6A6A6" style={{ marginLeft: -7 }} />

                </TouchableOpacity>

                {/* </ScrollView> */}
            </SafeAreaView>
        )
    }

}
const styles = StyleSheet.create({
    header: {
        flex: 0.6,
    },

    linearGradient5: {
        borderRadius: 10,
        width: "94%",
        alignSelf: "center",
        padding: 8
    },
    done: {
        fontSize: 18,
        textAlign: 'center',
        margin: 6,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },

   
    later: { alignSelf: "center", flexDirection: "row" },
    flex: { flex: 0.35 },
    linearGradient: {
        width: "100%",
        height: 90,
        justifyContent: "flex-end",
        paddingBottom: 15

    },
    divider: { height: 50, borderWidth: 0.8, borderColor: "#B9B9B9", borderStyle: 'dashed' },

    linearGradient2: {
        width: "40%",
        padding: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    linearGradient3: {
        borderRadius: 30,
        alignSelf: "center",
        padding: 2,

    },
    textStyle: {
        fontFamily: fonts.fontFamily,
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,

    },
    photoButton: {
        fontSize: 18,
        fontFamily: fonts.fontFamily,
        textAlign: 'center',
        margin: 6,
        color: colors.green,
    },
    imageView: {
        borderRadius: 30,
        flexDirection: "row",
        padding: 5,
        width: "40%",
        alignItems: "center",

    },
    buttonText: {
        fontSize: 18,
        fontFamily: fonts.fontFamily,
        textAlign: 'center',
        margin: 6,
        color: colors.green,
        backgroundColor: 'transparent',
    },
    uploadCamera: {
        height: 220,
        marginTop: 30,
        borderRadius: 15,
        marginBottom: 30,
        borderWidth: 1,
        padding: 10,
        width: 220,
        alignSelf: "center",
        borderColor: "#B9B9B9",
        borderStyle: 'dashed'
    },
    imageStyle: {
        height: 200,
        width: 200,
        alignSelf: "center",
        borderRadius: 15,
    },

    title: {
        paddingLeft: 15,
        paddingRight: 15,
        lineHeight: 28,
        // color: "#000000",
        fontWeight: '500',
        fontSize: 20,
        textAlign: "center",
        marginTop: 20
    },

    nextButton: {
        marginTop: 15,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
        alignSelf: "center"

    },
    cameraIcon: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 33,
        color: "#787878"
    },
    container: {
        flexDirection: "row", borderWidth: 1, borderColor: "#B9B9B9",
        borderStyle: 'dashed', borderRadius: 30, alignSelf: "center", paddingLeft: 10, paddingRight: 10
    }

});