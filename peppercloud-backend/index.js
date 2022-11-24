const express = require("express");

const app = express();
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/pappercloud";
const cors = require("cors");
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const conn = mongoose.connection;

conn.on("open", () => {
  console.log("DB connected!!");
});

app.use(express.json());
app.use(cors());
const router = require("./routes/pappercloudRoutes");
app.use("/pappercloud", router);
const port = 3000;
app.listen(port, () => {
  console.log(`Connected to server ${port}`);
});
