import { useEffect, useState, useCallback, useRef } from "react";
import { YT_BASE_URL, YT_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addVideos } from "../store/videoSlice";

export function useFetchHomeVideos() {
  const dispatch = useDispatch();
  const isInitialRender = useRef(true);

  // Load nextPageToken from localStorage on initial render
  const [nextPageToken, setNextPageToken] = useState(() => {
    return localStorage.getItem("nextPageToken") || "";
  });

  const fetchVideos = useCallback(
    async (params) => {
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
        const newPageToken = result?.nextPageToken || "";

        // Update state and persist nextPageToken
        setNextPageToken(newPageToken);
        localStorage.setItem("nextPageToken", newPageToken);
        console.log(result)
        dispatch(addVideos(result?.items));
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;

      // Fetch videos with the initial or persisted nextPageToken
      fetchVideos({
        part: "contentDetails,statistics,snippet,id",
        chart: "mostPopular",
        maxResults: 50,
        regionCode: "IN",
        pageToken: nextPageToken, // Persisted token on reload
      });
    }
  }, [fetchVideos, nextPageToken]);

  const fetchNextPage = useCallback(() => {
    if (!nextPageToken) return; // Avoid unnecessary calls
    fetchVideos({
      part: "contentDetails,statistics,snippet,id",
      chart: "mostPopular",
      maxResults: 50,
      regionCode: "IN",
      pageToken: nextPageToken,
    });
  }, [fetchVideos, nextPageToken]);

  return { fetchNextPage };
}
