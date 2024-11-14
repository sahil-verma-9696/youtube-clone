import React from "react";
import SmallCircleShim from "../../shimmers/navbar/SmallCircleShim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const VideoCardMetaComp = ({ title, channelTitle }) => {
  return (
    <aside className="flex h-fit">
      <SmallCircleShim />
      <span>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{channelTitle}</p>
      </span>
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </aside>
  );
};

export default VideoCardMetaComp;
