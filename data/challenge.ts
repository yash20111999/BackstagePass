export interface ChallengeDay {
  dayNumber: number;
  isActive: boolean;
  isLocked: boolean;
}

export const challengeDays: ChallengeDay[] = [
  { dayNumber: 1, isActive: true, isLocked: false },
  { dayNumber: 2, isActive: false, isLocked: false },
  { dayNumber: 3, isActive: false, isLocked: false },
  { dayNumber: 4, isActive: false, isLocked: true },
  { dayNumber: 5, isActive: false, isLocked: true },
  { dayNumber: 6, isActive: false, isLocked: true },
  { dayNumber: 7, isActive: false, isLocked: true },
  { dayNumber: 8, isActive: false, isLocked: true },
  { dayNumber: 9, isActive: false, isLocked: true },
];
