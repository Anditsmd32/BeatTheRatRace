'use client'

import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export default function ServicesPage() {
  const handlePayment = async (priceType: 'monthly' | 'oneoff') => {
    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceType })
      })

      const { sessionId } = await response.json()
      
      if (response.ok) {
        const stripe = await stripePromise
        await stripe?.redirectToCheckout({ sessionId })
      } else {
        // User not authenticated, redirect to auth page
        window.location.href = '/auth'
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 font-mono">
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/bttr-logo.jpeg"
                  alt="Beat The Rat Race Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight">BEAT THE</div>
                <div className="text-xs font-bold text-stone-600 -mt-1">RAT RACE</div>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/guides" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                GUIDES
              </Link>
              <Link href="/services" className="text-black font-bold bg-yellow-300 px-3 py-1">
                SERVICES
              </Link>
              <Link href="/about" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                ABOUT
              </Link>
              <Link href="/contact" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                CONTACT
              </Link>
              <Link
                href="/insiders-club"
                className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors"
              >
                INSIDERS CLUB
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-stone-900 transform -rotate-12 -translate-x-24 translate-y-24"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 text-center">
            <div className="text-black">CHOOSE</div>
            <div className="text-yellow-400 bg-black px-4 py-2 inline-block transform rotate-1 my-2">YOUR</div>
            <div className="text-black">PATH</div>
          </h1>

          <div className="bg-stone-100 p-6 border-l-8 border-black mb-12 transform -skew-x-1 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-black text-center">
              Whether you want to learn at your own pace or get hands-on help, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-yellow-300 border-8 border-black p-8 transform hover:scale-105 transition-transform">
              <div className="bg-black text-white px-4 py-2 inline-block mb-6 font-bold text-sm">MOST POPULAR</div>
              <h2 className="text-4xl font-black mb-4">THE YIELD INSIDER CLUB</h2>
              <p className="font-bold text-lg mb-8">Monthly Membership</p>

              <div className="space-y-4 mb-8">
                {[
                  "Monthly stablecoin yield opportunities report",
                  "Step-by-step video tutorials",
                  "30 minute consultation each month",
                  "Member-only guides and templates",
                  "New video guides regularly",
                  "Easy Tax Returns",
                  "Ongoing Support",
                  "Risk assessment tools",
                  "Portfolio tracking spreadsheets",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-black flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="text-6xl font-black mb-2">
                  £50<span className="text-3xl">/MONTH</span>
                </div>
                <div className="text-sm font-bold">CANCEL ANYTIME</div>
              </div>

              <Button 
                onClick={() => handlePayment('monthly')}
                className="w-full bg-black text-white hover:bg-stone-800 text-xl py-6 font-bold border-4 border-black mb-4"
              >
                JOIN THE CLUB →
              </Button>

              <div className="text-center">
                <p className="text-sm font-bold">7-DAY FREE TRIAL</p>
              </div>
            </div>

            <div className="bg-white border-8 border-black p-8 transform hover:scale-105 transition-transform">
              <div className="bg-stone-800 text-white px-4 py-2 inline-block mb-6 font-bold text-sm">PREMIUM</div>
              <h2 className="text-4xl font-black mb-4">DONE-WITH-YOU CONSULTING</h2>
              <p className="font-bold text-lg mb-8">One-Time Session</p>

              <div className="space-y-4 mb-8">
                {[
                  "1-to-1 voice/video call",
                  "Personalized yield strategy",
                  "Live wallet setup & security",
                  "Protocol walkthrough & setup",
                  "Guaranteed earning from Day 1",
                  "Risk assessment for your situation",
                  "Easy Tax Returns",
                  "Follow-up email summary",
                  "30-day support included",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-black flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="text-6xl font-black mb-2">£400</div>
                <div className="text-sm font-bold">ONE-TIME PAYMENT</div>
              </div>

              <Button 
                onClick={() => handlePayment('oneoff')}
                className="w-full bg-white text-black hover:bg-yellow-300 text-xl py-6 font-bold border-4 border-black mb-4"
              >
                BOOK MY CALL →
              </Button>

              <div className="text-center">
                <p className="text-sm font-bold">SATISFACTION GUARANTEED</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-8">
            <span className="bg-yellow-300 text-black px-6 py-3 inline-block transform -rotate-1">
              NOT SURE WHICH TO CHOOSE?
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-stone-800 border-4 border-stone-600 p-6">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-black mb-4">CHOOSE MEMBERSHIP IF:</h3>
              <ul className="text-left space-y-2 font-medium">
                <li>• You want ongoing support</li>
                <li>• You prefer learning at your own pace</li>
                <li>• You're just getting started</li>
                <li>• You want monthly consultations</li>
              </ul>
            </div>

            <div className="bg-stone-800 border-4 border-stone-600 p-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-black mb-4">CHOOSE CONSULTING IF:</h3>
              <ul className="text-left space-y-2 font-medium">
                <li>• You want personalized guidance</li>
                <li>• You have specific questions</li>
                <li>• You want to get set up quickly</li>
                <li>• You prefer 1-to-1 support</li>
              </ul>
            </div>
          </div>

          <Button
            className="bg-yellow-300 text-black hover:bg-yellow-400 text-xl px-12 py-6 font-black border-4 border-yellow-300 transform hover:scale-110 transition-transform"
            asChild
          >
            <Link href="/contact">STILL HAVE QUESTIONS? →</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}