import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const pathParamMap = {
  'select-challenge': 'select-base',
  'create-challenge': 'create-table',
  'delete-challenge': 'delete-table',
  'update-challenge': 'update-table'
}
