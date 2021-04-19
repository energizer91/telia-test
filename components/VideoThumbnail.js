import React from "react";

const getDescriptionPosition = (d, e) => {
  const scrollPosition = [window.scrollX, window.scrollY];
  const mousePosition = [scrollPosition[0] + e.clientX, scrollPosition[1] + e.clientY];
  const descriptionSize = [d.clientWidth, d.clientHeight];
  const windowSize = [scrollPosition[0] + window.innerWidth, scrollPosition[1] + window.innerHeight];
  const result = [mousePosition[0] + 5, mousePosition[1] + 5];

  if (result[0] + descriptionSize[0] > windowSize[0]) {
    result[0] = windowSize[0] - descriptionSize[0];
  }

  if (result[1] + descriptionSize[1] > windowSize[1]) {
    result[1] = windowSize[1] - descriptionSize[1];
  }

  return result;
}

const setDescriptionPosition = (d, e) => {
  const [x, y] = getDescriptionPosition(d, e);

  d.style.left = x + "px";
  d.style.top = y + "px";
}

const elementEnter = (t, d) => e => {
  e.currentTarget.classList.add("video-thumbnail_hover");
  setDescriptionPosition(d, e);
}

const elementMove = (t, d) => e => {
  setDescriptionPosition(d, e);
}

const elementLeave = (t, d) => e => {
  console.log(t, d, e);
  e.currentTarget.classList.remove("video-thumbnail_hover");
}

const VideoThumbnail = ({video, onClick}) => {
  const thumbnailRef = React.useRef(null);
  const descriptionRef = React.useRef(null);

  React.useEffect(() => {
    if (!thumbnailRef.current) {
      return;
    }

    if (!descriptionRef.current) {
      return;
    }

    const onElementEnter = elementEnter(thumbnailRef.current, descriptionRef.current);
    const onElementMove = elementMove(thumbnailRef.current, descriptionRef.current);
    const onElementLeave = elementLeave(thumbnailRef.current, descriptionRef.current);

    thumbnailRef.current.addEventListener("mouseenter", onElementEnter);
    thumbnailRef.current.addEventListener("mousemove", onElementMove);
    thumbnailRef.current.addEventListener("mouseleave", onElementLeave);

    return () => {
      if (!thumbnailRef.current) {
        return;
      }

      if (!descriptionRef.current) {
        return;
      }

      thumbnailRef.current.removeEventListener("mouseenter", onElementEnter);
      thumbnailRef.current.removeEventListener("mousemove", onElementMove);
      thumbnailRef.current.removeEventListener("mouseleave", onElementLeave);
    }
  }, [thumbnailRef, descriptionRef]);

  return (
    <li className="video-thumbnail" onClick={onClick} ref={thumbnailRef}>
      <img className="video-thumbnail__image" src={video.image} alt={video.name}/>
      <p className="video-thumbnail__name">{video.name}</p>
      <p className="video-thumbnail__description" ref={descriptionRef}>{video.description}</p>
    </li>
  )
}

export default VideoThumbnail;