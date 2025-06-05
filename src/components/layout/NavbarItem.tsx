import clsx from "clsx"

type NavbarItemVariant = 'primary' | 'secondary'

const variantClasses: Record<NavbarItemVariant, string> = {
  primary: 'bg-slate-800 text-white',
  secondary: 'bg-white',
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