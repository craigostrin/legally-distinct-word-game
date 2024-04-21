import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isToday(date: Date) {
  const today = new Date().setHours(0, 0, 0, 0)

  return today === date.setHours(0, 0, 0, 0)
}

export function daysBetween(date1: Date, date2 = new Date()): number {
  const date2utc = utcFromLocal(date2)
  const diff = Math.abs(date2utc.getTime() - date1.getTime())
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export function utcFromLocal(date: Date): Date {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const input = `${year}-${month}-${day}`
  return new Date(input)
}
