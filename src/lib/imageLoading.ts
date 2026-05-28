/**
 * IMAGE LAZY LOADING UTILITY
 * 
 * Provides utilities for efficient image lazy loading in projects
 */

export interface ImageLoadingState {
  loaded: boolean
  error: boolean
}

/**
 * Preload an image URL
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

/**
 * Create a blur-up placeholder (base64 encoded tiny image)
 */
export const PLACEHOLDER_BLUR_UP = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%2318181b" width="400" height="300"/%3E%3C/svg%3E'

/**
 * Batch preload multiple images
 */
export async function preloadImages(srcs: string[]): Promise<PromiseSettledResult<void>[]> {
  return Promise.allSettled(srcs.map(src => preloadImage(src)))
}

/**
 * Check if an image URL is accessible with a HEAD request
 */
export async function checkImageAccessibility(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}
