import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeConvert(n: number) {
  var num = n
  var hours = num / 60
  var rhours = Math.floor(hours)
  var minutes = (hours - rhours) * 60
  var rminutes = Math.round(minutes)
  return rhours + ' h ' + rminutes + ' min'
}
