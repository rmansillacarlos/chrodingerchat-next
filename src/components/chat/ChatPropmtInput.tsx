"use client"

import { useState } from "react"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"

interface Props {
  isLoading?: boolean
  onSubmit: (prompt: string) => void
}

export default function PropmtInput({ isLoading, onSubmit }: Props) {
  const [promptValue, setPromptValue] = useState('Camaron que se duerme?')

  const handleSubmit = () => {
    if (promptValue.trim() === "") return
    onSubmit(promptValue)
    setPromptValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="p-3 flex flex-col bg-white border border-gray-300 shadow-xl shadow-gray-200 rounded-3xl outline-slate-800/70 outline-0 focus-within:outline-2 md:px-4.5 md:py-4">
      <div className="mb-1 flex gap-2">
        <Icon icon="lucide:wand-sparkles" className="mt-1 text-gray-500" />
        <input 
          type="text" 
          placeholder="Ask me anything" 
          className="w-full pb-3 outline-none"
          value={promptValue} 
          onChange={(e) => setPromptValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="flex justify-between">
        <Button variant="secondary"><span className="hidden md:block">Model: Gara v3</span><Icon icon="heroicons:chevron-down" size="12px" /></Button>
        <div className="flex gap-2">
          <Button variant="secondary"><span className="hidden md:block">Attach</span><Icon icon="heroicons:link" /></Button>
          <Button variant="secondary"><span className="hidden md:block">Voice</span><Icon icon="heroicons:microphone" /></Button>
          <Button 
            disabled={isLoading} 
            onClick={() => handleSubmit()}
          >
            <Icon icon="heroicons:arrow-up" />
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
