import React from 'react';
import ReactNative, { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetails = props => {
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    )
}

export default AlbumDetails;