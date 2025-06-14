import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-slate-800 text-white border border-gray-500 shadow-md hover:bg-slate-600 active:outline-2 active:outline-slate-400',
  secondary: 'bg-white border border-gray-200 shadow-md shadow-gray-200 hover:bg-gray-100 active:outline-2 active:outline-slate-400',
}

export default function Button({children, className, variant}: ButtonProps) {
  return (
    <button className={clsx(
      className,
      variant ? variantClasses[variant] : variantClasses.primary,
      "py-1 px-3 inline-flex gap-1.5 items-center rounded-full cursor-pointer"
    )}>
      {children}
    </button>
  )
}