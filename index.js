const express = require("express");
const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});

// Show homepage
app.get("/", (req, res) => {
    res.render("home", { user: null });
});

// Show form
app.get("/form", (req, res) => {
    res.render("form");
});

// Handle form submission
app.post("/submit", (req, res) => {
    const { name, age, branch, specialization, job } = req.body;
    res.render("result", { name, age, branch, specialization, job });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
