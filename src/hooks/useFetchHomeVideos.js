import { useEffect } from "react";
import { YT_BASE_URL, YT_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addVideos } from "../store/videoSlice";

export function useFetchHomeVideos() {
  const dispatch = useDispatch();
  async function fetchVideos(params) {
    try {
      const url = new URL(YT_BASE_URL);
      url.search = new URLSearchParams({
        ...params,
        key: YT_KEY,
      });

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      dispatch(addVideos(result?.items));
      console.log(result?.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // fetchVideos({
    //     part: "contentDetails,statistics,snippet,id",
    //     chart: "mostPopular",
    //     maxResults: 10,
    //     regionCode: "US",
    //   });
  }, []);
}
