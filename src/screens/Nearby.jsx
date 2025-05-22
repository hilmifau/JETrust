import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from 'react-native-maps';

function Nearby() {
    return (
        <View style={styles.container}>
            <Text>Nearby</Text>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <Text>Nearby</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
});


export default Nearby;