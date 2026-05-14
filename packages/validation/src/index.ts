import { z } from 'zod';

export const otpRequestSchema = z.object({
  email: z.string().email(),
  purpose: z.enum(['login', 'verify'])
});

export const otpVerifySchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6)
});

export const contestCreateSchema = z.object({
  title: z.string().min(5),
  description: z.string().max(500).optional(),
  text: z.string().min(20),
  startsAt: z.string().datetime(),
  endsAt: z.string().datetime(),
  shuffle: z.boolean().default(false)
});

export const typingResultSchema = z.object({
  wpm: z.number().positive(),
  accuracy: z.number().min(0).max(100),
  durationSeconds: z.number().positive(),
  charsTyped: z.number().positive(),
  mistakes: z.number().nonnegative(),
  contestId: z.string().optional()
});
