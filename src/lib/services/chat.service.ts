import api from "@/lib/api"
import { ChatMessage } from "@/types/chat/chat.types"

export const generateResponse = async (messages: ChatMessage[]) => {
  const response = await api.post("/chat", messages)
  return response.data
}