import { Icon as IconifyIcon } from '@iconify/react'

interface IconProps {
  icon?: string
  size?: string
  className?: string
}

export default function Icon({ icon = 'heroicons:home', size = '16px', className }: IconProps) {
  return (
    <IconifyIcon icon={icon} width={size} height={size} className = {className} />
  )
}