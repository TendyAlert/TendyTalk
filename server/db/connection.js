import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

const uri = process.env.ATLAS_URI || "";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function connectDB() {
  try {
    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return client.db("Users Collection")
  } catch (error) {
    console.error("Error from connection.js", error)
    throw error;
  }
}

export default connectDB;