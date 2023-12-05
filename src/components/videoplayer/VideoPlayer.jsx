import React, { useRef } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <div className="video-content">
        <h2 style={{ padding: "15px", fontSize: "24px", font: "bold" }}>
          ვიდეოს აღწერა შეგვიძლია დავიტანოთ აქ
        </h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://oilproducts.s3.amazonaws.com/yt5s.io-UG+Lubricants-(1080p).mp4"
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}></div>
      </div>
    </>
  );
};

export default VideoPlayer;
