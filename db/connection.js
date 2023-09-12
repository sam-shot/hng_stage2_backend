import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
const databaseUrl = process.env.DATABASE_URI;


async function connect() {
  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(databaseUrl);
  console.log("Database Connected at ", db.connection.host);
  return db;
}

export default connect;
