interface InwardArcProps {
  className?: string;
}

export function InwardArc({ className }: InwardArcProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M16 0 C16 8 8 16 0 16 L16 16 Z"
        fill="currentColor"
      />
    </svg>
  );
}
