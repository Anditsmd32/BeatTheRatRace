'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [booked, setBooked] = useState(false)
  const searchParams = useSearchParams()
  
  const type = searchParams.get('type') as 'monthly' | 'oneoff'
  const sessionId = searchParams.get('session_id')

  const isMonthly = type === 'monthly'
  const timeRange = isMonthly ? '3:00 PM - 7:00 PM' : '7:00 PM - 10:00 PM'
  const duration = isMonthly ? '30 minutes' : '1.5 hours'

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots()
    }
  }, [selectedDate, type])

  const fetchAvailableSlots = async () => {
    try {
      const response = await fetch(`/api/bookings/available-slots?date=${selectedDate}&type=${type}`)
      const data = await response.json()
      setAvailableSlots(data.availableSlots || [])
    } catch (error) {
      console.error('Error fetching slots:', error)
    }
  }

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return

    setLoading(true)
    try {
      const response = await fetch('/api/bookings/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          type
        })
      })

      if (response.ok) {
        setBooked(true)
      } else {
        alert('Booking failed. Please try again.')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    return `${displayHour}:${minutes} ${ampm}`
  }

  if (booked) {
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
          <div className="container mx-auto max-w-2xl text-center">
            <div className="bg-white border-8 border-black p-8">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-600" />
              <h1 className="text-4xl font-black mb-4 text-green-600">BOOKING CONFIRMED!</h1>
              
              <div className="bg-yellow-300 border-4 border-black p-6 mb-6">
                <h2 className="text-2xl font-black mb-4">YOUR CONSULTATION</h2>
                <div className="space-y-2 text-left">
                  <p><strong>Date:</strong> {selectedDate}</p>
                  <p><strong>Time:</strong> {formatTime(selectedTime)}</p>
                  <p><strong>Duration:</strong> {duration}</p>
                  <p><strong>Type:</strong> {isMonthly ? 'Monthly Membership Consultation' : 'Done-With-You Consulting'}</p>
                </div>
              </div>

              <p className="font-bold mb-6">
                Confirmation emails have been sent to you and our team. 
                We'll send you a meeting link 24 hours before your consultation.
              </p>

              <Button className="bg-black text-white hover:bg-stone-800 text-xl px-8 py-4 font-bold border-4 border-black" asChild>
                <Link href="/insiders-club">ACCESS MEMBER AREA →</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
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
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white border-8 border-black p-8">
            <div className="text-center mb-8">
              <Calendar className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl font-black mb-4">BOOK YOUR CONSULTATION</h1>
              <div className="bg-yellow-300 border-4 border-black p-4">
                <p className="font-bold">
                  {isMonthly ? 'Monthly Membership Consultation' : 'Done-With-You Consulting'}
                </p>
                <p className="text-sm font-bold">
                  Duration: {duration} • Available: {timeRange}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">SELECT DATE</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border-4 border-black font-bold text-lg focus:outline-none focus:bg-yellow-100"
                />
              </div>

              {selectedDate && (
                <div>
                  <label className="block text-sm font-bold mb-2">SELECT TIME</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`p-3 border-4 border-black font-bold text-sm transition-colors ${
                          selectedTime === slot
                            ? 'bg-yellow-300 text-black'
                            : 'bg-white text-black hover:bg-stone-100'
                        }`}
                      >
                        {formatTime(slot)}
                      </button>
                    ))}
                  </div>
                  {availableSlots.length === 0 && (
                    <p className="text-red-600 font-bold text-sm mt-2">
                      No available slots for this date. Please select another date.
                    </p>
                  )}
                </div>
              )}

              <Button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime || loading}
                className="w-full bg-black text-white hover:bg-stone-800 text-xl py-4 font-bold border-4 border-black transform hover:scale-105 transition-transform disabled:opacity-50 disabled:transform-none"
              >
                <Clock className="h-5 w-5 mr-2" />
                {loading ? 'BOOKING...' : 'CONFIRM BOOKING →'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}