const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, { useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((err) => {
    throw new error("Oops an error connecting to MongoDB", err);
  });

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log(`Server is running on port:  ${port}`);
});
