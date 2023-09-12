
import mongoose from "mongoose";
const databaseUrl = process.env.DATABASE_URI;


async function connect() {
  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(process.env.DATABASE_URI);
  console.log("Database Connected at ", db.connection.host);
  return db;
}

export default connect;
