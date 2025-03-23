require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { neon } = require("@neondatabase/serverless");

const app = express();
const port = process.env.PORT || 5000;
const sql = neon(process.env.DATABASE_URL);

// Middleware
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON bodies

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Form submission route
app.post("/submit", async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await sql`INSERT INTO contacts (email, message) VALUES (${email}, ${message})`;

    res.json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
