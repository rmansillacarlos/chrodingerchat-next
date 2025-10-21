import clsx from "clsx"

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  variant?: ButtonVariant
  disabled?: boolean
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-slate-800 text-white border border-gray-500 outline-slate-400/40 shadow-md transition-all hover:bg-slate-600 active:outline-1',
  secondary: 'bg-white border border-gray-200 outline-slate-400/40 shadow-md shadow-gray-200 transition-all hover:bg-gray-100 active:outline-1',
}

export default function Button({variant, disabled, children, className, onClick}: ButtonProps) {
  return (
    <button className={clsx(
        className,
        variant ? variantClasses[variant] : variantClasses.primary,
        disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
        "py-1 px-3 inline-flex gap-1.5 items-center rounded-full cursor-pointer"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}