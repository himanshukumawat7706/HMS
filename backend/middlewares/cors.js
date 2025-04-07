const cors = require("cors");

const corsOptions = {
  origin: "https://hms-chi-ten.vercel.app", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT"],
  credentials: true,
  optionSuccessStatus: 200,
};

module.exports = cors(corsOptions);
