'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const token = searchParams.get('token')
    
    if (!token) {
      setStatus('error')
      setMessage('Invalid verification link')
      return
    }

    // The verification is handled by the API route, this page is just for display
    setStatus('success')
    setMessage('Email verified successfully! Redirecting to services...')
    
    setTimeout(() => {
      window.location.href = '/services'
    }, 3000)
  }, [searchParams])

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
        <div className="container mx-auto max-w-md text-center">
          <div className="bg-white border-8 border-black p-8">
            {status === 'loading' && (
              <>
                <div className="animate-spin h-16 w-16 border-4 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
                <h1 className="text-2xl font-black mb-4">VERIFYING EMAIL...</h1>
              </>
            )}
            
            {status === 'success' && (
              <>
                <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-600" />
                <h1 className="text-2xl font-black mb-4 text-green-600">EMAIL VERIFIED!</h1>
                <p className="font-bold mb-4">{message}</p>
              </>
            )}
            
            {status === 'error' && (
              <>
                <AlertCircle className="h-16 w-16 mx-auto mb-4 text-red-600" />
                <h1 className="text-2xl font-black mb-4 text-red-600">VERIFICATION FAILED</h1>
                <p className="font-bold mb-4">{message}</p>
                <Link href="/auth" className="text-sm font-bold hover:bg-yellow-300 px-2 py-1 transition-colors">
                  TRY AGAIN
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}