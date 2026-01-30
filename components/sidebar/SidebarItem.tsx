"use client";

import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { ClockIcon } from "../icons/ClockIcon";
import { LockIcon } from "../icons/LockIcon";
import { InwardArc } from "../icons/InwardArc";

interface SidebarItemProps {
  dayNumber: number;
  isActive: boolean;
  isLocked: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  dayNumber,
  isActive,
  isLocked,
  onClick,
}) => {
  const handleClick = () => {
    if (!isLocked) {
      onClick();
    }
  };

  // Base styling
  const baseContainer = "h-12 px-4 flex items-center justify-between transition-colors duration-150";
  const activeStyles = "rounded-l-full bg-[var(--bg-page)]";
  const unlockedInactiveHover = "hover:bg-[var(--bg-muted)] rounded-l-full";
  const lockedStyles = "cursor-not-allowed opacity-60";
  const unlockedStyle = "cursor-pointer";
  
  // Text styling
  const activeText = "text-[var(--text-primary)] font-semibold";
  const inactiveText = "text-[var(--text-secondary)] font-medium";
  
  // Icon styling
  const checkCircle = "w-5 h-5 rounded-full bg-[var(--accent-success)] flex items-center justify-center";
  const lockIcon = "w-5 h-5 text-[var(--text-secondary)]";
  const checkMark = "w-3 h-3 text-[var(--bg-page)]";
  
  // Inward arc positioning
  const arcTop = "absolute -top-4 right-0 text-[var(--bg-page)] pointer-events-none z-5";
  const arcBottom = "absolute -bottom-4 right-0 text-[var(--bg-page)] rotate-[270deg] pointer-events-none z-5";

  // Determine interaction classes
  const interactionClasses = isLocked 
    ? lockedStyles 
    : (unlockedStyle + (!isActive ? ` ${unlockedInactiveHover}` : ""));

  return (
    <div
      onClick={handleClick}
      className={`${baseContainer} ${isActive ? activeStyles : ""} ${interactionClasses}`}
      style={isActive ? { position: "relative" } : undefined}
    >
      {/* LEFT CONTENT */}
      <div className={`flex items-center gap-1.5 ${isActive ? activeText : inactiveText}`}>
        <span className="text-sm">Day - {dayNumber}</span>
      </div>

      {/* RIGHT ICON */}
      {isLocked ? (
        <LockIcon className={lockIcon} />
      ) : isActive ? (
        <div className={checkCircle}>
          <CheckIcon className={checkMark} />
        </div>
      ) : null}

      {isActive && (
        <>
          {/* Top-right inward arc */}
          <div className={arcTop}>
            <InwardArc />
          </div>

          {/* Bottom-right inward arc */}
          <div className={arcBottom}>
            <InwardArc />
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarItem;
