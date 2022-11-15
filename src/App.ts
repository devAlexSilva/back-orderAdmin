import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 3001

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    app.listen(port, () => console.log(`✅ http://localhost:${port}`))
  })
  .catch(err => console.log(err))
