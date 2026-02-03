import { db } from './connection.ts'
import { users, counters } from './schema.ts'

const seed = async () => {
  console.log('🌱 Starting database seed...')

  try {
    console.log('Clearign existing data....')
    await db.delete(users)
    await db.delete(counters)

    console.log('Creating demo users...')
    const [demoUser] = await db
      .insert(users)
      .values({
        email: 'demo@app.com',
        password: 'password',
        firstName: 'demo',
        lastName: 'person',
        username: 'demo',
      })
      .returning()

    console.log('Creating counters...')
    const [ticketCounter] = await db
      .insert(counters)
      .values({
        userId: demoUser.id,
        name: 'Tickets',
        description: 'A simple counter for tickets',
        currentCount: 0,
        targetCount: 10,
      })
      .returning()
    const [testCounter] = await db
      .insert(counters)
      .values({
        userId: demoUser.id,
        name: 'Testing',
        description: 'This is a demo counter',
        currentCount: 0,
        targetCount: 5,
      })
      .returning()
    console.log('✅ DB seeded successfully')
    console.log('user credentials:')
    console.log(`email: ${demoUser.email}`)
    console.log(`username: ${demoUser.username}`)
    console.log(`password: ${demoUser.password}`)
  } catch (e) {
    console.log('😩 seed failed', e)
    process.exit(1)
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  seed()
    .then(() => process.exit(0))
    .catch((e) => process.exit(1))
}
