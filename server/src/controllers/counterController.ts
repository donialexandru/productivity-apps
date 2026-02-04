import type { Request, Response } from 'express'
import { db } from '../db/connection.ts'
import { desc, eq } from 'drizzle-orm'
import { counters } from '../db/schema.ts'

export const getUserCounters = async (req: Request, res: Response) => {
  try {
    const userId = '56aa5396-947a-4b38-9a94-3acbcb63dcac'

    const userCounters = await db.query.counters.findMany({
      where: eq(counters.userId, userId),
      orderBy: [desc(counters.cratedAt)],
    })

    res.json({
      counters: userCounters,
    })
  } catch (error) {
    console.error('Get counters error:', error)
    res.status(500).json({ error: 'Failed to fetch hagits' })
  }
}

export const createUserCounter = async (req: Request, res: Response) => {
  try {
    const userId = '56aa5396-947a-4b38-9a94-3acbcb63dcac'

    const { name, targetCount } = req.body

    const [newCounter] = await db
      .insert(counters)
      .values({
        userId,
        name,
        targetCount,
      })
      .returning()
    res.json({
      newCounter: newCounter,
    })
  } catch (error) {
    console.error('Create new counter error:', error)
    res.status(500).json({ error: 'Failed to create a new counter' })
  }
}
