'use client'

import { useState } from 'react'
import { ChatInterface } from '@/components/chat-interface'
import { LandingPage } from '@/components/landing-page'

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  if (!showChat) {
    return <LandingPage onStart={() => setShowChat(true)} />
  }

  return <ChatInterface onBack={() => setShowChat(false)} />
}
