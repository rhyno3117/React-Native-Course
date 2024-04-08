import React from 'react';
import { Text, StyleSheet, View } from 'react-native'; //These are Primitive React Elements

const ComponentsScreen = () => {
    const greeting = 'Hi there!';


    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text>{greeting}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
});

export default ComponentsScreen;