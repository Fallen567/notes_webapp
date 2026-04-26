import express from "express";
import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/ratelimiter.js"

dotenv.config();

// launching express application
const app = express();

// middleware 
app.use(express.json()); // this middleware parses json bodies and gives access to req.body

app.use(ratelimiter); // ratelimiter middleware

app.use( (req,res,next) => { // this is our simple middleware logging 
    console.log(`Request recieved. Req Method is ${req.method} and Req URL is ${req.url}`);
    next();
})


// api routes
app.use("/api/notes", noteRoutes)

// connect to database and then start listening
connectDB().then(() => {
    app.listen(5001, () => {
        console.log("Server started running on port 5001");
    });
})