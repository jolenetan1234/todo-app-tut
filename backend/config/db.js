// for connecting to MongoDB
import mongoose from "mongoose";
// require("dotenv").config();
// const DB = "mongodb+srv://admin:paasword@cluster0.f8ickc9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DB = process.env.MONGO_URI;

// connect to database
// NOTE: `mongoose.connect(mongoDB)` returns a promise.
// METHOD 1: using promise
const connectDB = () => {
    return mongoose.connect(DB)
    .then(() => {
        console.log("Successfully connected to MongoDB");
    }) .catch((err) => {
        // console.error(err.message);
        process.exit(1);
    });
};

// METHOD 2: async/await
// const connectDB = async () => {
//     try {
//         await mongoose.connect(DB, {
//             userNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("Successfully connected to MongoDB");
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     };
// };

export default connectDB;