"use client";

import React from "react";
import Image from "next/image";
import { FeedPostData } from "@/data/feed";
import { PinIcon } from "../icons/PinIcon";
import { MessageIcon } from "../icons/MessageIcon";
import { SmileIcon } from "../icons/SmileIcon";

interface FeedPostProps {
  post: FeedPostData;
  isPinnedSection?: boolean;
}

const FeedPost: React.FC<FeedPostProps> = ({
  post,
  isPinnedSection = false,
}) => {
  return (
    <article
      className="
        bg-[var(--bg-surface)]
        border border-[var(--border-default)]
        rounded-2xl
        overflow-hidden
      "
    >
      {/* Pinned banner */}
      {post.isPinned && isPinnedSection && (
        <div className="px-4 py-2 text-sm flex items-center gap-2 bg-[var(--bg-surface)] border-b border-[var(--border-default)]">
          <PinIcon className="w-3 h-3 text-[var(--text-primary)]" />
          <span className="font-medium text-[var(--text-primary)]">
            This is a pinned post
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="flex gap-4">

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-start gap-2 align-middle">
              {/* Avatar */}
              <Image
                src={post.avatarUrl}
                alt={post.author}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[var(--text-primary)]">
                  {post.author}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {post.createdAt}
                </p>
              </div>

              <button className="ml-auto text-[var(--text-secondary)]">
                <svg width="20" height="20" fill="currentColor">
                  <circle cx="4" cy="10" r="1.5" />
                  <circle cx="10" cy="10" r="1.5" />
                  <circle cx="16" cy="10" r="1.5" />
                </svg>
              </button>
            </div>

            {/* Text content */}
            {post.content && (
              <p className="mt-3 text-[var(--text-primary)] leading-relaxed">
                {post.content}
              </p>
            )}

            {/* Checklist items */}
            {post.items && post.items.length > 0 && (
              <div className="mt-4 space-y-2">
                {post.items.map((item) => (
                  <div key={item.number} className="flex items-center gap-3 text-[var(--text-primary)]">
                    <div
                      className="
                        w-6 h-6
                        rounded-md
                        bg-[var(--bg-muted)]
                        text-sm
                        font-medium
                        flex items-center justify-center
                      "
                    >
                      {item.number}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Media */}
            {post.mediaUrl && (
              <div className="mt-4 rounded-xl overflow-hidden">
                <Image
                  src={post.mediaUrl}
                  alt="Post media"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            )}

            {/* Actions */}
            <div
              className="
                mt-4
                pt-3
                flex items-center justify-between
              "
            >
              {/* Left actions */}
              <div className="flex items-center gap-3">
                <button
                  className="
                    flex items-center gap-2
                    px-3 py-1.5
                    rounded-full
                    bg-[var(--bg-muted)]
                    border border-[var(--border-default)]
                    text-[var(--text-primary)]
                  "
                >
                  🙏 <span>{post.likes}</span>
                </button>

                <button
                  className="
                    w-9 h-9
                    rounded-full
                    bg-[var(--bg-muted)]
                    border border-[var(--border-default)]
                    flex items-center justify-center
                  "
                >
                  <SmileIcon className="w-5 h-5 text-[var(--text-primary)]" />
                </button>

                <button
                  className="
                    w-9 h-9
                    rounded-full
                    border border-[var(--border-default)]
                    bg-[var(--bg-muted)]
                    flex items-center justify-center
                  "
                >
                  <MessageIcon className="w-5 h-5 text-[var(--text-primary)]" />
                </button>
              </div>

              {/* Right comments */}
              <span className="text-sm text-[var(--text-secondary)]">
                {post.comments} Comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeedPost;
