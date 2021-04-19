import React from "react";

const VideoPlayer = ({source}) => {
  return <video className="video" src={source} controls={true} autoPlay={true}/>;
}

export default VideoPlayer;