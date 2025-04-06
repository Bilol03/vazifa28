import { connectDB } from './config/db.js'
import express from 'express'
import { config } from 'dotenv'
config()

let app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))


connectDB()
app.listen(process.env.PORT, () => console.log("This server is running on " + process.env.PORT))
