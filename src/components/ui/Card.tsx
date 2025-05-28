export default function Card({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="w-full p-4 rounded-2xl">
      {children}
    </div>
  )
}
