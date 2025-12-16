const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const recipeRoutes = require("./routes/recipe.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/recipeBox")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/recipes", recipeRoutes);

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Recipe Box API" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
