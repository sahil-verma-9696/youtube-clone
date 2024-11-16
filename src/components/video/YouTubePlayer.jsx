import React, { useEffect, useRef } from 'react';

const YouTubePlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    // 1. Load the YouTube IFrame Player API asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 2. Define the API ready function
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('player', {
        
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
          playsinline: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    // 3. Define event handlers
    const onPlayerReady = (event) => {
      event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING && !done.current) {
        setTimeout(stopVideo, 6000);
        done.current = true;
      }
    };

    const stopVideo = () => {
      playerRef.current.stopVideo();
    };

    const done = { current: false };

    // Cleanup function to remove event handlers and script if needed
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  return <div id="player"></div>;
};

export default YouTubePlayer;
