import { InfoIcon } from "../icons/InfoIcon";
import { BackIcon } from "../icons/BackIcon";
export default function PageHeader() {
  return (
    <div
      className="
        h-[56px]
        border-t border-b
        border-[var(--border-default)]
        bg-[var(--bg-surface)]
        hidden lg:block
      "
    >
      <div
        className="
          mx-auto
          h-full
          flex
          items-center
          justify-between
          pl-[10px]
          pr-[24px]
        "
      >
        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* Back */}
          <button
            className="
              flex items-center gap-1
              text-[var(--text-primary)]
              text-sm
              font-semibold
              cursor-pointer hover:text-[var(--text-secondary)]
            "
          >
            <BackIcon className="text-[var(--text-primary)] w-4 h-4"/>
            <span>Back</span>
          </button>


          {/* Divider */}
          <span className="h-4 w-px bg-[var(--border-default)]" />

          {/* Day text */}
          <span
            className="
              text-[var(--text-primary)]
              text-base
              font-semibold
            "
          >
            Day 1 of 9
          </span>
        </div>

        {/* Right side */}
        <div
          className="
            text-[var(--text-primary)]
            text-m
            font-semibold
            flex
            items-center
            gap-2
          "
        >
          <span>9-Day Fitness Challenge</span>
          <InfoIcon className="text-[var(--text-primary)]"/>
        </div>
      </div>
    </div>
  );
}
