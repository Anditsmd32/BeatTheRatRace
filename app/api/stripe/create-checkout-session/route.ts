import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { verifyToken, findUserById } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { priceType } = await request.json()
    
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

    let sessionConfig: any = {
      customer_email: user.email,
      success_url: `${process.env.NEXTAUTH_URL}/booking?session_id={CHECKOUT_SESSION_ID}&type=${priceType}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/services`,
      metadata: {
        userId: user.id,
        priceType
      }
    }

    if (priceType === 'monthly') {
      sessionConfig = {
        ...sessionConfig,
        mode: 'subscription',
        line_items: [
          {
            price_data: {
              currency: 'gbp',
              product_data: {
                name: 'Yield Insider Club - Monthly Membership',
                description: 'Monthly stablecoin yield updates, tutorials, and 30-minute consultation'
              },
              unit_amount: 5000, // £50.00
              recurring: {
                interval: 'month'
              }
            },
            quantity: 1
          }
        ]
      }
    } else {
      sessionConfig = {
        ...sessionConfig,
        mode: 'payment',
        line_items: [
          {
            price_data: {
              currency: 'gbp',
              product_data: {
                name: 'Done-With-You Consulting',
                description: '1.5 hour one-on-one consultation with personalized guidance'
              },
              unit_amount: 40000 // £400.00
            },
            quantity: 1
          }
        ]
      }
    }

    const session = await stripe.checkout.sessions.create(sessionConfig)

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe session creation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}