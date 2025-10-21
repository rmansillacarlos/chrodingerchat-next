import { NextRequest, NextResponse } from "next/server"
import client from "@/lib/api/ai"
import { ChatMessage } from "@/types/chat/chat.types";

export async function POST(request: NextRequest) {
  const chatMessages: ChatMessage[] = await request.json()

  console.log("Prompt recibido: ", chatMessages[chatMessages.length - 1]);

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      ...chatMessages,
      { role: "system", content: "Give medium-length answers, from 8 to 12 lines maximum." },
    ],
  })

  const reply = response.choices[0].message.content
  console.log('Respuesta OPENAI: ', reply)

  return NextResponse.json({
    reply,
    timestamp: new Date().toISOString()
  })
}