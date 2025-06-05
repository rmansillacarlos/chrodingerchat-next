import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function PropmtInput() {
  return (
    <div className="p-3 flex flex-col bg-white border border-gray-300 shadow-xl shadow-gray-200 rounded-3xl md:px-4.5 md:py-4">
      <div className="flex gap-2 items-center mb-4">
        <Icon icon="lucide:wand-sparkles" className="text-gray-500" />
        <input type="text" placeholder="Ask me anything" className="w-full outline-none" />
      </div>
      <div className="flex justify-between">
        <Button variant="secondary"><span className="hidden md:block">Model: Gara v3</span><Icon icon="heroicons:chevron-down" size="12px" /></Button>
        <div className="flex gap-2">
          <Button variant="secondary"><span className="hidden md:block">Attach</span><Icon icon="heroicons:link" /></Button>
          <Button variant="secondary"><span className="hidden md:block">Voice</span><Icon icon="heroicons:microphone" /></Button>
          <Button className="ml-2"><Icon icon="heroicons:arrow-up" />Send</Button>
        </div>
      </div>
    </div>
  )
}
