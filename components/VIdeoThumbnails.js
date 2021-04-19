import React from "react";
import VideoThumbnail from "./VideoThumbnail";


const VideoThumbnails = ({videos, onChange}) => {
  return (
    <ul className="video-thumbnails">
      {videos.map((video, index) => (
        <VideoThumbnail key={video.id} video={video} onClick={() => onChange(index)} />
      ))}
    </ul>
  )
}

export default VideoThumbnails;