import clsx from "clsx"

type CardVariant  = 'primary' | 'secondary'

interface CardProps {
  children?: React.ReactNode
  className?: string
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800 active:outline-3 active:outline-slate-400',
  secondary: 'bg-white border border-gray-300 hover:bg-gray-100 active:outline-3 active:outline-slate-400'
}

export default function Card({ children, className, variant }: CardProps) {
  return (
    <div className={clsx(
      "flex-1 p-4 text-sm rounded-2xl cursor-pointer",
      variant ? variantClasses[variant] : variantClasses.secondary,
      className
    )}>
      {children}
    </div>
  )
}
