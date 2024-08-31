// VideoPage.js
import React from "react";
import { Link } from "react-router-dom";
import VideoData from "./videodata";
import VideoCard from "./videocard";
import "./css_files/videopage.css";
import mic from '../assets/images/mic.png';

const VideoPage = () => {
  return (
    <div className="video-page">
      <h1>ARTICLE 19: Right to Freedom</h1>
      <h3 classnmae="description">Description</h3>
      <p className="subdes">
        The Right To Freedom is a fundamental right guaranteed by the Indian
        Constitution. This right gives all citizens the liberty to live and work
        freely within the territory of India. The constitution also protects the
        rights of individuals against arbitrary state action. The Right To
        Freedom includes various freedoms such as the freedom of speech, freedom
        of expression, freedom of assembly, freedom of association, freedom of
        movement, and freedom to practice any profession or occupation.
      </p>
      <div className="buttons">
        <button className="read-more">Read more</button>
        <Link to="/quiz">
          <button className="take-quiz">Take Quiz</button>
        </Link>
        <div className="speech">
         <img src={mic} alt="" />
          
        </div>
      </div>
      <div className="video-grid">
        {VideoData.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            videoSrc={video.videoSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
