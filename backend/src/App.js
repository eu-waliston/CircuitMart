const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config;

const api = express();

require("../config/databse");

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(cors());
api.use(helmet());

const rootRouter = require("./routes/root");
const userRouter = require("./routes/user.router");
const productsRouter = require("./routes/product.router");
api.use("/", rootRouter);
api.use("/", productsRouter);
api.use("/", userRouter);

api.listen(process.env.PORT, () => {
  console.log(`App Listening on PORT ${process.env.PORT} 🚀`);
});
