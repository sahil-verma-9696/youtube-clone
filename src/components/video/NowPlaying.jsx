import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const NowPlaying = () => {
  const { id: videoID } = useParams();
  const currentVideo = useSelector((store) => store.videos?.homeVideos)?.filter(
    (videos) => videos.id === videoID
  );
  console.log(currentVideo);
  return (
    <div className="w-full">
      <div className="w-[95%] h-[588px] bg-purple-200 mt-4 m-auto rounded-lg overflow-hidden">
        <iframe
          className="size-full object-cover"
          src={`https://www.youtube.com/embed/${videoID}?si=PTVik2RpAO1FdEVK`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default NowPlaying;
