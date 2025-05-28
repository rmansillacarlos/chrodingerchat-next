import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <>
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-4 w-auto p-2">
        <span className="mb-4">
          A
        </span>

        <NavbarItem>Ch</NavbarItem>
        <NavbarItem>Sp</NavbarItem>
        <NavbarItem>Cd</NavbarItem>
        <NavbarItem>Dt</NavbarItem>
      </div>
      <div className="flex flex-col gap-4">
        L/D
      </div>
    </div>
    </>
  )
}