const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

app.get("/", (req, res)=>{
  res.send("Server is live!");
})
const app = express();
app.use(express.json());

app.use("/register", userRoutes);
app.use("/appointments", appointmentRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("MongoDB Connected");

})
.catch((err)=>{
  console.error("DB Connection Error: ",err);
});

app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
})