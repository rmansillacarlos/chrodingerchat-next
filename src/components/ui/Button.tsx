import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-slate-800 text-white border border-gray-500 shadow-md',
  secondary: 'bg-white border border-gray-200 shadow-md shadow-gray-300',
}

export default function Button({children, className, variant}: ButtonProps) {
  return (
    <button className={clsx(
      className,
      variant ? variantClasses[variant] : variantClasses.primary,
      "py-1.5 px-3 inline-flex gap-1.5 items-center rounded-full cursor-pointer"
    )}>
      {children}
    </button>
  )
}