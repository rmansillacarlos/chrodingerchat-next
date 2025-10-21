interface ChatMessage {
  id: string
  content: string
  role: "user" | "assistant"
}

export type {
  ChatMessage
}