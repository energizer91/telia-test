import React from "react";

const VideoPlayer = ({source}) => (
  <video className="video" src={source} controls={true} autoPlay={true}/>
);

export default VideoPlayer;
