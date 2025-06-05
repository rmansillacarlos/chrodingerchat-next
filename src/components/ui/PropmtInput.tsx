import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function PropmtInput() {
  return (
    <div className="px-4.5 py-4 flex flex-col bg-white border border-gray-300 shadow-xl shadow-gray-200 rounded-4xl">
      <div className="flex gap-2 items-center mb-4">
        <Icon icon="lucide:wand-sparkles" className="text-gray-500" />
        <input type="text" placeholder="Ask me anything" className="w-full outline-none" />
      </div>
      <div className="flex justify-between">
        <Button variant="secondary">Model: Gara v3<Icon icon="heroicons:chevron-down" size="12px" /></Button>
        <div className="flex gap-2">
          <Button variant="secondary"><Icon icon="heroicons:link" />Attach</Button>
          <Button variant="secondary"><Icon icon="heroicons:microphone" />Voice</Button>
          <Button className="ml-2"><Icon icon="heroicons:arrow-up" />Send</Button>
        </div>
      </div>
    </div>
  )
}
