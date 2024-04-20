export const MAX_LENGTH = 5
export const LETTER_REGEX = /[a-zA-Z]/
export const RESULTS = {
  green: '🟩',
  yellow: '🟧',
  gray: '⬜️',
} as const
export type Result = keyof typeof RESULTS
export type Emoji = (typeof RESULTS)[Result]
