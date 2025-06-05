import clsx from "clsx"

type ButtonSize = 'sm' | 'md' | 'lg'

interface AvatarProps {
  src?: string
  size?: ButtonSize
  className?: string
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'w-6',
  md: 'w-8',
  lg: 'w-10'
}

export default function Avatar({ src = 'https://gravatar.com/avatar/27c8b57f3aa9c36e4e96a721e5d13a36?s=400&d=retro&r=r', size, className}: AvatarProps) {
  return (
    <img 
      className={clsx(
        "object-cover rounded-full",
        size ? sizeClasses[size] : sizeClasses['md'],
        className
      )}
      src={src} 
      alt="" 
    />
  )
}