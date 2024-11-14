import React from "react";
import VideoCardShim from "../../shimmers/Home/VideoCardShim";
import Thumbnail from "./Thumbnail";
import VideoCardMetaComp from "./VideoCardMetaComp";

const VideoCard = ({ data }) => {
  console.log(data);
  const {
    snippet: {
      channelTitle,
      thumbnails: {
        high: { url, width },
      },
      title,
    },
  } = data;

  if (!data) return <VideoCardShim />;
  return (
    <div className="rounded-lg min-h-40 bg-red-200 relative">
      <Thumbnail url={url} alt={title} width={width} height={230} />
      <VideoCardMetaComp title={title} channelTitle={channelTitle}/>
    </div>
  );
};

export default VideoCard;
