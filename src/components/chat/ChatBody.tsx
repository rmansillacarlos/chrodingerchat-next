"use client"

import Conversation from "@/components/chat/Conversation"
import EmptyResponse from "@/components/chat/EmptyResponse"
import ChatPropmtInput from "@/components/chat/ChatPropmtInput"
import { generateResponse } from "@/lib/services/chat.service"
import { ChatMessage } from "@/types/chat/chat.types"
import { useEffect, useRef, useState } from "react"
import Icon from "../ui/Icon"

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (newPrompt: string) => {
    const userMessage: ChatMessage = { id: new Date().toISOString(), role: "user", content: newPrompt }
    console.log(userMessage);

    const messagesWithUserAdded: ChatMessage[] = [...messages, userMessage]

    setMessages(messagesWithUserAdded)
    setIsLoading(true)

    try {
      // console.log(
      //   "Enviando mensajes...",
      //   messagesWithUserAdded.at(-2)?.content,
      //   messagesWithUserAdded.at(-1)?.content
      // )      
  
      const { reply, timestamp } = await generateResponse(messagesWithUserAdded)

      setIsLoading(false)

      const assistantMessage: ChatMessage = {
        id: timestamp,
        role: "assistant",
        content: reply
      }

      setMessages(prevMessages => [...prevMessages, assistantMessage])
    } catch (error) {
      console.error("Error al generar la respuesta:", error)
    }
  }
  
  useEffect(() => {
    console.log("scrolled!");
    
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [isLoading])

  return (
    <>
      <div
        ref={containerRef}
        className="mb-4 p-4 h-[calc(100vh-36px-4rem)] overflow-y-auto flex flex-col justify-between bg-stone-100 rounded-2xl md:p-6"
      >
        { messages.length > 0 
          ? <Conversation messages={messages} />
          : <EmptyResponse />
        }
        { isLoading && 
        <span className="mt-6 py-1">
          <Icon icon="eos-icons:three-dots-loading" size={48} className="mx-auto text-neutral-400 text-3xl" />
        </span>
        }
      </div>
      <div className="">
        <ChatPropmtInput onSubmit={handleSubmit} />
        <p className="mt-4 text-center text-sm text-gray-500">Non qui velit consectetur on qui velit consectetur o.</p>  
      </div>
    </>
  )
}