"use client";

import React from "react";
import { FeedPostData } from "@/data/feed";
import CheckInSection from "./CheckInSection";
import RegularPostsSection from "./RegularPostsSection";
import SeeOthersSharedSection from "./SeeOthersSharedSection";
import PinnedPostsSection from "./PinnedPostsSection";
import YourSubmissionPost from "./YourSubmissionPost";

interface FeedProps {
  posts: FeedPostData[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  const pinnedPosts = posts.filter((post) => post.isPinned);
  const regularPosts = posts.filter((post) => !post.isPinned);
  const post = regularPosts[0];
  regularPosts.splice(0, 1); // Remove the first post as it's displayed in "Your Submission" section
  return (
    <div className="flex flex-col w-full min-w-0 h-[calc(100dvh-100px)] min-h-[600px] overflow-y-auto">
      <div className="bg-(--bg-page) min-h-screen max-w-3xl self-center ">
        {/* <CheckInSection timeLeft="20h 44m" /> */}

        <div
          className="
          flex flex-col gap-6
          bg-[var(--bg-surface)] space-y-0 border border-[var(--border-default)]
          rounded-2xl px-3 py-3
        "
        >
          <YourSubmissionPost post={post} />
          {regularPosts.length > 0 && (
            <SeeOthersSharedSection participantCount={85} />
          )}
          <PinnedPostsSection posts={pinnedPosts} />
          <RegularPostsSection posts={regularPosts} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
