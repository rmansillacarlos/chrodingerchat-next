import Button from "@/components/ui/Button";

export default function PropmtInput() {
  return (
    <div className="p-4.5 flex flex-col border border-neutral-600 rounded-4xl">
      <div className="mb-4">
        <input type="text" placeholder="Ask me anything" className="outline-none" />
      </div>
      <div className="flex justify-between">
          <Button>Model Gara</Button>
        <div className="flex gap-3">
          <Button>Attach</Button>
          <Button>Voice</Button>
        </div>
      </div>
    </div>
  )
}
