import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const nextRebaseInterval = process.env.INTERVAL

const nextRebase = {
  interval: parseInt(nextRebaseInterval),
  seconds: nextRebaseInterval,
}

app.use(
  cors({
    origin:
      process.env.MODE === 'dev' ? 'http://localhost:3000' : process.env.URL,
  })
)

setInterval(() => {
  if (nextRebase.seconds === 0) {
    nextRebase.seconds = nextRebaseInterval
  } else {
    nextRebase.seconds -= 1
  }
}, 1000)

app.get('/next-rebase', (req, res) => {
  res.json(nextRebase)
})

app.listen(process.env.PORT || 3001)
