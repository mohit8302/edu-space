require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Import Routes
const schoolRoutes = require("./routes/schools");
app.use("/api/schools", schoolRoutes);




// Start Server
app.listen(port, () => console.log(`Server running on port ${port}`));
