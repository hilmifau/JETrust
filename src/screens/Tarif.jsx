import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Tarif() {
    return (
        <View style={styles.container}>
            <Text>Tarif</Text>
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


export default Tarif;