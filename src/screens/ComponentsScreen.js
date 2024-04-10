import React from 'react';
import { Text, StyleSheet, View } from 'react-native'; //These are Primitive React Elements

const ComponentsScreen = () => {
    const name = 'Ryan'

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;