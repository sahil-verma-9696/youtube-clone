import React from "react";
import VideoCardShim from "../../shimmers/Home/VideoCardShim";
import Thumbnail from "./Thumbnail";
import VideoCardMetaComp from "./VideoCardMetaComp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../../store/videoSlice";

const VideoCard = ({ data }) => {
  const dispatch = useDispatch();

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
    <div onClick={()=>{dispatch(addNowPlaying(data))}}
     className="rounded-lg h-[230px]  relative cursor-pointer">
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
