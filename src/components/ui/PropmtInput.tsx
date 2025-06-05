import Button from "@/components/ui/Button";

export default function PropmtInput() {
  return (
    <div className="p-4.5 flex flex-col bg-white border border-gray-300 shadow-xl shadow-gray-200 rounded-4xl">
      <div className="mb-4">
        <input type="text" placeholder="Ask me anything" className="w-full outline-none" />
      </div>
      <div className="flex justify-between">
          <Button variant="secondary">Model: Gara3</Button>
        <div className="flex gap-2">
          <Button variant="secondary">Attach</Button>
          <Button variant="secondary">Voice</Button>
          <Button className="ml-2">Send</Button>
        </div>
      </div>
    </div>
  )
}
