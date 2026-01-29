import React from 'react';

interface SidebarItemProps {
  dayNumber: number;
  isActive: boolean;
  isLocked: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ dayNumber, isActive, isLocked }) => {
  const baseClasses = "p-2 my-1 rounded-md text-sm";
  const activeClasses = "bg-[var(--bg-sidebar-item-active)] text-[var(--text-sidebar-item-active)]";
  const inactiveClasses = "bg-transparent text-[var(--text-sidebar-item-inactive)]";
  const lockedClasses = "text-[var(--text-sidebar-item-locked)] opacity-50";

  const getStatusClasses = () => {
    if (isLocked) return lockedClasses;
    if (isActive) return activeClasses;
    return inactiveClasses;
  };

  return (
    <div className={`${baseClasses} ${getStatusClasses()}`}>
      Day {dayNumber} {isLocked ? '(Locked)' : ''}
    </div>
  );
};

export default SidebarItem;
