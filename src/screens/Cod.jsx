import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Cod() {
    return (
        <View style={styles.container}>
            <Text>Cod</Text>
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


export default Cod;