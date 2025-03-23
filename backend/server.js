const express = require("express");
const cors = require("cors");
const { neon } = require("@neondatabase/serverless");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(express.json()); // ✅ Allows JSON body parsing
app.use(cors()); // ✅ Allows cross-origin requests

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
