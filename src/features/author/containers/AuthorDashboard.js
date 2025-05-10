// React core imports
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Component imports
import TabInfoAnalysisNews from "../components/TabInfoAnalysisNews.jsx"

// Constants
import { LATEST_NEWS } from "../utils/constants/EndPoints.js";

// Utility functions
import { ConnectToServer } from '../../../../utils/services/api/ConnectToServer.js';
import { cashImages } from "../../../../utils/lib/cashImages.js";
import { arraysEqual } from "../../../../utils/lib/arraysEqual.js";

// Custom hooks
import useScrollToBottom from '../../../../utils/hooks/useScrollToBottom.js';

// Zustand state management
import useAppStore from "../../../app/stores/AppStore.js";

const AuthorDashboard = () => {

  // Get location object to access route state (e.g. selected author)
  const location = useLocation();

  // Constants and initializations
  const PAGE_NUMBER = 1; // Default starting page
  let tempImages; // Temporary holder for images to be cached

  // Custom hook to detect scroll position
  const isBottom = useScrollToBottom();

  // Local states
  const [loading, setLoading] = useState("true"); // Loading flag
  const [newsData, setNewsData] = useState(["free"]); // Initial news data, placeholder "free" will be removed on mount
  const [newsCategory, setNewsCategory] = useState("cryptocurrencies"); // News category filter
  const [newsFrom, setNewsFrom] = useState("1716373411"); // Starting timestamp for news (UNIX time)
  const [newsPageLimit, setNewsPageLimit] = useState(10); // Number of items per page
  const [newsPage, setNewsPage] = useState(PAGE_NUMBER); // Current page number
  const [cashedImages, setCashedImages] = useState([]); // Cached news images from localStorage

  // Global state (e.g. app-wide language setting)
  const { languageApp } = useAppStore();

  // Function to fetch news
  const getNews = (cash = "true") => {
    // Create request payload
    const parameter = {
      category: newsCategory,
      author: location?.state?.author?.name,
      startDate: newsFrom,
      page: newsPage,
      language: languageApp,
      pageLimit: newsPageLimit,
      llmOnly: false,
    };

    // API call
    ConnectToServer(
      "post",
      LATEST_NEWS,
      parameter,
      "",
      "AnalyzedNews"
    ).then((response) => {
      if (response?.data?.return) {
        setLoading("false");

        if (cash === "true") {
          // Extract top 9 image URLs
          tempImages = response?.data?.data?.result?.slice(0, 9).map(
            (item, index) => item?.local_image
          );

          // Cache images only if they're new or not cached already
          if (
            !arraysEqual(
              tempImages,
              response?.data?.data?.result?.slice(0, 9).map((item) => item?.local_image),
              "data-dashboard-author-news-images"
            ) ||
            !localStorage.getItem("data-dashboard-author-news-images")
          ) {
            // Save timestamps and image URLs to localStorage
            cashImages(
              "data-dashboard-author-news-images",
              response?.data?.data?.result?.slice(0, 9).map((item) => item?.created_at),
              response?.data?.data?.result?.slice(0, 9).map((item) => item?.local_image)
            );
          }
        }

        // Append new data to current state
        setNewsData((prev) => {
          return [...prev, ...response?.data?.data?.result];
        });
      }
    });
  };

  // Function to read cached images from localStorage
  function getCashedImagesLocal() {
    const cashedImagesLocal = localStorage.getItem("data-dashboard-author-news-images");
    if (cashedImagesLocal) setCashedImages(JSON.parse(cashedImagesLocal));
  }

  // On initial render: fetch news and load cached images
  useEffect(() => {
    if (newsData == "free") {
      getNews(); // Fetch initial news
      getCashedImagesLocal(); // Load cached images
      newsData.shift(); // Remove placeholder "free"
    }
  }, [newsData]);

  // When language changes: reset news and page
  useEffect(() => {
    if (newsData.length > 0) setNewsData(["free"]); // Reset to placeholder
    setNewsPage(1); // Reset to first page
  }, [languageApp]);

  // When user scrolls to bottom: increment page
  useEffect(() => {
    setNewsPage((prev) => prev + 1);
  }, [isBottom]);

  // When page number increases and not initially loading, fetch new page
  useEffect(() => {
    if (newsPage > 2 && loading === "false") {
      setLoading("true");
      getNews("false");
    }
  }, [newsPage]);

  return (
    <>
      <div className='bg-background pb-[7rem] mt-32'>
        <TabInfoAnalysisNews
          author={location?.state?.author}
          news_data={newsData}
          cashed_images={cashedImages}
          loading={loading}
        />
      </div>
    </>
  )
}


export default AuthorDashboard