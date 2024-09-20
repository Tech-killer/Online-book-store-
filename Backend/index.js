import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
const app = express();

import bookRoute from "./route/book.route.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// conect to mongoDB
try {
  mongoose.connect('mongodb://localhost:27017/myDatabaseName', {
    useNewUrlParser: true, // optional since you're on a newer version
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");

}catch (error) {
  console.log("Error: ", error);

}

// defining routes
app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})