import React from "react";
import SmallCircleShim from "../../shimmers/navbar/SmallCircleShim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { formatCount, timeAgo } from "../../utils/utilityFun";
const VideoCardMetaComp = ({
  title,
  channelTitle,
  statistics,
  publishedAt,
}) => {


  return (
    <aside className="flex h-fit justify-between gap-2 pt-2 ">
      <SmallCircleShim children={channelTitle[0]} />
      <div className="relative size-full bg-purple-500">
        <span className="absolute w-full left-0">
          <h3 className="text-sm font-semibold">
            {title.length > 90 ? title.substring(0, 70) + "..." : title}
          </h3>
          <p className="text-xs text-gray-600">{channelTitle}</p>
          <p className="text-xs text-gray-600">
            <span>{formatCount(statistics?.viewCount) + " views - "}</span>
            <span>{timeAgo(publishedAt)}</span>
          </p>
        </span>
      </div>
      <div>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
    </aside>
  );
};

export default VideoCardMetaComp;
