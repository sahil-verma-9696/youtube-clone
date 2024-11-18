import React from 'react'

const YouTubePlayer = ({videoID}) => {
  return (
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
  )
}

export default YouTubePlayer
