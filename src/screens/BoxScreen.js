import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>BoxScreen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black'
    },
    textStyle:{
        borderWidth: 10,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        margin: 20,
    }
});

export default BoxScreen