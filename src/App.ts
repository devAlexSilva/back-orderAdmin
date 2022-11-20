import path from 'node:path'
import express from 'express'
import mongoose from 'mongoose'
import { router } from './routes'


const app = express()
const port = process.env.PORT || 2727

mongoose
.connect('mongodb://localhost:27017')
.then(() => {
  app.use(express.json())
  
  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
  app.use(router)
  
  app.listen(port, () => console.log(`✅ http://localhost:${port}`))
  })
  .catch(err => console.log(err))
