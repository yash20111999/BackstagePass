import React from "react";

export function Confetti({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 16 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M2 0C6 6 10 6 14 0V32C10 26 6 26 2 32Z"
        fill="currentColor"
      />
    </svg>
  );
}
