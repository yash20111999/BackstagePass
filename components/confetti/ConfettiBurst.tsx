import { Confetti } from "./Confetti";
const PARTICLES = Array.from({ length: 12 });

export function ConfettiBurst() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {PARTICLES.map((_, i) => (
        <Confetti
          key={i}
          className={`confetti confetti-${i % 9}
          ${i % 3 === 0 ? "confetti-sm" : i % 3 === 1 ? "confetti-md" : "confetti-lg"}
          ${i % 3 === 0 ? "confetti-yellow" : i % 3 === 1 ? "confetti-green" : "confetti-pink"}`}
        />
      ))}
    </div>
  );
}
