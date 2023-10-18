const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();
const userRoute = require("./Routes/userRoute.js");
const charityRoute = require("./Routes/charityRoute.js");
var cors = require("cors");

app.use(express.json());

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));

const mongooseURL = process.env.DB_URL || "mongodb://0.0.0.0:27017/charitydb";

mongoose.connect(mongooseURL, {
  useNewUrlParser: true,
  //   useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("\x1b[36m%s\x1b[0m", "Database Connected successfully");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("\x1b[33m%s\x1b[0m", `Server is running at port ${port}`);
});

app.use("/users", userRoute);
app.use("/charity", charityRoute);
