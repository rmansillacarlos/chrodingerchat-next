import Button from "@/components/ui/Button";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="h-full px-4 pb-6 flex flex-col justify-between border-r border-neutral-200">
      <div className="flex flex-col">
        <div className="mt-3 py-1.5 flex justify-between font-medium">
          Chat
          <span>S</span>
        </div>
        <Button className="mt-3 mx-auto w-full">New Chat</Button>
        <div className="">
          <h4 className="mt-5 font-light text-neutral-500">Favorites</h4>
          <ul className="mt-1 flex flex-col">
            <SidebarItem>ChatAI</SidebarItem>
            <SidebarItem>Image of sun</SidebarItem>
            <SidebarItem>Data Analyst</SidebarItem>
          </ul>
          <h4 className="mt-5 font-light text-neutral-500">Recents</h4>
          <ul className="mt-1 flex flex-col">
            <SidebarItem>Non qui velit consectetur occaecat nostrud consequat Lorem sint cupidatat dolore duis.</SidebarItem>
            <SidebarItem>Mollit aliquip reprehenderit magna et consectetur labore sint quis voluptate dolor.</SidebarItem>
            <SidebarItem>Aliqua aliquip labore est nisi tempor aliqua ut do do do qui exercitation esse.</SidebarItem>
          </ul>
        </div>
      </div>
      <Button variant="secondary">
        Upgrade to Pro
      </Button>
    </div>
  )
}