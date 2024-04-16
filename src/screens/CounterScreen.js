import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Button
                title="Increase"
                onPress={() => {
                    setCounter(counter + 1);
                    // console.log(counter)
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    setCounter(counter - 1);
                    // console.log(counter)
                }}
            />
            <Text style={styles.counterText}>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    counterText: {
        marginTop: 20, 
    }
});

export default CounterScreen;
