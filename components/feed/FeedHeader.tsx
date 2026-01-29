"use client";

import React from 'react';

const FeedHeader: React.FC = () => {
  return (
    <div className="px-8 py-8 border-b border-[var(--border-default)] bg-gradient-to-b from-[#F0F9FF] to-[#E0F4FF]">
      <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-2">Your Submission</h2>
      <p className="text-center text-base text-[var(--text-secondary)]">Share your progress and inspire others</p>
    </div>
  );
};

export default FeedHeader;
