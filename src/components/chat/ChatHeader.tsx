import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Header() {
  return (
    <>
      <div className="mb-4 h-10 flex justify-between items-center">
        {/* Logo */}
        <div className="inline-flex">
          <Icon className="block mr-4 lg:hidden" icon="heroicons:bars-3" size="24px" />
          <span className="text-lg font-semibold md:text-base">ChrodingerGPT</span>
        </div>
        {/* Buttons */}
        <div className="flex gap-2">
          <Button variant="secondary"><span className="hidden md:block">Configuration</span> <Icon icon="heroicons:cog-6-tooth" /></Button>
          <Button variant="secondary"><span className="hidden md:block">Share</span> <Icon icon="heroicons:arrow-up-tray" /></Button>
          <Button><span className="hidden md:block">New Chat</span> <Icon icon="heroicons:sparkles" /></Button>
        </div>
      </div>
    </>
  )
}