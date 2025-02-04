const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const { getNumber } = require("./routes/number");
const cors = require("cors");

dotenv.config({ path: `${__dirname}/config.env` });

const app = express();

// Middleware
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(cors());

// Route
app.route("/api/classify-number").get(getNumber);

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
