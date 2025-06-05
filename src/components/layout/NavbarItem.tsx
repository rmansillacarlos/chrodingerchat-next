import clsx from "clsx"

type NavbarItemVariant = 'primary' | 'secondary'

const variantClasses: Record<NavbarItemVariant, string> = {
  primary: 'bg-slate-800 text-white hover:bg-slate-600 active:outline-2 active:outline-slate-400',
  secondary: 'bg-white hover:bg-gray-200 active:outline-2 active:outline-slate-400',
}

interface NavbarItemProps {
  children: React.ReactNode,
  variant?: NavbarItemVariant
}

export default function NavbarItem({children, variant}: NavbarItemProps) {
  return (
    <div className={clsx(
      "flex p-2.5 rounded-full cursor-pointer",
      variant ? variantClasses[variant] : variantClasses['secondary']
    )}>{children}</div>
  )
}