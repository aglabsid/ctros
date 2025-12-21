import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatDate(date: Date, variant: 'short' | 'long' = 'long') {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: variant,
		day: 'numeric',
	})
}

export function getReadingTime(text: string) {
	const words = text.split(/\s+/).length
	return Math.ceil(words / 200) || 1
}
