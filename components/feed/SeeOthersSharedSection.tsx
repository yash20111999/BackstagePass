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
    <div className="px-8 py-6">
      <div className="flex flex-col items-center text-center gap-2">
        {/* Heading row */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-[var(--text-primary)]">
            See what others
          </span>

          {/* Inline avatar group */}
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <Image
                key={i}
                src={`https://i.pravatar.cc/40?u=${i}`}
                alt="Participant"
                width={28}
                height={28}
                className="
                  w-7 h-7
                  rounded-full
                  border border-white
                "
              />
            ))}
          </div>

          <span className="text-xl font-semibold text-[var(--text-primary)]">
            shared
          </span>
        </div>

        {/* Subtext */}
        <p className="text-base text-[var(--text-secondary)]">
          <span className="font-semibold">{participantCount}+</span> participants already completed
        </p>
      </div>
    </div>
  );
};

export default SeeOthersSharedSection;
