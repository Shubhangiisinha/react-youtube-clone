import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  // Check if 'videos' is undefined or not an array
  if (!Array.isArray(videos)) {
    // You can handle this case according to your requirements
    return null; // or return an error message or default content
  }

  // Map over 'videos' array and create VideoItem components
  const listOfVideos = videos.map((video, id) => (
    <Grid item key={id}>
      <VideoItem video={video} onVideoSelect={onVideoSelect} />
    </Grid>
  ));

  return <Grid container spacing={10}>{listOfVideos}</Grid>;
};

export default VideoList;


 
