'use client'

import Avatar from "@/components/ui/Avatar"
import Icon from "@/components/ui/Icon"
import NavbarItem from "./NavbarItem"
import useTheme from '@/hooks/useTheme'

export default function Navbar() {
  const { toggleTheme } = useTheme()

  return (
    <>
      <div className="hidden flex-col justify-between items-center p-2 bg-stone-100 rounded-s-xl lg:flex">
        <div className="flex flex-col justify-center items-center gap-3 w-auto">
          <Avatar className="mb-2" size="md" src="https://gravatar.com/avatar/6717be7d9ec2673e848f24b7979555a1?s=200&d=retro&r=x" />

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