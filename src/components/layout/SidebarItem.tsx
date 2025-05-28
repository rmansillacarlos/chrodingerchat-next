import Link from "next/link"

export default function SidebarItem({children,}: Readonly<{
  children?: React.ReactNode
}>) {
  return (
    <Link href="" className="p-1 text-base text-ellipsis overflow-hidden whitespace-nowrap">{children}</Link>
  )
}