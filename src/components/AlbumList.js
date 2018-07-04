import React, { Component } from 'react';
import ReactNative, { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    constructor(props){
        super(props);

        this.state = {
            albums: []
        }
    }

    componentWillMount = e => {
        axios
        .get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((res) => {
            this.setState({albums: res.data})
        })
        .catch((err) => console.log(err))
        console.log(this.state.albums)
    }

    renderAlbums() {
        return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>)
    }

    render(){
        console.log(this.state.albums);

        return(
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList;