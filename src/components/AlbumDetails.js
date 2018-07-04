import React from 'react';
import ReactNative, { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from "./Button";

const AlbumDetails = ({ album }) => {
    const { 
        title, 
        artist, 
        thumbnail_image ,
        image,
    } = album;

    const { 
        thumbnailStyles, 
        textViewStyles, 
        thumbnailContainerStyles,
        headerTextStyles,
        albumCoverStyle,
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyles}>
                    <Image style={thumbnailStyles} source={{ uri: thumbnail_image }}/>
                </View>
                <View style={textViewStyles}>
                    <Text style={headerTextStyles}>{title}</Text>
                    <Text>{artist}</Text>
                </View>                
            </CardSection>

            <CardSection>
                <Image style={albumCoverStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button />
            </CardSection>
        </Card>
    )
}

const styles = {
    thumbnailStyles: {
        height: 50,
        width: 50,
    },
    textViewStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyles: {
        fontSize: 18,
    }, 
    thumbnailContainerStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    albumCoverStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
}

export default AlbumDetails;