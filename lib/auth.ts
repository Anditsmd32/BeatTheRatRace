import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'

export interface User {
  id: string
  email: string
  password?: string
  isVerified: boolean
  subscriptionStatus?: 'active' | 'inactive'
  subscriptionId?: string
  createdAt: Date
}

// In-memory user storage (replace with database in production)
const users: User[] = []

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string }
  } catch {
    return null
  }
}

export async function createUser(email: string, password: string): Promise<User> {
  const hashedPassword = await hashPassword(password)
  const user: User = {
    id: Math.random().toString(36).substr(2, 9),
    email,
    password: hashedPassword,
    isVerified: false,
    createdAt: new Date()
  }
  users.push(user)
  return user
}

export async function findUserByEmail(email: string): Promise<User | null> {
  return users.find(user => user.email === email) || null
}

export async function findUserById(id: string): Promise<User | null> {
  return users.find(user => user.id === id) || null
}

export async function updateUser(id: string, updates: Partial<User>): Promise<User | null> {
  const userIndex = users.findIndex(user => user.id === id)
  if (userIndex === -1) return null
  
  users[userIndex] = { ...users[userIndex], ...updates }
  return users[userIndex]
}