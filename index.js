const express = require("express");
const userRouter = require("./routes/user");
require("dotenv").config();
const { connectMongoDB } = require("./config");

const PORT = process.env.PORT || 8008;


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectMongoDB().then(() => {
  console.log("Database conncted.");
});

app.use("/api/users", userRouter);
app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
});
