import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 *
 * @param {...any} inputs
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const pathParamMap = {
  'select-challenge': 'select-base',
  'create-challenge': 'create-table',
  'delete-challenge': 'delete-table',
  'update-challenge': 'update-table'
}

export const removeSqlSpace = (sql: string) => {
  return sql
    .toLowerCase()
    .trimStart()
    .trimEnd()
    .replace(/\s/g, '')
    .replace(/\t/g, '')
    .replace(/\n/g, '')
    .replace(/--/g, '')
    .replace(/[\u4e00-\u9fa5]/g, '')
    .replace(/sql/g, '')
}
