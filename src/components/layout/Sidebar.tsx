import Button from "@/components/ui/Button";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="h-full px-4 pb-6 flex flex-col justify-between">
      <div className="">
        <div className="flex justify-between">
          Chat
          <span>S</span>
        </div>
        <div className="w-full">
          <Button>New Chat</Button>
        </div>
        <div className="">
          <h4 className="my-2 font-light text-neutral-500">Favorites</h4>
          <ul className="flex flex-col">
            <SidebarItem>ChatAI</SidebarItem>
            <SidebarItem>Image of sun</SidebarItem>
            <SidebarItem>Data Analyst</SidebarItem>
          </ul>
          <h4 className="my-2 font-light text-neutral-500">Recents</h4>
          <ul className="flex flex-col">
            <SidebarItem>Non qui velit consectetur occaecat nostrud consequat Lorem sint cupidatat dolore duis.</SidebarItem>
            <SidebarItem>Mollit aliquip reprehenderit magna et consectetur labore sint quis voluptate dolor.</SidebarItem>
            <SidebarItem>Aliqua aliquip labore est nisi tempor aliqua ut do do do qui exercitation esse.</SidebarItem>
          </ul>
        </div>
      </div>
      <Button>
        Upgrade to Pro
      </Button>
    </div>
  )
}