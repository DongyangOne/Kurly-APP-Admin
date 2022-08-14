import { useState } from 'react'

export function useNull(arr) {
  for (const item of arr) {
    if (!item) return false
    return true
  }
}

export function useInput(init) {
  const [item, setItem] = useState(init)
  const onChangeText = (e) => {
    setItem(() => e)
  }
  return { item, onChangeText, setItem }
}
