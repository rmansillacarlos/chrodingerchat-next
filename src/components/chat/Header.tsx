import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Header() {
  return (
    <>
      <div className="flex justify-between mb-4">
        {/* Logo */}
        <span className="font-semibold">ChrodingerGPT</span>
        {/* Buttons */}
        <div className="flex gap-3">
          <Button variant="secondary">Configuration <Icon icon="heroicons:cog-6-tooth" /></Button>
          <Button variant="secondary">Share <Icon icon="heroicons:arrow-up-tray" /></Button>
          <Button>New Chat <Icon icon="heroicons:sparkles" /></Button>
        </div>
      </div>
    </>
  )
}