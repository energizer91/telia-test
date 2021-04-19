import React from "react";

/**
 * Borders to set some boundaries to description
 * @type {number[]}
 */
const borders = [20, 20];

/**
 * Get scroll and description position and set it accordingly so it will position properly without going outside screen
 * @param {HTMLElement} d Description HTML element
 * @param {React.MouseEvent} e Mouse over event
 */
const setDescriptionPosition = (d, e) => {
  const scrollPosition = [window.scrollX, window.scrollY];
  const mousePosition = [scrollPosition[0] + e.clientX, scrollPosition[1] + e.clientY];
  const descriptionSize = [d.clientWidth, d.clientHeight];
  const windowSize = [scrollPosition[0] + window.innerWidth - borders[0], scrollPosition[1] + window.innerHeight - borders[1]];
  const result = [mousePosition[0] + 5, mousePosition[1] + 5];

  if (result[0] + descriptionSize[0] > windowSize[0]) {
    result[0] = windowSize[0] - descriptionSize[0];
  }

  if (result[1] + descriptionSize[1] > windowSize[1]) {
    result[1] = windowSize[1] - descriptionSize[1];
  }

  d.style.transform = `translate(${result[0]}px, ${result[1]}px)`;
}

/**
 * @callback onClickCallback
 * @param {number} index Selected video index
 */

/**
 * VideoThumbnail React component
 * @param props
 * @param {Video} props.video Video
 * @param {onClickCallback} props.onClick Click handler to change video
 */
const VideoThumbnail = ({video, onClick}) => {
  const thumbnailRef = React.useRef(null);
  const descriptionRef = React.useRef(null);

  React.useEffect(() => {
    const elementEnter = e => {
      e.currentTarget.classList.add("video-thumbnail_hover");
    }

    const elementMove = e => {
      setDescriptionPosition(descriptionRef.current, e);
    }

    const elementLeave = e => {
      e.currentTarget.classList.remove("video-thumbnail_hover");
    }

    thumbnailRef.current.addEventListener("mouseenter", elementEnter);
    thumbnailRef.current.addEventListener("mousemove", elementMove);
    thumbnailRef.current.addEventListener("mouseleave", elementLeave);

    return () => {
      // It's not really necessary, but definitely a good way to clean handlers you've set
      thumbnailRef.current.removeEventListener("mouseenter", elementEnter);
      thumbnailRef.current.removeEventListener("mousemove", elementMove);
      thumbnailRef.current.removeEventListener("mouseleave", elementLeave);
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
