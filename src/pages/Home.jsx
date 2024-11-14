import React from "react";
import { useFetchHomeVideos } from "../hooks/useFetchHomeVideos";
import { useSelector } from "react-redux";
import VideoCard from "../components/home/VideoCard";
const Home = () => {
  useFetchHomeVideos();
  const homeVideos = useSelector(store=>store.videos?.homeVideos)
  return (
    <div
      className="w-full h-[calc(100vh-62px)] p-2 gap-2 overflow-y-scroll  grid 
      sm:grid-cols-3 sm:grid-rows-[repeat(10,400px)] 
      "
    >
      {
        homeVideos?.map(data=><VideoCard key={data.id} data={data}/>)
      }
      
    </div>
  );
};

export default Home;
