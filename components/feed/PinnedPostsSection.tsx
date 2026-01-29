"use client";

import React from 'react';
import { FeedPostData } from '@/data/feed';
import FeedPost from './FeedPost';

interface PinnedPostsSectionProps {
  posts: FeedPostData[];
}

const PinnedPostsSection: React.FC<PinnedPostsSectionProps> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <>
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} isPinnedSection={true} />
      ))}
      </>
  );
};

export default PinnedPostsSection;
