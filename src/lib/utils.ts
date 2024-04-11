import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isToday(date: Date) {
  const today = new Date().setHours(0, 0, 0, 0)

  return today === date.setHours(0, 0, 0, 0)
}
