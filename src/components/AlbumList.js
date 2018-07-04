import React, { Component } from 'react';
import ReactNative, { View } from 'react-native';
import axios from 'axios';

import AlbumDetails from './AlbumDetails';

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
        return this.state.albums.map(album => <AlbumDetails key={album.title} album={album} />)
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