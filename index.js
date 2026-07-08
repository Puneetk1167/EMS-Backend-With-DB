const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const employeeRoutes = require("./routes/employeeRoutes");

const loggerMiddleware = require("./middleware/loggerMiddleware");

// Middleware

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Routes

app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {

  res.send("Employee Management API Running");

});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });
