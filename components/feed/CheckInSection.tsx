"use client";

import React, { useState } from "react";

interface CheckInSectionProps {
  timeLeft?: string;
}

const CheckInSection: React.FC<CheckInSectionProps> = ({
  timeLeft = "20h 44m",
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="py-6">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">
          Today&apos;s check-in
        </h3>

        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#EF4444] text-white">
          Ends in {timeLeft}
        </span>
      </div>

      {/* Unified input pill */}
      <div
        className="
          flex items-center gap-3
          w-full
          rounded-[24px]
          p-[2px]
          bg-[linear-gradient(90deg,#8D6500_0%,#F5E6B0_100%)]
        "
      >
        <div
          className="
            flex items-center gap-3
            w-full
            bg-white
            rounded-[22px]
            px-4 sm:px-5
            py-3 sm:py-3.5
          "
        >
          <img
            src="https://i.pravatar.cc/40?img=1"
            alt="Your avatar"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex-shrink-0"
          />

          <input
            type="text"
            placeholder="Share what you completed today?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="
              flex-1
              bg-transparent
              outline-none
              text-sm sm:text-base
              text-[var(--text-primary)]
              placeholder-[var(--text-secondary)]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default CheckInSection;
