"use client";
import Image from "next/image";
import { LogoIcon } from "../icons/LogoIcon";
import { FireIcon } from "../icons/FireIcon";
import { BellIcon } from "../icons/BellIcon";
import { useState } from "react";

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  
  // Styling constants
  const profileButton = "w-8 h-8 rounded-full overflow-hidden cursor-pointer border border-[var(--border-default)]";
  const dropdownContainer = "absolute right-0 mt-2 w-36 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-sm z-50";
  const menuButton = "w-full px-3 py-2 flex items-center gap-2 text-sm hover:bg-[var(--bg-muted)] text-[var(--text-primary)] font-medium cursor-pointer";
  
  function isDarkMode() {
    return document.documentElement.classList.contains("dark");
  }

  const toggleTheme = () => {
    setOpen(!open);
    const root = document.documentElement;
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";

    root.classList.toggle("dark");
    localStorage.setItem("theme", nextTheme);
  };
  return (
    <div className="relative cursor-pointer">
      {/* Profile icon */}
      <button 
        onClick={() => setOpen(!open)}
        className={profileButton}
      >
        <Image
          src="https://i.pravatar.cc/40?img=1"
          alt="User"
          width={32}
          height={32}
          className="w-full h-full object-cover"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className={dropdownContainer}>
          <button
            onClick={toggleTheme}
            className={menuButton}
          >
            {isDarkMode() ? (
              <>
                <span>☀️</span>
                <span>Light mode</span>
              </>
            ) : (
              <>
                <span>🌙</span>
                <span>Dark mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default function GlobalHeader() {
  return (
    <header className="h-14 bg-[var(--bg-surface)] sticky top-0 z-50">
      <div className="mx-auto h-full px-4 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          {/* Broadcast Icon */}
          <LogoIcon className="w-6 h-6 text-[var(--accent-primary)]" />

          {/* Brand */}
          <span className="text-lg font-semibold">
            <span className="text-[var(--text-primary)]">Backstage</span>
            <span className="text-[var(--accent-primary)]">Pass</span>
          </span>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3">
          {/* Streak */}
          <div
            className="
              flex items-center gap-1
              h-8
              px-3 py-1
              rounded-full
              bg-[var(--bg-muted)]
              text-[var(--text-primary)]
              text-sm
              font-medium
            "
          >
            <FireIcon className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>30</span>
          </div>

          {/* Notification */}
          <button className="p-1 rounded-full hover:bg-[var(--bg-muted)] cursor-pointer">
            <BellIcon className="w-8 h-8 text-[var(--text-primary)]" />
          </button>

          {/* Avatar */}
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
