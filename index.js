const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const numberRouter = require("./routes/numberRouter");

dotenv.config({ path: `${__dirname}/config.env` });

const app = express();

// Middleware
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(cors());

// Route
app.use("/api/classify-number", numberRouter);

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
