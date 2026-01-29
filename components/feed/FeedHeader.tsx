"use client";

import React from 'react';

const FeedHeader: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 border-b border-[var(--border-default)] bg-gradient-to-b from-[#F0F9FF] to-[#E0F4FF] dark:from-[#0A2E42] dark:to-[#0F3D52]">
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] text-center mb-2">Your Submission</h2>
      <p className="text-center text-sm sm:text-base text-[var(--text-secondary)]">Share your progress and inspire others</p>
    </div>
  );
};

export default FeedHeader;
