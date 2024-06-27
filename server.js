import mongoose from "mongoose";
const { connect } = mongoose;

import { config } from "dotenv";

config({
  path: "./.env",
});
const database = process.env.DATABASE

// Connect the database
connect(database, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((con) => {
  console.log("DB connection Successfully!");
});
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!!! shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

import app from "./app.js";

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});

// Close the Server
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!!!  shutting down ...");
  console.log(err.name, err.message);
  // server.close(() => {
  //   process.exit(1);
  // });
});
