import Link from "next/link"

export default function SidebarItem({children,}: Readonly<{
  children?: React.ReactNode
}>) {
  return (
    <Link href="" className="py-1.5 text-ellipsis overflow-hidden whitespace-nowrap">{children}</Link>
  )
}