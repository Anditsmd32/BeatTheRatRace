export interface Booking {
  id: string
  userId: string
  type: 'monthly' | 'oneoff'
  date: string
  time: string
  createdAt: Date
}

// In-memory booking storage (replace with database in production)
const bookings: Booking[] = []

export function createBooking(userId: string, type: 'monthly' | 'oneoff', date: string, time: string): Booking {
  const booking: Booking = {
    id: Math.random().toString(36).substr(2, 9),
    userId,
    type,
    date,
    time,
    createdAt: new Date()
  }
  bookings.push(booking)
  return booking
}

export function isTimeSlotAvailable(date: string, time: string): boolean {
  return !bookings.some(booking => booking.date === date && booking.time === time)
}

export function getBookingsByUser(userId: string): Booking[] {
  return bookings.filter(booking => booking.userId === userId)
}

export function getAllBookings(): Booking[] {
  return bookings
}