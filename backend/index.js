const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter = require("./routes/authrouter");
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.send("music app is just started");
});
app.use(express.json());
app.use(cors());
app.use(authRouter);
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(`server running on http://localhost:${process.env.PORT}`);
    })
    .catch((error) => {
      console.log(error);
    });
});
