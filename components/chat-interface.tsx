'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

export function ChatInterface() {
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="border-b border-amber-200 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🇪🇹</div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Engidaye</h1>
              <p className="text-sm text-amber-700">Your AI Guide to Ethiopia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <ScrollArea className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto w-full px-4 py-6 sm:px-6 space-y-4">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-64 flex-col gap-4">
              <div className="text-6xl">🌍</div>
              <div className="text-center">
                <h2 className="text-xl font-semibold text-amber-900 mb-2">
                  Welcome to Ethiopia
                </h2>
                <p className="text-amber-700 max-w-sm">
                  Ask me about trip planning, Ethiopian food, hotels, cultural
                  experiences, or Amharic translations. Let&apos;s explore
                  together!
                </p>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="text-2xl flex-shrink-0">🗣️</div>
                )}
                <div
                  className={`max-w-xl lg:max-w-2xl px-4 py-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-amber-600 text-white rounded-br-none'
                      : 'bg-white border border-amber-200 text-amber-900 rounded-bl-none shadow-sm'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.parts.map((part, index) => {
                      if (part.type === 'text') {
                        return <span key={index}>{part.text}</span>
                      }
                      return null
                    })}
                  </div>
                </div>
                {message.role === 'user' && (
                  <div className="text-2xl flex-shrink-0">👤</div>
                )}
              </div>
            ))
          )}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="text-2xl">🗣️</div>
              <div className="bg-white border border-amber-200 px-4 py-3 rounded-lg rounded-bl-none shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}

          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-amber-200 bg-white shadow-lg">
        <div className="max-w-4xl mx-auto w-full px-4 py-4 sm:px-6">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about trips, food, culture, or language..."
              disabled={isLoading}
              className="flex-1 border-amber-200 focus:border-amber-600 focus:ring-amber-600"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              {isLoading ? '...' : 'Send'}
            </Button>
          </form>
          <p className="text-xs text-amber-600 mt-2">
            Engidaye can help with trip planning, food guides, hotel
            recommendations, language translation, and cultural insights.
          </p>
        </div>
      </div>
    </div>
  )
}
