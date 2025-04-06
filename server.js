import { errController } from './controllers/error.controller.js'
import { connectDB } from './config/db.js'
import authRoute from "./routes/auth.routes.js"
import { config } from 'dotenv'
import express from 'express'
config()

let app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/auth', authRoute)

connectDB()
app.use(errController);


process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION 💥");

    console.log(err.name, err.message);
    // process.exit(1);
  });
  
  // Unhandled Excpections
  process.on("uncaughtException", (err) => {
    console.log("UNHANDLED Excpections 💥");
    console.log(err.name, err.message);
    // process.exit(1);
});
app.listen(process.env.PORT, () => console.log("This server is running on " + process.env.PORT))
