"use client";

import React from 'react';
import { FeedPostData } from '@/data/feed';
import FeedPost from './FeedPost';

interface RegularPostsSectionProps {
  posts: FeedPostData[];
}

const RegularPostsSection: React.FC<RegularPostsSectionProps> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-0 flex flex-col gap-6">
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default RegularPostsSection;
