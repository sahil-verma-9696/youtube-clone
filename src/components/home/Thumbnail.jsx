import React from "react";
import { useInView } from "react-intersection-observer";

const Thumbnail = ({ url, alt, width, height }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`Thumbnail-wrapper w-[${width}px] h-[${height}px] rounded-lg overflow-hidden`}
    >
      {inView ? (
        <img
          className={`object-cover w-full h-[${height}px]`}
          src={url}
          alt={alt}
          loading="lazy" // Native lazy loading
        />
      ) : (
        <div className="bg-gray-200 w-full h-full" />
      )}
    </div>
  );
};

export default Thumbnail;
