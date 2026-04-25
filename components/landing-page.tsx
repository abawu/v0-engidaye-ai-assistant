'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Globe,
  Hotel,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  Utensils,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { sampleAnswers, sampleQuestions } from '@/lib/sample-data'

export function LandingPage({ onStart }: { onStart: () => void }) {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🇪🇹</div>
            <div>
              <h1 className="text-xl font-bold text-amber-400">Engidaye</h1>
              <p className="text-xs text-amber-600">Your AI Guide to Ethiopia</p>
            </div>
          </div>
          <Button
            onClick={() => setDemoOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
          >
            Start Exploring
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Discover the{' '}
                <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
                  Land of Origins
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Experience Ethiopia with Engidaye, your AI companion. Get personalized trip
                planning, authentic food guides, curated hotel recommendations, and cultural
                insights powered by advanced AI.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <FeatureCard
                icon={MapPin}
                title="Smart Trip Planning"
                description="Personalized itineraries based on your duration and budget"
              />
              <FeatureCard
                icon={Utensils}
                title="Food & Recipes"
                description="Authentic Ethiopian cuisine with step-by-step instructions"
              />
              <FeatureCard
                icon={Hotel}
                title="Hotel Recommendations"
                description="Curated stays matching your preferences and budget"
              />
              <FeatureCard
                icon={Globe}
                title="Language Translation"
                description="English-Amharic translation and key phrases"
              />
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => setDemoOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-bold mt-8 gap-2"
            >
              Begin Your Journey <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30">
            <Image
              src="/ethiopian-culture.jpg"
              alt="Ethiopian Culture and Heritage"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 sm:px-6 bg-amber-500/5 border-y border-amber-500/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Engidaye Offers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HighlightCard
              number="01"
              title="AI-Powered Guidance"
              description="Chat with an AI expert in Ethiopian travel, culture, and cuisine. Ask anything and get instant, personalized responses."
              color="from-amber-500"
            />
            <HighlightCard
              number="02"
              title="Authentic Experiences"
              description="Discover real Ethiopian destinations, local markets, traditional ceremonies, festivals, and cultural landmarks."
              color="from-red-500"
            />
            <HighlightCard
              number="03"
              title="Budget-Smart Planning"
              description="Get trip recommendations tailored to your budget. From luxury experiences to budget-friendly adventures."
              color="from-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Ethiopian Touch Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-amber-900/20 to-red-900/20 border border-amber-500/30 rounded-2xl p-8 sm:p-12">
            <div className="flex items-start gap-4 mb-4">
              <Sparkles className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-3">
                  Why Choose Engidaye?
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-amber-400">✓</span>
                    <span>
                      <strong>Local Expert Knowledge:</strong> Deep understanding of Ethiopia&apos;s
                      rich heritage and hidden gems
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">✓</span>
                    <span>
                      <strong>24/7 Availability:</strong> Get instant answers anytime, anywhere
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">✓</span>
                    <span>
                      <strong>Personalized Recommendations:</strong> Tailored suggestions based on
                      your preferences and budget
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400">✓</span>
                    <span>
                      <strong>Cultural Respect:</strong> Learn and appreciate Ethiopian traditions
                      authentically
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Explore Ethiopia?
          </h3>
          <p className="text-xl text-slate-300">
            Start chatting with Engidaye now and plan your unforgettable journey
          </p>
          <Button
            onClick={() => setDemoOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-bold gap-2"
          >
            Start Chatting <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/20 py-8 px-4 sm:px-6 bg-black/40">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>Engidaye - Your AI Guide to Ethiopia &copy; 2024</p>
        </div>
      </footer>

      <SampleChatDemo
        open={demoOpen}
        onOpenChange={setDemoOpen}
        onStartFullChat={onStart}
      />
    </div>
  )
}

function SampleChatDemo({
  open,
  onOpenChange,
  onStartFullChat,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onStartFullChat: () => void
}) {
  const [selectedQuestion, setSelectedQuestion] = useState(sampleQuestions[0])
  const answer = sampleAnswers[selectedQuestion]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-4xl overflow-hidden border-amber-300/50 bg-slate-950 p-0 text-white shadow-2xl">
        <div className="grid min-h-[620px] grid-cols-1 md:grid-cols-[290px_1fr]">
          <aside className="border-b border-amber-500/20 bg-slate-900 p-5 md:border-b-0 md:border-r">
            <DialogHeader>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-amber-400 text-slate-950">
                <MessageCircle className="h-5 w-5" />
              </div>
              <DialogTitle className="text-2xl text-amber-300">
                Sample travel chat
              </DialogTitle>
              <DialogDescription className="text-slate-300">
                Preview Engidaye with ready-made answers while the live AI API is
                being connected.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-2">
              {sampleQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => setSelectedQuestion(question)}
                  className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${
                    selectedQuestion === question
                      ? 'border-amber-400 bg-amber-400 text-slate-950'
                      : 'border-white/10 bg-white/5 text-slate-200 hover:border-amber-300/70 hover:bg-white/10'
                  }`}
                >
                  {question}
                </button>
              ))}
            </div>

            <Button
              onClick={() => {
                onOpenChange(false)
                onStartFullChat()
              }}
              variant="outline"
              className="mt-6 w-full border-amber-400/70 bg-transparent text-amber-300 hover:bg-amber-400 hover:text-slate-950"
            >
              Open full chat
            </Button>
          </aside>

          <section className="flex min-h-0 flex-col bg-slate-50 text-slate-950">
            <div className="border-b border-slate-200 px-5 py-4">
              <p className="text-sm font-semibold text-slate-500">
                Tourist question
              </p>
              <div className="mt-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-sm font-medium text-white">
                {selectedQuestion}
              </div>
            </div>

            <ScrollArea className="min-h-0 flex-1">
              <div className="space-y-4 px-5 py-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 text-amber-300">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-6 shadow-sm">
                    <p className="mb-3 font-semibold text-slate-900">
                      Engidaye sample answer
                    </p>
                    <div className="whitespace-pre-wrap text-slate-700">
                      {answer}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>

            <div className="border-t border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                <span className="flex-1 truncate">
                  Ask about Lalibela, Addis Ababa, food, culture, or trip plans
                </span>
                <Button
                  size="sm"
                  onClick={() => setSelectedQuestion(sampleQuestions[1])}
                  className="bg-slate-900 text-amber-300 hover:bg-slate-800"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Try
                </Button>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <div className="bg-white/10 backdrop-blur border border-amber-500/20 rounded-lg p-4 hover:bg-white/20 transition-colors">
      <Icon className="w-6 h-6 text-amber-400 mb-3" />
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-sm text-slate-300">{description}</p>
    </div>
  )
}

function HighlightCard({
  number,
  title,
  description,
  color,
}: {
  number: string
  title: string
  description: string
  color: string
}) {
  return (
    <div className="bg-white/5 backdrop-blur border border-amber-500/20 rounded-xl p-8 hover:bg-white/10 transition-colors">
      <div className={`text-5xl font-bold bg-gradient-to-r ${color} to-transparent bg-clip-text text-transparent mb-4`}>
        {number}
      </div>
      <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  )
}
