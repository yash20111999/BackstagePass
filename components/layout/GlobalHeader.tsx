import Image from "next/image";
import { LogoIcon } from "../icons/LogoIcon";
import { FireIcon } from "../icons/FireIcon";
import { BellIcon } from "../icons/BellIcon";

export default function GlobalHeader() {
  return (
    <header className="h-14 bg-[var(--bg-surface)] sticky top-0 z-50">
      <div className="mx-auto h-full px-4 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          {/* Broadcast Icon */}
          <LogoIcon className="w-6 h-6" />

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
          <BellIcon className="w-8 h-8" />

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[var(--border-default)]">
            <Image
              src="https://i.pravatar.cc/40?img=1"
              alt="User"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
