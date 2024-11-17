import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <h1>こんにちは</h1>
  )
})

export default app
