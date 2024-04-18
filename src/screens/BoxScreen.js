import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'center',
        // alignItems: 'flex-end',
        alignItems: 'flex-start'
    },
    textStyle:{
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin: 20,
    }
});

export default BoxScreen