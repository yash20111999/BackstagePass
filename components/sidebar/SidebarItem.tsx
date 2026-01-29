"use client";

import React from 'react';
import { CheckIcon } from "../icons/CheckIcon";
import { ClockIcon } from "../icons/ClockIcon";
import { LockIcon } from "../icons/LockIcon";

interface SidebarItemProps {
  dayNumber: number;
  isActive: boolean;
  isLocked: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ dayNumber, isActive, isLocked, onClick }) => {
  const handleClick = () => {
    if (!isLocked) {
      onClick();
    }
  };

  // Base classes for the container
  const containerClasses = "h-12 px-4 flex items-center justify-between transition-colors duration-150";

  // Determine cursor and hover effects based on state
  let interactionClasses = '';
  if (isLocked) {
    interactionClasses = 'cursor-not-allowed opacity-60';
  } else {
    interactionClasses = 'cursor-pointer';
    if (!isActive) {
      // For unlocked but inactive days, add a subtle hover effect
      interactionClasses += ' hover:bg-[var(--bg-muted)] rounded-l-full';
    }
  }

  // Determine styling for the active pill state
  const activeStateClasses = isActive ? "rounded-l-full bg-[var(--bg-page)]" : "";
  
  // Determine text styling based on state
  const textClasses = isActive 
    ? "text-[var(--text-primary)] font-semibold" 
    : "text-[var(--text-secondary)] font-medium";

  return (
    <div
      onClick={handleClick}
      className={`${containerClasses} ${activeStateClasses} ${interactionClasses}`}
    >
      <div className={`flex items-center gap-1.5 ${textClasses}`}>
        {isActive && <ClockIcon className="w-5 h-5 text-[var(--text-primary)]" />}
        <span className="text-sm">
          Day - {dayNumber}
        </span>
      </div>
      
      {isLocked ? (
        <LockIcon className="w-5 h-5 text-[var(--text-secondary)]" />
      ) : isActive ? (
        <div className="w-5 h-5 rounded-full bg-[var(--accent-success)] flex items-center justify-center">
          <CheckIcon className="w-3 h-3 text-[var(--bg-page)]"/>
        </div>
      ) : null}
    </div>
  );
};

export default SidebarItem;
