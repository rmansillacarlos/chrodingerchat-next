'use client'

import { useEffect, useState } from 'react'


export default function useTheme() {
  const [theme, setTheme] = useState<'light'|'dark'>('light')

  useEffect(() => {
    const initial = 'light'
    setTheme(initial)
    document.documentElement.classList.add(initial)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
    setTheme(newTheme)
  }

  return { theme, toggleTheme }
}