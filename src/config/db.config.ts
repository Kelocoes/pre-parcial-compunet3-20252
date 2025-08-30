import mongoose from "mongoose";

const connectionString = process.env.MONGO_URI || "";

if (!connectionString) {
    throw new Error("MONGO_URI is not defined. Please set it in your environment variables.");
}

export const db = mongoose.connect(connectionString, { dbName: 'db_example' })
    .then(() =>
        console.log("Connected to MongoDB")
    ).catch(
        (error) => console.error(error)
    )