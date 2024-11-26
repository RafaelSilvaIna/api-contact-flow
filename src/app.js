const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("./utils/logger");
const limiter = require("./middlewares/rateLimiter");
const errorHandler = require("./middlewares/errorHandler");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(limiter);

// Rotas
app.use("/api", contactRoutes);

// Middleware de erros
app.use(errorHandler);

module.exports = app;
