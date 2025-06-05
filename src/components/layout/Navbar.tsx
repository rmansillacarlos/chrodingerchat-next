'use client'

import Avatar from "@/components/ui/Avatar"
import Icon from "@/components/ui/Icon"
import NavbarItem from "./NavbarItem"
import useTheme from '@/hooks/useTheme'

export default function Navbar() {
  const { toggleTheme } = useTheme()

  return (
    <>
    <div className="flex flex-col justify-between items-center p-2 bg-stone-100 rounded-lg">
      <div className="flex flex-col justify-center items-center gap-3 w-auto">
        <div className="mb-1">
          <Avatar size="lg" />
        </div>

        <NavbarItem variant="primary">
          <Icon icon="heroicons:chat-bubble-left-ellipsis" size="20px" />
        </NavbarItem>
        <NavbarItem>
          <Icon icon="material-symbols-light:headset-mic-outline" size="20px" />
        </NavbarItem>
        <NavbarItem>
          <Icon icon="heroicons:bolt" size="20px" />
        </NavbarItem>
        <NavbarItem>
          <Icon icon="heroicons:command-line" size="20px" />
        </NavbarItem>
        <NavbarItem>
          <Icon icon="heroicons:server-stack" size="20px" />
        </NavbarItem>
      </div>
      <NavbarItem>
        <div onClick={toggleTheme}>
          <Icon icon="heroicons:sun" size="20px" />
        </div>
      </NavbarItem>
    </div>
    </>
  )
}