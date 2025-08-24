import { NextRequest, NextResponse } from 'next/server'
import { verifyToken, findUserById } from '@/lib/auth'
import { createBooking, isTimeSlotAvailable } from '@/lib/bookings'
import { sendBookingConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { date, time, type } = await request.json()
    
    // Get user from auth token
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const user = await findUserById(decoded.userId)
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Check if time slot is available
    if (!isTimeSlotAvailable(date, time)) {
      return NextResponse.json({ error: 'Time slot not available' }, { status: 400 })
    }

    // Create booking
    const booking = createBooking(user.id, type, date, time)

    // Send confirmation emails
    const duration = type === 'monthly' ? '30 minutes' : '1.5 hours'
    await sendBookingConfirmation(
      user.email,
      process.env.EMAIL_USER!,
      { type, date, time, duration }
    )

    return NextResponse.json({ 
      message: 'Booking created successfully',
      booking 
    })
  } catch (error) {
    console.error('Booking creation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}