// server.js
import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// import routes
import todoRoutes from "./routes/todo.js";

// import function to connect database
import connectDB from "./config/db.js";

const app = express();

// connect database
// connectDB defined in /config/db.js
connectDB();

// cors (so we can make API calls from frontend)
app.use(cors({ origin: true, credentials: true }));

// initialise middleware
// set up a GET method for the endpoint "http://localhost:8000"
app.use(bodyParser.json());
app.use(express.json({ extended: false })); // parses JSON in req body, converting to JS object
app.get("/", (req, res, next) => {
    res.send("Server up and running");
});

// use routes
app.use("/api/todo/", todoRoutes);

// set PORT to process.env.PORT, or 8000 (as default)
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});