import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, scoreForImage }) => {
    // console.log(props);
    return <View>
        <Image source={imageSource} />
        <Text>{title}</Text>
        <Text>Image Score - {scoreForImage}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;