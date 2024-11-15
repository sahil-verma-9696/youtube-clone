import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NowPlaying from "../components/video/NowPlaying";
import Note from "../components/video/Note";
import Recommended from "../components/video/Recommended";

const Video = () => {
  const { id: videoID } = useParams();
  const currentVideo = useSelector((store) => store.videos?.homeVideos)?.filter(videos=>videos.id === videoID);
  console.log(currentVideo)
  return <div className="flex w-full">
    <NowPlaying/>
    <div className="w-64 bg-green-300">
      <Note/>
      <Recommended/>
    </div>
  </div>;
};

export default Video;
