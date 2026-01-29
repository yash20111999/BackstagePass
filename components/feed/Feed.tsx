"use client";

import React from "react";
import { FeedPostData } from "@/data/feed";
import CheckInSection from "./CheckInSection";
import RegularPostsSection from "./RegularPostsSection";
import SeeOthersSharedSection from "./SeeOthersSharedSection";
import PinnedPostsSection from "./PinnedPostsSection";

interface FeedProps {
  posts: FeedPostData[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  const pinnedPosts = posts.filter((post) => post.isPinned);
  const regularPosts = posts.filter((post) => !post.isPinned);

  return (
    <div className="bg-[var(--bg-page)] min-h-screen w-full lg:w-1/2 self-center ">
      <CheckInSection timeLeft="20h 44m" />
      
      <div
        className="
          flex flex-col gap-6
          bg-[var(--bg-surface)] space-y-0 border border-[var(--border-default)]
          rounded-2xl px-3 py-3
          
        "
      >
        {regularPosts.length > 0 && (
          <SeeOthersSharedSection participantCount={85} />
        )}
        <PinnedPostsSection posts={pinnedPosts} />
        <RegularPostsSection posts={regularPosts} />
      </div>
    </div>
  );
};

export default Feed;
