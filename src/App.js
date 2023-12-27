import React from 'react';

import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import { VideoDetail, SearchBar, VideoList } from './components';

//import  VideoList from './components/VideoList';

// import  {VideoDetail} from './components/VideoDetail';


class App extends React.Component {
    state = { 
        video: [],
        selectedVideo: null,
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo:video});

    }
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
        params: {
            part: 'snippet',
            maxResults: 5,
            key : 'AIzaSyCkIHVxt8AEn85UQhkxEHsdXAH4WT1s98I',
            q: searchTerm,
        }


    });



        this.setState ({ videos: response.data.items, selectedVideo:response.data.items[0]});
    }
    render () {
        const {selectedVideo, videos} = this.state;
        return (
            <Grid justifyContent = "center"  container spacing = {10}> 
            <Grid item xs = {11}>
                <Grid container spacing={10}>
                    <Grid item xs = {12}> 
                    <SearchBar onFormSubmit= {this.handleSubmit}/>
                    </Grid>
                    <Grid item xs = {8}>
                        <VideoDetail/>
                    </Grid>
                    <Grid item xs = {4}>
                    <VideoList videos = {videos} onVideoSelect={this.onVideoSelect}/>
                    </Grid>
                </Grid>
            </Grid>
            </Grid >
        )
    }

}

export default App;