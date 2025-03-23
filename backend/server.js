require("dotenv").config();
const http = require("http");
const { neon } = require("@neondatabase/serverless");
const sql = neon(process.env.DATABASE_URL);

const requestHandler = async (req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const { name, email, message } = JSON.parse(body);

        // Insert data into the database
        await sql`INSERT INTO users (name, email, message) VALUES (${name}, ${email}, ${message})`;

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, message: "Data inserted!" }));
      } catch (error) {
        console.error(error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, error: error.message }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
};

http.createServer(requestHandler).listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
