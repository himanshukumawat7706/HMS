const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5174", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  optionSuccessStatus: 200,
};

module.exports = cors(corsOptions);
