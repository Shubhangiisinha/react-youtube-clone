import React from "react";
import {Paper, Typography } from '@material-ui/core';

const VideoDetail = ({Video}) => {
    if (!Video) return <div> Loading...</div>

    console.log(Video.id.VideoId);

    const videoSrc = "https://www.youtube.com/embed/$(video.id.videoId)";
return (
    <React.Fragment>
        <Paper elevation = {6} style={{ height: '70%'}}>
            <iframe height="100%" width="100%" title = "Video Player " src={videoSrc}/>
        </Paper>
        <Paper elevation = {6} style= {{padding: '15px'}}>
            <Typography variant="h4"> {Video.snippet.title} - {Video.snippet.channelTitle}</Typography>
            <Typography variant = "subtitle1"> {Video.snippet.channelTitle} </Typography> 
            <Typography variant = "subtitle2"> {Video.snippet.description} </Typography>
        </Paper>
    </React.Fragment>
)

}

export default VideoDetail;