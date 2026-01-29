"use client";

import React from "react";
import Image from "next/image";

interface SeeOthersSharedSectionProps {
  participantCount?: number;
}

const SeeOthersSharedSection: React.FC<SeeOthersSharedSectionProps> = ({
  participantCount = 85,
}) => {
  return (
    <div className="px-4 sm:px-8 pt-2">
      <div className="flex flex-col items-center text-center gap-2">
        {/* Heading */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-1
            sm:flex-row
            sm:gap-2
          "
        >
          <span className="text-xl font-semibold text-[var(--text-primary)]">
            See what others
          </span>

          {/* Avatar group */}
          <div className="flex -space-x-2 my-1 sm:my-0">
            {[0, 1, 2].map((i) => (
              <Image
                key={i}
                src={`https://i.pravatar.cc/40?u=${i}`}
                alt="Participant"
                width={28}
                height={28}
                className="w-7 h-7 rounded-full border border-white"
              />
            ))}
          </div>

          <span className="text-xl font-semibold text-[var(--text-primary)]">
            shared
          </span>
        </div>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-[var(--text-primary)]">
          <span className="font-semibold">{participantCount}+</span> participants already completed
        </p>
      </div>
    </div>
  );
};

export default SeeOthersSharedSection;
