import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput, Platform, StatusBar } from "react-native";
import { width, height, totalSize } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from "../constants.js/color";
import Carousel from "react-native-reanimated-carousel";
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

const menuItems = [
    { icon: 'cube-outline', label: 'Cek Resi', name: 'Resi' },
    { icon: 'currency-usd', label: 'Cek Tarif', name: 'Tarif' },
    { icon: 'map-marker-radius', label: 'JETrust Nearby', name: 'Nearby' },
    { icon: 'briefcase-outline', label: 'My JOB', name: 'Job' },
    { icon: 'map-marker', label: 'My COD', name: 'Cod' },
    { icon: 'account', label: 'Wallet', name: 'Wallet' },
];
const data = [
    {
        name: 'Regular',
        description: 'Layanan pengiriman ke seluruh indonesian dengan waktu sampai sesuai estimasi',
        uri: ''
    },
    {
        name: 'YES',
        description: 'Layanan pengiriman dengan waktu sampai esok hari',
        uri: ''
    },
    {
        name: 'OKE',
        description: 'Layanan pengiriman dengan tarif ekonomis',
        uri: ''
    },
];

function HomeScreen() {
    const navigation = useNavigation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [text, setText] = React.useState('');

    const navigateFeatures = (name) => {
        navigation.navigate(name)
    }

    const navigateToHelp = () => {
        navigation.navigate('Help');
    }

    return (
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>

            <View style={styles.section1}>
                <View style={styles.wrapper}>
                    <View style={styles.searchBar}>
                        <Icon name="magnify" size={22} style={styles.icon} />
                        <TextInput
                            placeholder="Cari resi . . ."
                            placeholderTextColor="#000"
                            style={styles.input}
                        />
                        <TouchableOpacity>
                            <Icon name="barcode-scan" size={22} style={styles.iconRight} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.bellBox}>
                        <Icon name="bell-outline" size={22} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.section4}>
                <View style={styles.cardProfile}>
                    <View>
                        <Image
                            source={require('../assets/images/avatar.png')}
                            style={{
                                width: 50,
                                height: 50,
                                marginBottom: 10
                            }}
                        />
                        <Text style={{ fontSize : 14, fontWeight: 'bold'}}>Maharani Putri Hikam</Text>
                    </View>
                    <View style={styles.wrapperPoint}>
                        <View
                            style={styles.point}
                        >
                            <Icon name="medal" color={Color.PrimaryDark} size={25} />
                            <Text style={styles.text}><Text style={{ fontWeight: '900', fontSize: 14 }}>64</Text> Point</Text>
                        </View>
                        <View style={{ borderWidth: 0.8, borderColor: 'lightgrey' }} />
                        <View style={styles.point}>
                            <Icon name="vote" color={Color.PrimaryDark} size={25} />
                            <Text style={styles.text}><Text style={{ fontWeight: '900', fontSize: 14 }}>8</Text> Voucher</Text>
                        </View>
                    </View>

                </View>
            </View>

            <View style={styles.section2}>
                <Text style={styles.title}>Features</Text>
                <View style={styles.card}>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.cardMenu} onPress={() => { navigateFeatures(item.name) }}>
                                    <Icon name={item.icon} size={30} color={Color.PrimaryDark} />
                                    <Text style={styles.label}>{item.label}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>

            <View style={styles.section3}>
                <Text style={styles.title}>Jasa dan Produk</Text>
                <Carousel
                    width={width(100)}
                    height={250}
                    data={data}
                    loop={false}
                    onSnapToItem={index => setCurrentIndex(index)}
                    scrollAnimationDuration={500}
                    renderItem={({ index }) => (
                        <View style={styles.item}>
                            <Image source={require('../assets/images/truck.jpg')} style={{ width: '100%', height: '60%' }} />
                            <View style={{ paddingVertical: 20 }}>
                                <Text style={styles.textTitle}>{data[index].name}</Text>
                                <Text style={styles.text}>{data[index].description}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>

            <TouchableOpacity
                style={styles.section4}
                onPress={navigateToHelp}
            >
                <View style={styles.cardHelp}>
                    <View style={styles.avatarWrapper}>
                        <Image
                            source={require('../assets/images/avatar.png')}
                            resizeMode="cover"
                            style={styles.avatar}
                        />
                    </View>
                    <View style={{ marginRight: 20 }}>
                        <Text style={styles.textTitle}>Help Center</Text>
                        <Text style={styles.text}>Get help and support for all your question</Text>
                    </View>
                    <Icon name="chevron-right" size={25} style={styles.icon} />
                </View>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.Surface
    },
    section1: {
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
    },
    section2: {
        marginVertical: 15
    },
    section3: {
        marginVertical: 15
    },
    section4: {
        marginVertical: 15,
        marginHorizontal: 15
    },
    cardProfile: {
        backgroundColor: Color.Background,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrapperPoint: {
        backgroundColor: Color.Surface,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '80%',
        width: '50%',
        borderRadius: 10,
        padding: 10
    },
    point: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor: Color.Background,
    },
    cardMenu: {
        width: '25%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        paddingTop: 10,
        color: Color.TextPrimary,
        fontSize: 12
    },
    item: {
        flex: 1,
        backgroundColor: Color.Background,
        borderRadius: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginHorizontal: 15,
        padding: 10
    },
    textTitle: {
        fontSize: 16,
        color: Color.TextPrimary,
        paddingVertical: 5
    },
    text: {
        fontSize: 12,
        color: Color.TextSecondary,
    },
    title: {
        fontSize: 16,
        fontWeight: '800',
        color: Color.TextPrimary,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    wrapper: {
        paddingVertical: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Color.Surface,
        borderRadius: 12,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 10,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        color: '#000',
    },
    iconRight: {
        marginLeft: 8,
    },
    bellBox: {
        backgroundColor: Color.Surface,
        padding: 10,
        borderRadius: 12,
    },
    cardHelp: {
        backgroundColor: Color.Background,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10
    },
    avatarWrapper: {
        borderRadius: 50,
    },
    avatar: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginRight: 10
    }
});

export default HomeScreen;