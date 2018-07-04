import React from 'react';
import { Text, View } from 'react-native';

const CardSection = props => {
    return (
        <View style={styles.viewContainerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    viewContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
    }
}

export default CardSection;