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
