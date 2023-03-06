import React from "react";

import Video from "./components/Video/Video";

import Logo from "./img/icon.png";

import videos from "./contents";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <center>
        <div className="logo">
          <img alt="logo" src={Logo} className="insta-logo" />
        </div>
        <h3>Reel</h3>
        {/*  */}

        <div className="video-container" id="video-container">
          {/*  */}
          {videos.map((ele) => (
            <Video
              key={ele.id}
              channel={ele.channel}
              song={ele.title}
              url={ele.sources}
              likes={ele.likes}
              comment={ele.comment}
              shares={ele.shares}
            />
          ))}

          {/*  */}
        </div>
      </center>
    </div>
  );
}
