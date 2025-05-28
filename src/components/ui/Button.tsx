export default function Button({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <button className="py-1.5 px-3 rounded-full">
      {children}
    </button>
  )
}