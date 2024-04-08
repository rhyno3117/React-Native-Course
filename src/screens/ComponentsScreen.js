import React from 'react';
import { Text, StyleSheet, View } from 'react-native'; //These are Primitive React Elements

const ComponentsScreen = () => {
    const greeting = 'Hi there!';
    const greeting2 = <Text>Another way to show Hi there!</Text>


    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text>{greeting}</Text>
            {greeting2}
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
});

export default ComponentsScreen;