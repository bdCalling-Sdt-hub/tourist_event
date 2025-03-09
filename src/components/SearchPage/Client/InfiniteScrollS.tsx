"use client";
import useUpdateSearchParams from "@/Utils/SetParams";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

const InfiniteScrollS = () => {
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const updateSearchParams = useUpdateSearchParams();

  const loadMore = () => {
    setLoading(true);
    setLimit((prevLimit) => {
      const newLimit = prevLimit + 10;
      updateSearchParams("limit", newLimit.toString());
      return newLimit;
    });
    if (limit > 200) {
      setHasMore(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loading ? () => {} : loadMore}
      hasMore={!loading || hasMore}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      {/* Your content goes here */}
    </InfiniteScroll>
  );
};

export default InfiniteScrollS;
