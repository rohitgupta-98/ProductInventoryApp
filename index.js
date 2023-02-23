// Imports
const express = require("express");
const mongoose = require("mongoose");

// Middlewares
const app = express();
app.use(express.json());

// Port
const port = process.env.PORT || 4000;

// Import Routes
const productRoute = require("./routes");
app.use("/product", productRoute);

// DB connection
mongoose
  .connect('mongodb://127.0.0.1:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to mongodb.');
  })
  .catch((error) => {
    console.log(error);
  });

// Starting server
app.listen(4000, () => console.log("Server is starting on port", port));
