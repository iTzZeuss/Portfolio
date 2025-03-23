const express = require("express");
const cors = require("cors");
const { neon } = require("@neondatabase/serverless");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(express.json());

// ✅ FIX: Allow requests from your frontend (alterapps.xyz)
app.use(
  cors({
    origin: "https://www.alterapps.xyz", // ✅ Change this to your frontend URL
    methods: "POST, GET, OPTIONS",
    allowedHeaders: "Content-Type",
  })
);

const sql = neon(process.env.DATABASE_URL);

app.post("/submit", async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required" });
    }

    await sql`INSERT INTO contacts (email, message) VALUES (${email}, ${message})`;

    res.json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
