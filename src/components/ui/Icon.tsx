import { Icon as IconifyIcon } from '@iconify/react'

interface IconProps {
  icon?: string
  size?: number | string
  className?: string
}

export default function Icon({ icon = 'heroicons:home', size = '16px', className }: IconProps) {
  return (
    <IconifyIcon loop icon={icon} width={size} height={size} className = {className} />
  )
}