const express = require("express");
const database = require("./database/database");
const JobRoutes = require("./routes/JobRoute");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

database.Connect();


app.get("/", (req, res) => {
  return res.send("Hello ");
});



app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/v1", JobRoutes);

app.listen(process.env.PORT, () => {
  console.log("App is listening at Port : 5000");
});
