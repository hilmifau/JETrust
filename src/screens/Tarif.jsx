import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../constants.js/color";
import { TextInput } from "react-native-paper";

function Tarif() {
    const [text, setText] = React.useState("");
    return (
        <View style={styles.container}>
            <View style={styles.section1}>
                <TextInput
                    label="Origin"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.input}
                />
                <TextInput
                    label="Destination"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.input}
                />
                <TextInput
                    label="Weight"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={[styles.input, { width: '30%' }]}
                />
                <Text>Dimensions</Text>
                <View style={styles.wrapperInput}>
                    <TextInput
                        label="Length"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={styles.inputRow}
                    />
                    <TextInput
                        label="Width"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={styles.inputRow}
                    />
                    <TextInput
                        label="Height"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={styles.inputRow}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.Surface
    },
    section1: {
        backgroundColor: Color.Background,
        padding: 15,
        marginVertical: 15,
        marginHorizontal: 15
    },
    input: {
        marginVertical: 10,
        fontSize: 12,
        backgroundColor: Color.Surface
    },
    inputRow: {
        marginVertical: 10,
        width: '30%',
        fontSize: 12,
        backgroundColor: Color.Surface
    },
    wrapperInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10
    }
});


export default Tarif;