import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import YouTubePlayer from "./YouTubePlayer";
import { formatYouTubeDescription } from "../../utils/utilityFun";

const NowPlaying = () => {
  const { id: videoID } = useParams();
  const currentVideo = useSelector((store) => store.videos?.nowPlaying);
  const {
    snippet: { title, description },
  } = currentVideo;
  console.log(description)
  console.log(currentVideo);

  // Format the description safely
  const formattedDescription = formatYouTubeDescription(description);

  return (
    <div className="w-full">
      <YouTubePlayer videoID={videoID} />

      <div className="w-[95%] m-auto">
        <h2 className="font-semibold my-2">{title}</h2>
        <section>
          {/* Render formatted description */}
          <p className="bg-gray-100 p-2 rounded-lg">{formattedDescription}</p>
        </section>
      </div>
    </div>
  );
};

export default NowPlaying;
