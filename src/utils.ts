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

// remove space and \n \t, chinese, --, SQL
export const removeSpace = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/\\n/g, '')
    .replace(/\\t/g, '')
    .replace(/[\u4e00-\u9fa5]/g, '')
    .replace(/--/g, '')
    .replace(/sql/g, '')
    .trimStart()
    .trimEnd()
}
