// VideoCard.js
import React from "react";
import "./css_files/videocard.css";

const VideoCard = ({ title, videoSrc }) => {
  return (
    <div className="video-card">
      <video controls className="video-player">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>{title}</h3>
    </div>
  );
};

export default VideoCard;
