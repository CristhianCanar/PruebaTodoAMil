import express from 'express'
import cors from 'cors'
// import personRouter from './routes/persons'
import indexRoutes from './routes/index'
const app = express()
app.use(express.json()) // middleware qie transforma la req.body a un json

const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/ping', (_req, res) => {
  console.log('someone ping here!!')
  res.send('pong')
})

// app.use('/api/persons', personRouter)
app.use('/api', indexRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
