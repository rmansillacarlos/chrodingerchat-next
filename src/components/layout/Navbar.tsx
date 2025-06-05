'use client'

import NavbarItem from "./NavbarItem"
import useTheme from '@/hooks/useTheme'

export default function Navbar() {
  const { toggleTheme } = useTheme()

  return (
    <>
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-4 w-auto p-2">
        <span className="mb-4">
          A
        </span>

        <NavbarItem>Ch</NavbarItem>
        <NavbarItem>Sp</NavbarItem>
        <NavbarItem>Cd</NavbarItem>
        <NavbarItem>Dt</NavbarItem>
      </div>
      <button className="flex flex-col gap-4" onClick={toggleTheme}>
        L/D
      </button>
    </div>
    </>
  )
}