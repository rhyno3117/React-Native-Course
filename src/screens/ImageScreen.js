import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                scoreForImage={9}
                imageSource={require('../../assets/forest.jpg')}
            />
            <ImageDetail
                title="Beach"
                scoreForImage={7}
                imageSource={require('../../assets/beach.jpg')}
            />
            <ImageDetail
                title="Mountain"
                scoreForImage={10}
                imageSource={require('../../assets/mountain.jpg')}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;