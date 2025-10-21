"use client"

import { marked } from "marked"
import { ChatMessage } from "@/types/chat/chat.types"

interface Props {
  messages: ChatMessage[]
}

const AssistantMessage = ({ content }: { content: string }) => (
  <p
    className="whitespace-break-spacess"
    dangerouslySetInnerHTML={{ __html: marked(content) }}
  />
)

export default function Body({ messages }: Props) {
  return (
    <div className="mx-auto max-w-4xl flex flex-col space-y-3">
      { messages.map(({ id, content, role }) => 
        role === "assistant" ? (
          <AssistantMessage key={id} content={content} />
        ) : (
          <span 
            key={id}
            className="my-4 ml-auto py-2 px-4 bg-stone-200 rounded-full rounded-br-none" 
          >
            { content }
          </span>
        )
      ) }
    </div>
  )
}