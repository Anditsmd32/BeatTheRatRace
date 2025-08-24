import { NextRequest, NextResponse } from 'next/server'
import { createUser, findUserByEmail, generateToken } from '@/lib/auth'
import { sendVerificationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await findUserByEmail(email)
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    // Create user
    const user = await createUser(email, password)
    
    // Generate verification token
    const verificationToken = generateToken(user.id)
    
    // Send verification email
    await sendVerificationEmail(email, verificationToken)

    return NextResponse.json({ 
      message: 'User created successfully. Please check your email to verify your account.',
      userId: user.id 
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}