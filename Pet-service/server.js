const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

dotenv.config();
const app = express();
app.use(express.json());

app.get("/",(req, res)=>{
  res.send("Server is live!");
})

app.use("/register", userRoutes);
app.use("/appointments", appointmentRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });