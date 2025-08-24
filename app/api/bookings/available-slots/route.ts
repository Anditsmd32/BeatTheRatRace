import { NextRequest, NextResponse } from 'next/server'
import { getAllBookings } from '@/lib/bookings'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const type = searchParams.get('type') as 'monthly' | 'oneoff'

    if (!date || !type) {
      return NextResponse.json({ error: 'Date and type required' }, { status: 400 })
    }

    const allBookings = getAllBookings()
    const bookedSlots = allBookings
      .filter(booking => booking.date === date)
      .map(booking => booking.time)

    // Define available time slots based on type
    const timeSlots = type === 'monthly' 
      ? ['15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'] // 3pm-7pm
      : ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'] // 7pm-10pm

    const availableSlots = timeSlots.filter(slot => !bookedSlots.includes(slot))

    return NextResponse.json({ availableSlots })
  } catch (error) {
    console.error('Available slots error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}