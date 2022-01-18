import { useCallback, useRef } from 'react'

export function useDebouncing(delay, callback) {
  const timeoutId = useRef(0)
  const delayedFunc = useCallback((...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId.current)
    }
    timeoutId.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [])
  
  return delayedFunc
}