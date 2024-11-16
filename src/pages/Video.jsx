import React from "react";
import NowPlaying from "../components/video/NowPlaying";
import Note from "../components/video/Note";
import Recommended from "../components/video/Recommended";

const Video = () => {
  
  return <div className="flex h-[calc(100vh-62px)] w-full ">
    <NowPlaying/>
    <div className="w-2/5 h-full flex flex-col">
      <Note/>
      <Recommended/>
    </div>
  </div>;
};

export default Video;
