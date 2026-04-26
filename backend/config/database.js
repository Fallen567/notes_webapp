import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CREDS);
        console.log("DATABASE CONNECTED");
    } catch (error) {
        console.error("Error connecting to database",error);
        process.exit(1) // exit with failure
    }
}