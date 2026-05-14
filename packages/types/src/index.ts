export type JwtPayload = {
  sub: string;
  email: string;
  role: 'user' | 'admin' | 'superadmin';
  sessionId: string;
};

export interface TypingResult {
  wpm: number;
  accuracy: number;
  durationSeconds: number;
  charsTyped: number;
  mistakes: number;
}

export interface ContestUpdate {
  contestId: string;
  roomId: string;
  userId: string;
  currentWpm: number;
  completionPercent: number;
  errorCount: number;
}

export interface ContestCreatePayload {
  title: string;
  text: string;
  startsAt: string;
  endsAt: string;
  shuffle?: boolean;
}
