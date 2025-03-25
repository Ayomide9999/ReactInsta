import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI environment variable not defined");
}
let connection = {};

const connectToDb = async () => {
  try {
    //usign already estalblished connection
    if (connection.isconnected) {
      console.log("Already connectednto the database");
      return;
    }
    //tryn to connect to db if we are not connected
    const db = await mongoose.connect(mongoUri, {
      dbName: "Instavclone",
      serverSelectionTimeoutMS: 45000,
      socketTimeoutMS: 5000,
    });
    connection.isconnected = db.connections[0].readyState === 1;

    if (connection.isconnected) {
      console.log("MongoDb connected successfully");

      //handle connection events
      mongoose.connection.on("error", (err) => {
        console.error("Mongodb connection error", err);
      });
      mongoose.connection.on("disconnected", () => {
        console.log("Mangodb disconnected");
        connection.isconnected = false;
      });
      process.on("SIGINT", async () => {
        await mongoose.connection.close;
        console.log("Mongodb connection closed through app termination");
        process.exit(0);
      });
    }
  } catch (error) {
    console.error("Mongodb connection failed", error.message);
    connection.isconnected = false;
    throw new Error("Failed to connect to MongoDb", error.message);
  }
};

export default connectToDb;
