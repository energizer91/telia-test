import React from "react";
import VideoThumbnail from './VideoThumbnail';

const dataUrl = "https://gist.githubusercontent.com/mohammedhammoud/cf7aca4c87462cd061d4f2b1184392a8/raw/ea14389e293b478bdbace627d776ba6f7d735f14/teliatestdata.json";

const MainApp = () => {
  const [videos, setVideos] = React.useState([]);
  const [selected, setSelected] = React.useState(-1);
  const showSelected = Boolean(selected >= 0 && videos[selected] && videos[selected].video);

  React.useEffect(() => {
    fetch(dataUrl)
      .then(res => res.json())
      .then(setVideos);
  }, [dataUrl]);

  return (
    <main>
      {showSelected && <video className="video" src={videos[selected].video} controls={true} autoPlay={true}/>}
      {Boolean(videos.length) && (
        <ul className="video-thumbnails">
          {videos.map((video, index) => (
            <VideoThumbnail key={video.id} video={video} onClick={() => setSelected(index)} />
          ))}
        </ul>
      )}
    </main>
  );
}

export default MainApp;
