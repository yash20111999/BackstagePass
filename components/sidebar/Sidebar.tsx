"use client";

import React, { useState } from 'react';
import { ChallengeDay } from "@/data/challenge";
import SidebarItem from './SidebarItem';

interface SidebarProps {
  days: ChallengeDay[];
}

export default function Sidebar({ days }: SidebarProps) {
  // Find the initially active day from props, or default to the first non-locked day.
  const initialActiveDay = days.find(d => d.isActive)?.dayNumber || days.find(d => !d.isLocked)?.dayNumber || 1;
  const [activeDay, setActiveDay] = useState(initialActiveDay);

  const handleDayClick = (dayNumber: number) => {
    setActiveDay(dayNumber);
  };
  
  return (
    <aside
      className="
        relative
        w-[18%]
        h-[calc(100dvh-100px)]
        min-h-[600px]
        max-w-65
        min-w-55
        pt-4
        pb-6
        pl-2
        flex
        flex-col
        gap-3
        overflow-hidden
        hidden lg:block
      "
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('/sidebar/background.jpg')",
        }}
      />

      <div
        className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(253,252,253,0.3)_-50.78%,var(--bg-sidebar)_100%)] backdrop-blur-[50px]"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col gap-3">
        {/* This empty div is preserved from the original layout to maintain visual consistency. */}
        <div
            className="
              h-7
              px-4
              flex
              items-center
              justify-between
            "
        >
        </div>
        
        {days.map((day) => (
          <SidebarItem
            key={day.dayNumber}
            dayNumber={day.dayNumber}
            isActive={day.dayNumber === activeDay}
            isLocked={day.isLocked}
            onClick={() => handleDayClick(day.dayNumber)}
          />
        ))}
      </div>
    </aside>
  );
}
