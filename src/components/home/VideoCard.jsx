import React from "react";
import VideoCardShim from "../../shimmers/Home/VideoCardShim";
import Thumbnail from "./Thumbnail";
import VideoCardMetaComp from "./VideoCardMetaComp";
import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
  // console.log(data);
  const {
    id,
    snippet: {
      channelTitle,
      thumbnails: {
        high: { url, width },
      },
      title,
      publishedAt,
    },
    statistics,
  } = data;
  if (!data) return <VideoCardShim />;
  return (
    <div className="rounded-lg h-[230px]  relative cursor-pointer">
      <Link to={`/video/${id}`} className={`h-[${230}px]`}>
        <Thumbnail url={url} alt={title} width={width} height={230} />
        <VideoCardMetaComp
          title={title}
          channelTitle={channelTitle}
          statistics={statistics}
          publishedAt={publishedAt}
        />
      </Link>
    </div>
  );
};

export default VideoCard;
