import React from "react";
import SmallCircleShim from "../../shimmers/navbar/SmallCircleShim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const VideoCardMetaComp = ({ title, channelTitle, statistics,publishedAt }) => {
  function formatCount(count) {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count.toString();
  }
  function timeAgo(date) {
    const now = new Date();
    const publishedDate = new Date(date);
    const seconds = Math.floor((now - publishedDate) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };

    for (const [key, value] of Object.entries(intervals)) {
      const count = Math.floor(seconds / value);
      if (count > 0) {
        return `${count} ${key}${count > 1 ? "s" : ""} ago`;
      }
    }
    return "just now";
  }

  return (
    <aside className="flex h-fit justify-between gap-2 mt-2 ">
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
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </aside>
  );
};

export default VideoCardMetaComp;
