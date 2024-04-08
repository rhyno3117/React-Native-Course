import React from 'react';
import { Text, StyleSheet } from 'react-native'; //These are Primitive React Elements

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is the components screen</Text>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
});

export default ComponentsScreen;