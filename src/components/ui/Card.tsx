import clsx from "clsx"

type CardVariant  = 'primary' | 'secondary'

interface CardProps {
  children?: React.ReactNode
  className?: string
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  primary: 'bg-slate-900 text-white',
  secondary: 'bg-white border border-gray-300'
}

export default function Card({ children, className, variant }: CardProps) {
  return (
    <div className={clsx(
      "w-full p-4 text-sm rounded-2xl cursor-pointer",
      variant ? variantClasses[variant] : variantClasses.secondary,
      className
    )}>
      {children}
    </div>
  )
}
