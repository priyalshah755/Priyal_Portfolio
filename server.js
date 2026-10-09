require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
  subject: { type: String, trim: true, maxlength: 120, default: "" },
  message: { type: String, required: true, trim: true, maxlength: 3000 },
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model("Contact", contactSchema);

const projects = [
  {
    title: "Airbnb Clone",
    category: "Full-stack web application",
    description: "A vacation-rental listing application with property pages and a responsive interface.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    icon: "⌂",
    url: "https://github.com/"
  },
  {
    title: "SigmaGPT",
    category: "AI web application",
    description: "An AI-inspired chat interface designed to make digital conversations simple and accessible.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "Bootstrap"],
    icon: "✳",
    url: "https://github.com/"
  },
  {
    title: "Memory Game",
    category: "Interactive browser game",
    description: "A browser-based matching game that challenges players to find matching pairs.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "▦",
    url: "https://github.com/"
  }
];

app.get("/", (req, res) => {
  res.render("index", {
    projects,
    success: req.query.sent === "1",
    error: req.query.error || ""
  });
});

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.redirect("/?error=Please%20enter%20a%20valid%20name%2C%20email%20and%20message#contact");
  }
  if (mongoose.connection.readyState !== 1) {
    return res.redirect("/?error=Database%20is%20not%20connected.%20Please%20configure%20MongoDB.#contact");
  }
  try {
    await Contact.create({ name, email, subject, message });
    res.redirect("/?sent=1#contact");
  } catch (err) {
    console.error("Contact form error:", err.message);
    res.redirect("/?error=Message%20could%20not%20be%20saved.%20Please%20try%20again.#contact");
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", database: mongoose.connection.readyState === 1 ? "connected" : "disconnected" });
});

async function start() {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected.");
    } catch (err) {
      console.error("MongoDB connection failed:", err.message);
      console.log("The site can load, but the contact form needs a working MongoDB connection.");
    }
  } else {
    console.log("MONGODB_URI is missing. Copy .env.example to .env and configure MongoDB.");
  }
  app.listen(PORT, () => console.log(`Portfolio running at http://localhost:${PORT}`));
}
start();
