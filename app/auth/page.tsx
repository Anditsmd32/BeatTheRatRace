'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { User, Mail, Lock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (response.ok) {
        if (isLogin) {
          window.location.href = '/services'
        } else {
          setMessage('Registration successful! Please check your email to verify your account.')
        }
      } else {
        setMessage(data.error || 'An error occurred')
      }
    } catch (error) {
      setMessage('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 font-mono">
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-6">
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
        </div>
      </header>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-md">
          <div className="bg-white border-8 border-black p-8 transform hover:scale-105 transition-transform">
            <div className="text-center mb-8">
              <User className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl font-black mb-4">
                {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
              </h1>
              <p className="text-lg font-bold text-stone-600">
                {isLogin ? 'Welcome back to the club' : 'Join the Yield Insider Club'}
              </p>
            </div>

            {message && (
              <div className={`p-4 mb-6 border-4 ${
                message.includes('successful') ? 'bg-green-100 border-green-600' : 'bg-red-100 border-red-600'
              }`}>
                <p className="font-bold text-sm">{message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-stone-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-4 border-black font-bold text-lg focus:outline-none focus:bg-yellow-100"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="password">
                  PASSWORD
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-stone-400" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-4 border-black font-bold text-lg focus:outline-none focus:bg-yellow-100"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white hover:bg-stone-800 text-xl py-4 font-bold border-4 border-black transform hover:scale-105 transition-transform"
              >
                {loading ? 'PROCESSING...' : (isLogin ? 'SIGN IN →' : 'CREATE ACCOUNT →')}
              </Button>
            </form>

            <div className="text-center mt-6">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm font-bold hover:bg-yellow-300 px-2 py-1 transition-colors"
              >
                {isLogin ? "Don't have an account? CREATE ONE" : 'Already have an account? SIGN IN'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}