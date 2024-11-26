const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Máximo de 100 requisições por IP
  message: { error: "Muitas requisições. Tente novamente mais tarde." },
});

module.exports = limiter;
