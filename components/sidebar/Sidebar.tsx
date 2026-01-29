import { CheckIcon } from "../icons/CheckIcon";
import { ClockIcon } from "../icons/ClockIcon";
import { LockIcon } from "../icons/LockIcon";
import { ChallengeDay } from "@/data/challenge";

interface SidebarProps {
  days?: ChallengeDay[];
}

export default function Sidebar(_props: SidebarProps) {
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
        {/* Active Day */}
        <div
            className="
              h-7
              px-4
              flex
              items-center
              justify-between
            "
          ></div>
        <div
          className="
            h-12
            px-4
            flex
            items-center
            justify-between
            rounded-full
            bg-[var(--bg-page)]
          "
        >
          <div className="flex felx-col gap-1.5">
            <ClockIcon className="w-5 h-5 text-[var(--text-primary)]" /> 
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              Day - 1
            </span>
          </div>
          <div className="w-5 h-5 rounded-full bg-[var(--accent-success)] flex items-center justify-center">
            <CheckIcon className="w-3 h-3 text-[var(--bg-page)]"/>
          </div>
        </div>

        {/* Inactive Days */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="
              h-12
              px-4
              flex
              items-center
              justify-between
            "
          >
            <span className="text-sm font-medium text-[var(--text-secondary)]">
              Day - {index + 2}
            </span>

            <LockIcon className="w-5 h-5 text-[var(--text-primary)]" />
          </div>
        ))}
      </div>
    </aside>
  );
}
