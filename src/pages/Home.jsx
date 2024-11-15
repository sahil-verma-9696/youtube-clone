import React from "react";
import { useFetchHomeVideos } from "../hooks/useFetchHomeVideos";
import { useSelector } from "react-redux";
import VideoCard from "../components/home/VideoCard";
const Home = () => {
  useFetchHomeVideos();
  const homeVideos = useSelector(store=>store.videos?.homeVideos)
  return (
    <div
      className=" h-[calc(100vh-62px)] p-2 gap-2 overflow-y-scroll  grid 
      sm:w-[calc(100%-240px)] sm:grid-cols-3 sm:grid-rows-[repeat(10,400px)] sm:relative sm:left-48 
      "
    >
      {
        homeVideos?.map(data=><VideoCard key={data.id} data={data}/>)
      }
      
    </div>
  );
};

export default Home;
