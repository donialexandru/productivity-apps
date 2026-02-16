import type { Request, Response } from 'express'
import { db } from '../db/connection.ts'
import { and, asc, desc, eq } from 'drizzle-orm'
import { counters } from '../db/schema.ts'
import type { TypedRequestBody } from '../utils/types.ts'
import type { CreateCounterInput } from 'shared'

export const getUserCounters = async (req: Request, res: Response) => {
  try {
    const userId = '738c550e-b543-4e9f-baa8-8a6b4a2987db'

    const userCounters = await db.query.counters.findMany({
      where: eq(counters.userId, userId),
      orderBy: [asc(counters.createdAt)],
    })

    res.json({
      counters: userCounters,
    })
  } catch (error) {
    console.error('Get counters error:', error)
    res.status(500).json({ error: 'Failed to fetch hagits' })
  }
}

export const createUserCounter = async (
  req: TypedRequestBody<CreateCounterInput>,
  res: Response,
) => {
  try {
    const userId = '738c550e-b543-4e9f-baa8-8a6b4a2987db'

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

export const deleteUserCounter = async (req: Request, res: Response) => {
  try {
    const userId = '738c550e-b543-4e9f-baa8-8a6b4a2987db'

    const { id } = req.params

    const [deletedCounter] = await db
      .delete(counters)
      .where(and(eq(counters.id, id), eq(counters.userId, userId)))
      .returning()

    if (!deletedCounter) {
      return res.status(404).json({ error: 'Counter not found' })
    }

    res
      .json({
        message: 'Counter deleted successfully',
      })
      .status(200)
  } catch (error) {
    console.error('Delete counter error', error)
    res.status(500).json({ error: 'Failed to delete habit' })
  }
}
